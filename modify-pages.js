// ==UserScript==
// @name         Google Ads 修改器
// @namespace    https://yourdomain.example/
// @version      1.0
// @description  修改 Google Ads 页面广告指标
// @author       你自己
// @match        https://ads.google.com/aw/campaigns*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // 等待元素加载工具
  function waitForElement(selector, callback, interval = 500, timeout = 10000) {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(timer);
        callback(el);
      } else if (Date.now() - startTime > timeout) {
        clearInterval(timer);
      }
    }, interval);
  }

  // 模拟修改广告数据
  function modifyAdMetrics() {
    const replacements = {
      '展示次数': '999,999',
      '点击率': '99.99%',
      '费用': '¥99,999',
      '平均每千次展示费用': '¥999.99',
      '点击次数': '999,999',
      '平均每次点击费用': '¥9.99',
    };

    Object.keys(replacements).forEach((label) => {
      // 查找所有包含文本的元素
      const elements = Array.from(document.querySelectorAll('*')).filter(el => el.textContent.includes(label));
      elements.forEach(el => {
        el.textContent = label + ': ' + replacements[label];
      });
    });
  }

  // 页面路径判断（只在 campaign 页执行）
  if (location.href.includes('/campaigns')) {
    waitForElement('body', () => {
      modifyAdMetrics();

      // 设置定时器每 5 秒重试一次（处理 SPA 页面更新）
      setInterval(modifyAdMetrics, 5000);
    });
  }
})();

(function () {
  'use strict';

  // 修改页面标题
  const title = document.querySelector('title');
  if (title) title.textContent = '这是修改后的标题 ✅';

  // 修改页面上所有 <h1>
  document.querySelectorAll('h1').forEach((el) => {
    el.textContent = '这是我自定义的标题';
  });

  // 替换某些链接
  document.querySelectorAll('a').forEach((el) => {
    if (el.href.includes('example.com')) {
      el.href = 'https://your-new-link.com';
      el.textContent = '跳转到自定义网站';
    }
  });
})();

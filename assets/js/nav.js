// 导航高亮当前页面
(function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.fontWeight = 'bold';
        }
    });
})();

// 自动更新页脚时间
(function() {
    const footerTimes = document.querySelectorAll('.update-time');
    const now = new Date();
    const dateStr = now.getFullYear() + '-' + 
        String(now.getMonth()+1).padStart(2,'0') + '-' + 
        String(now.getDate()).padStart(2,'0');
    footerTimes.forEach(el => {
        el.textContent = dateStr;
    });
})();

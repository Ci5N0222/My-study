const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
const icons = document.querySelector('.nav-icons');

// 햄버거 메뉴 클릭 시 메뉴 토글링
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})
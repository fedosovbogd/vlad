const btnOpen = document.querySelector('.header-nav-btn');
const btnClose = document.querySelector('.mobile-btn-close');
const nav = document.querySelector('.mobile-nav');

btnOpen.addEventListener('click',function(){
	nav.classList.remove('none');
});
btnClose.addEventListener('click',function(){
	nav.classList.add('none');
});
const hamburger=document.querySelector('#hamburger');
const close=document.querySelector('#close');
const portfolio=document.querySelector('#portfolio');
const mobileMenuOptions=document.querySelectorAll('.mobile-menu-option');
hamburger.addEventListener('click',()=>{
portfolio.classList.remove('hide')   
});
close.addEventListener('click',()=>{
    portfolio.classList.add('hide')   
    });
mobileMenuOptions.forEach((element) => {
    element.addEventListener('click',()=>{
        portfolio.classList.add('hide')   
        });
});
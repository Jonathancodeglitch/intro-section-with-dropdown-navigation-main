const openMenu=document.querySelector('.menu-btn');
const closeMenu=document.querySelector('.close-btn');
const sidebar=document.querySelector('.main-menu');
const featuresBtn=document.querySelector('.features-btn');
const companyBtn=document.querySelector('.company-btn');
const modelBg=document.querySelector('.modal-bg');
const features=document.getElementById('Features');
const company=document.getElementById('company');
const dropDown=document.querySelectorAll('.dropdown');


openMenu.addEventListener('click',function(){
    sidebar.classList.add('active')
    modelBg.classList.add('open-model')
});

closeMenu.addEventListener('click',function(){
    sidebar.classList.remove('active')
    modelBg.classList.remove('open-model')
});

featuresBtn.addEventListener('click',function(){
    features.classList.toggle('open-content');
})


companyBtn.addEventListener('click',function(){
    company.classList.toggle('open-content');
})


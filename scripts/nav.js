const close = document.querySelector(".close");
document.body.style.overflow='hidden';
close.addEventListener('click',()=>{
    close.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
})
const close = document.querySelector(".close");

close.addEventListener('click',()=>{
    // document.body.style.overflow='hidden';
    close.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
})
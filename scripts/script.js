const vid = document.querySelector('video');
const skip = document.querySelector(".skip");
const play = document.querySelector('.play');
const modal = document.querySelector('.intro-modal');
const close = document.querySelector(".close");
document.body.style.overflow='hidden';
close.addEventListener('click',()=>{
    close.classList.toggle('active');
})
skip.addEventListener("click",()=>{
    modal.classList.add('fade');
    setTimeout(()=>{
        modal.classList.add('hide');    
    },1000)
    
    document.body.style.overflowX='hidden';
    document.body.style.overflowY='auto';
})
// vid.currentTime=0.8;
play.addEventListener('click',()=>{
    play.style.display= 'none';
    vid.play();
    vid.playbackRate=1.2;
    vid.onended= ()=>{
        modal.classList.add('fade');
    setTimeout(()=>{
        modal.classList.add('hide');    
    },1000)
        document.body.style.overflowX='hidden';
        document.body.style.overflowY='auto';
    }  
})

const heros= document.querySelectorAll('.bg-holder');
heros.forEach(hero=>{
    let ch = document.createElement('div');
    ch.className = 'overlay';
    hero.appendChild(ch);
})
const heroList = document.querySelectorAll('.list h2');

for(let i=0;i<heroList.length;i++){
    heroList[i].addEventListener('mouseover',()=>{
        heros.forEach(h=>{
            h.classList.remove('active');
        })
        heros[i].classList.add('active');
    })

}
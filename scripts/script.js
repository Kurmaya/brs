const vid = document.querySelector('video');
const skip = document.querySelector(".skip");
const play = document.querySelector('.play');
const modal = document.querySelector('.intro-modal');

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
  // lightbox image src
  let lightImg = document.querySelector('.light-img>img').src;
  // lightbox description heading
  let lightHead = document.querySelector('.light-desc h2');
  // lightbox description p
  let lightP = document.querySelector('.light-desc p');
for(let i=0;i<heroList.length;i++){
    heroList[i].addEventListener('mouseover',()=>{
        // console.log(i)
        heros.forEach(h=>{
            h.classList.remove('active');
        })
        heros[i].classList.add('active');
    })
  
    
heroList[i].addEventListener('click',()=>{
    document.querySelector('.light-box').classList.add('active');
    switch (i) {
        case 0:
            // console.log('0')
            lightHead.textContent = 'Fowl Play | A Feature Film Franchise';
            document.querySelector('.light-img>img').src=heros[i].querySelector('img').src;
            lightP.textContent= 'It’s Chicken Run, but with Pigeons! These Claymation Birds will take flight in 2025. Stay Tuned.';
            document.querySelector('.light-links a').href='';
            document.querySelector('.light-links a').textContent=''
            document.querySelector('.light-links a').classList.remove('active');
            break;
    
            case 1:
                document.querySelector('.light-img>img').src=heros[i].querySelector('img').src;
                lightHead.textContent = 'Family Affair | A Short Comedy Film';
            lightP.textContent= 'Tanner is a high school senior who seems to have everything going for him. He’s smart, athletic, and popular -- but there’s something (or rather someone) he has to hide from his mother.';
            document.querySelector('.light-links a').href='https://anemonefilms.vhx.tv/';
            document.querySelector('.light-links a').textContent='Rent/Buy Here.'
            document.querySelector('.light-links a').classList.add('active');
            break;
            case 2:
                document.querySelector('.light-img>img').src=heros[i].querySelector('img').src;
                lightHead.textContent = 'Notes On: Nudes | A Short Comedy Series';
            lightP.textContent= 'It’s hard to get some. After a long day at work, Tay just wants to get off. The Grindr Grid stands in their way, but longing for action, they persist. However, it seems the notes don’t stop at the office.Stay Tuned for the next film, Notes On: Cooties.';
            document.querySelector('.light-links a').href='';
            document.querySelector('.light-links a').textContent=''
            document.querySelector('.light-links a').classList.remove('active');
            
            break;
            case 3:
                document.querySelector('.light-img>img').src=heros[i].querySelector('img').src;
                lightHead.textContent = 'What Will The Guests Say!? | A Fantasy Horror Film';
            lightP.textContent= 'This is a film about the nightmare of growing up in a perfectionist household, told through the imagination of a misfit child.';
            document.querySelector('.light-links a').classList.remove('active');
            document.querySelector('.light-links a').href='';
            document.querySelector('.light-links a').textContent=''
            break;
        default:
            break;
    }
})
}
document.querySelector('.min').addEventListener('click',()=>{
    document.querySelector('.light-box').classList.remove('active');
})
let count = 0;
function heroChange(){
    
    // if(count=heros.length-1){
    //     count=0;
    // }
    setInterval(()=>{
        
        
            heros.forEach(h=>{
                h.classList.remove('active');
            })        
            heros[count].classList.add('active');
            if(count<heros.length){
                count++
            }
            else if(count=heros.length){
                count=0;
            }
            
           
        
    },2000)
}

// heroChange();

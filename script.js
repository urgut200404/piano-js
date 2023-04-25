let nota = document.querySelectorAll(".nt"); 
let audio_data_key=[65,119,115,101,100,102,116,103,121,104,117,106,107,111,108,112,59]
let audio_src=['/audios777/28.mp3','/audios777/30.mp3','/audios777/32.mp3',
'/audios777/33.mp3','/audios777/35.mp3','/audios777/37.mp3',
'/audios777/39.mp3','/audios777/40.mp3','/audios777/42.mp3',
'/audios777/44.mp3','/audios777/45.mp3','/audios777/47.mp3',
'/audios777/49.mp3','/audios777/51.mp3','/audios777/52.mp3',
'/audios777/54.mp3','/audios777/56.mp3','/audios777/57.mp3',
'/audios777/59.mp3','/audios777/61.mp3','/audios777/63.mp3',
'/audios777/29.mp3', '/audios777/31.mp3','/audios777/34.mp3',
'/audios777/36.mp3','/audios777/38.mp3','/audios777/41.mp3',
'/audios777/43.mp3','/audios777/46.mp3','/audios777/48.mp3',
'/audios777/50.mp3','/audios777/53.mp3','/audios777/55.mp3',
'/audios777/58.mp3','/audios777/60.mp3','/audios777/62.mp3']
let n=0,o=0,p=0; 
// let l=[81,87,69,82,84,89,85,73,79,80,103,104,105,96,189];
let a=[65,83,68,70,71,72,74,75,76,186,90,88,67,86,66,78,77,97,98,99,100,81,87,69,82,84,89,85,73,79,80,103,104,105,96,189];
nota.forEach((el,inedx)=>{
    el.dataset.key=`${a[inedx]}`;
})

while (n<36) {
    let audio_cr=document.createElement('audio');
    audio_cr.src=`${audio_src[n]}`;
    audio_cr.dataset.key=`${a[n]}`;
    document.body.appendChild(audio_cr);
    n++;
     
}

//  console.log(nota);
let x=0.1;
function nimadur(el){
    let div = document.querySelector(`.nt[data-key='${el.keyCode}']`);
    let audio= document.querySelector(`audio[data-key='${el.keyCode}']`);
    
    if(!div){return;}
    audio.currentTime=0;
    audio.play();
  
    div.classList.add('notaclass');
   
 }

function remove(el){
    let div = document.querySelector(`.nt[data-key='${el.keyCode}']`);

    // if(el.propertyName !=="transform"){ return};
    // this.classList.remove('notaclass');
    div.classList.remove('notaclass');
} 
// nota.forEach(elemt => elemt.addEventListener('transitionend',remove));

window.addEventListener('keydown',nimadur);
window.addEventListener('keyup',remove);
 

API = 'http://127.0.0.1:5502/audios777/';
fetch(API).then((res)=>{return res}).then((data)=>{
    console.log(data);
})
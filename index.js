var clicks =document.body.querySelectorAll('.drum') 
//Mouse event
for(var i=0;i<clicks.length;i++){
    document.querySelectorAll("button")[i].addEventListener('click',function(){
  var press =  this.innerHTML;
       play(press);
       buttonAnimation(press);
    })
}
//keyborad 
    document.addEventListener('keypress',function(event){
  var press =  event.key;
  console.log(press)
play(press);
buttonAnimation(press);
          })
//switch of sounds
function play(input){
 switch(input){
            case 'w':
                var tom1 = new Audio('./sounds/tom-1.mp3')
                tom1.play();
                break;
            case 'a':
                var tom2 = new Audio('./sounds/tom-2.mp3')
                tom2.play();
                break;
            case 's':
                var tom3 = new Audio('./sounds/tom-3.mp3')
                tom3.play();
                break;
            case 'd':
                var tom4 = new Audio('./sounds/tom-4.mp3')
                tom4.play();
                break;
            case 'j':
                var snare = new Audio('./sounds/snare.mp3')
                snare.play();
                break;
            case 'k':
                var kick = new Audio('./sounds/kick-bass.mp3')
                kick.play();
                break;
            case 'l':
                var crash = new Audio('./sounds/crash.mp3')
                crash.play();
                break;
                default:
                    console.log(press);
        }
}
function buttonAnimation(key){
var active = document.querySelector('.'+key)
active.classList.add('pressed');
setTimeout(function(){
active.classList.remove('pressed')
},110)
// console.log(active)
}
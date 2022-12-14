const burgMenuIcon = document.getElementById('brg');
const sliderTurn = document.querySelector('.slideBar')
// const a =document.getElementById('s');

const hed = document.querySelector('header')

burgMenuIcon.addEventListener('click' , (e)=>{
    sliderTurn.classList.toggle("slidebarIo")
    // const timeAn = gsap.timeline({defaut:{duration:0.75 , ease :"power.out"}})
    
    // timeAn.fromTo(".brg-list" , {y:100} , {y:0});
// gsap.to(".brg-list" , {opacity:0 , y:-100 , duration:0.75 , ease:'power1.out'} ,{opacity:1 , y:0});
 
    // gsap.to(".brg-list" , {y:-100} , {y:0})
    // burgMenuIcon.toggleAttribute('close')
    console.log(e);
})
const burgerList =document.querySelectorAll('.brg-list li a')

window.addEventListener('click' , ()=>{
    console.log('help');
    sliderTurn.classList.add('hidden')
})
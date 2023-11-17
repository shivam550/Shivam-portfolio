let hamburger = document.querySelector('.hamburger');
let cross = document.querySelector('.cross');

let mobilenav= document.querySelector('.mobile-nav')


hamburger.addEventListener('click',function(){
  mobilenav.classList.add('open');
});


cross.addEventListener('click',function(){
mobilenav.classList.remove('open')
});


// down-to-top button
const herosection = document.querySelector('.hero');
const footerelement = document.querySelector(".footer");

const scrollelement = document.createElement('div');
scrollelement.classList.add("scroll-top");
scrollelement.innerHTML = `<i class="fa-solid fa-arrow-up scroll "></i>`

footerelement.after(scrollelement);

const scroll = ()=>{
  herosection.scrollIntoView({behavior:"smooth"})
}

scrollelement.addEventListener("click",scroll);


// carousel div



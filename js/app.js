//################# Add Dynamic Nav Bar ########################
const secs= document.querySelectorAll('section');
const uL=document.getElementById('navbar__list');
function setList(){
  secs.forEach((section)=>{
    let li=document.createElement('li');
    let a=document.createElement('a');
    let secID = section.id;
    let secDATA = section.dataset.nav;
    // var newContent = document.createTextNode("Section");
    let newContent = document.createTextNode(`${secDATA}`);
    a.title = `LinkTo${secDATA} `;
    a.appendChild(newContent);
    // a.href = '#section1';
    a.href = `#${secID}`;
    li.classList.add('li-styles');
    a.classList.add('a-links');
    a.classList.add(`link${secID}`);
    console.log(li);
    uL.append(li);
    li.append(a);
    // Main Code Form From Udacity javascript & Dom >> Creating Content with js
  })
};
setList();


//################# Resposive Nav Bar ########################
// i take these function click from W3Schools from them Examels and Edit it With js from course
const resbonsive=document.getElementById('resbonsive');
resbonsive.addEventListener('click',()=>{
  uL.classList.toggle('show');
});

//################# Add Active Class During Scroll ########################
window.addEventListener("scroll",navActive)
function navActive() {
  // https://www.w3schools.com/jsref/prop_win_pagexoffset.asp  ,and can replace with scrolltop
  let scrollY = window.pageYOffset;
  // console.log("scrollY  "+Math.floor(scrollY));

secs.forEach((section)=>{
  let secID = section.id;
// console.log(secID);
  let secHeight = section.getBoundingClientRect().height;
  // console.log("secHeight  "+secHeight);

  let secTop = section.getBoundingClientRect().top ;
  // console.log("secTop  "+secTop);

  let secViewport = scrollY+secTop -100 ;
  // console.log("secViewport  "+secViewport);

  if (scrollY > secViewport &&
      scrollY <= secViewport + secHeight){
    document.querySelector(`.link${secID}`).classList.add("Active");
    // Add Active State To Sections
    section.style.cssText = "background-color: ; border: 6px inset #1C6EA4; border-radius: 11px 0px 11px 0px;";

  } else {
    document.querySelector(`.link${secID}`).classList.remove("Active");
    // Remove Active State To Sections
    section.style.cssText = "background-color: ; border: 1px inset #1C6EA4; border-radius: 11px 0px 11px 0px;";
  }

});}

//################# ADD Smooth Scroll To Nav Bar ########################

let smoothAnchor = document.querySelectorAll(".a-links");
// console.log(smoothAnchor);

smoothAnchor.forEach(link => {
  link.addEventListener("click", event => {

    //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    //Blocking default click handling
    event.preventDefault();

    // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    let target = document.querySelector(event.target.hash);
    // console.log(target);

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

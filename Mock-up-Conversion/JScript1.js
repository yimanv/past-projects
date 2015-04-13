var left = document.getElementById("left");
var right = document.getElementById("right");
var banner= document.getElementById("banner");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third= document.getElementById("third");
var images = ["1.jpg", "2.png", "3.jpg"];
var value = 0;
var information = document.getElementById("information");
var about = document.getElementById("about");
var width = banner.clientWidth;
var height = banner.clientHeight;



function leftbrowse() {

if(value == 0)
{

value = 3;
}

value = value -1;
banner.src= images[value];
banner.width= width;
banner.height=height;



}




function rightbrowse() {

if(value == 2)
{

value = -1;
}

value = value +1;
banner.src= images[value];
banner.width= width;
banner.height=height;



}

function firstimage(){

value= 0;
banner.src = images[value];
banner.width= width;
banner.height=height;
}
function secondimage(){

value= 1;
banner.src = images[value];
banner.width= width;
banner.height=height;
}
function thirdimage(){

value= 2;
banner.src = images[value];
banner.width= width;
banner.height=height;
}

function abouteli(){
information.innerHTML="Lore ipsum to be filled in later";
}

  

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

first.addEventListener("click", firstimage, false);
second.addEventListener("click", secondimage, false);

third.addEventListener("click", thirdimage, false);

left.addEventListener("click", leftbrowse, false);
right.addEventListener("click", rightbrowse, false);
about.addEventListener("click", abouteli, false);
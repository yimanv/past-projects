var eli= document.getElementById("eli");
var mood= document.getElementById("mood");
var vocal= document.getElementById("vocal");
var banner= document.getElementById("banner");

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function abouteli() {
window.open("http://www.eli-jacob.com");
}

function aboutmood()
{
window.open("http://mood-ent.com");
}

function aboutvocal() 

{
window.open("http://vocalstudio.ca");
}

function overeli()
{eli.style.backgroundColor = 'blue';

}
function overvocal()
{vocal.style.backgroundColor = 'purple';

}
function overmood()
{mood.style.backgroundColor = 'blue';



}

function exiteli()
{eli.style.backgroundColor = 'initial';

}
function exitvocal()
{vocal.style.backgroundColor = 'initial';

}
function exitmood()
{mood.style.backgroundColor = 'initial';



}
eli.addEventListener("click", abouteli, false);
mood.addEventListener("click", aboutmood,false);
vocal.addEventListener("click", aboutvocal,false);
eli.addEventListener("mouseout", exiteli, false);
mood.addEventListener("mouseout", exitmood,false);
vocal.addEventListener("mouseout",exitvocal,false);
eli.addEventListener("mouseover", overeli, false);
mood.addEventListener("mouseover", overmood,false);
vocal.addEventListener("mouseover", overvocal,false);



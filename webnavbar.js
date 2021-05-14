



// When the user scrolls down 20px from the top of the document, slide down the navbar -->



window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("mytopNavbarprogress").style.width = scrolled + "%";

  if (winScroll > 55) 
  {
    document.getElementById("navbarTopWeb").style.top = "0";
    document.getElementById("progressNavContainer").style.bottom = "0";
    document.getElementById("scrolltotopButton").style.bottom='80px';
  }
  else 
  {
    document.getElementById("navbarTopWeb").style.top = "-130px";
    document.getElementById("progressNavContainer").style.bottom = "0";
    document.getElementById("scrolltotopButton").style.bottom='-80px';;
  }
}








 //Scroll to bottom to top  is start 



// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Scroll to bottom to top  is End 










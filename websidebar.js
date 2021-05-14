 


// start -- When the user click on nav humbar ( humburger ) then navbar default will not collapse and sidebar will be show -->

function showsidebar()
{
  var sidebarpanelmaindiv = document.getElementById('sidebarpanelside');
  document.getElementById('navbarNav').style.display='none';

    if (sidebarpanelmaindiv.style.margin==='0px')
    {
        sidebarpanelmaindiv.style.marginLeft="-300px";
        document.getElementById('sidebarbgblackdiv').style.display='none';
        document.getElementById('sidebarbgblackdiv').style.backgroundColor='none';
    }
    else
    {
      sidebarpanelmaindiv.style.margin="0px";
      document.getElementById('sidebarbgblackdiv').style.display='block';
      document.getElementById('sidebarbgblackdiv').style.backgroundColor='rgba(0,0,0,0.6)';
    }

    var navhumbarchangetocross = document.getElementById('navhumbbar');
    navhumbarchangetocross.classList.toggle("changenavbar");
}

// end -- When the user click on nav humbar ( humburger ) then navbar default will not collapse and sidebar will be show -->


























// start -- hide the overlay effect div when click on outside the sidebar and humburger button after that  sidebar will be close

 function hidesidebaroverlay()
 {
    document.getElementById('sidebarpanelside').style.marginLeft="-300px";
    document.getElementById('sidebarbgblackdiv').style.display='none';
    
    var navhumbarchangetocross = document.getElementById('navhumbbar');
    navhumbarchangetocross.classList.toggle("changenavbar");
 }

// end -- hide the overlay effect div when click on outside the sidebar and humburger button after that  sidebar will be close

























// start -- open and show see more div in sidebar when user click on seeMore button in sidebar 

function openseemoresidebar()
	{
		document.getElementById('sidebarseemoreid').style.marginLeft="0";
		document.getElementById('sidebarhomenav').style.display='none';
		// document.getElementById('sidebarseemoreid').style.left='0';
		// document.getElementById('sidebarseemoreid').style.bottom='0';
		// document.getElementById('sidebarseemoreid').style.hight='100%';
	}
	
// end -- open  and show  see more div in sidebar when user click on seeMore button in sidebar



// start -- close and hide the see more div in sidebar when user click on backbutton button in sidebar see More div

function openseemoresidebarback()
	{
		document.getElementById('sidebarseemoreid').style.marginLeft="-300px";
		document.getElementById('sidebarhomenav').style.display='block';
		// document.getElementById('sidebarseemoreid').style.left='100%';
	}

// end -- close and hide the see more div in sidebar when user click on backbutton button in sidebar see More div











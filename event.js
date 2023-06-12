window.addEventListener("load", me, false);
function me() {
    document.getElementById("auto").addEventListener("mouseover", over, false);
    document.getElementById("auto").addEventListener("mouseout", out, false);
    document.getElementById("baleno").addEventListener("mouseover", over1, false);
    document.getElementById("baleno").addEventListener("mouseout", out1, false);
    document.getElementById("swift").addEventListener("mouseover", over2, false);
    document.getElementById("swift").addEventListener("mouseout", out2, false); 
    document.getElementById("brezza").addEventListener("mouseover", over3, false);
    document.getElementById("brezza").addEventListener("mouseout", out3, false);


    function over() {
        document.getElementById("auto").setAttribute("src", "auto k10int.webp");
    }

    function out() {
        document.getElementById("auto").setAttribute("src", "auto k10.webp");
    }
    function over1() {
        document.getElementById("baleno").setAttribute("src", "ba1.webp");
    }

    function out1() {
        document.getElementById("baleno").setAttribute("src", "m.balaneo.jpg");
    }
    function over2() {
        document.getElementById("swift").setAttribute("src", "SuzukSwiftnt.jpg");
    }

    function out2() {
        document.getElementById("swift").setAttribute("src", "m.blue.jpg");
    }
    function over3() {
        document.getElementById("brezza").setAttribute("src", "Brezzaint.jpg");
    }

    function out3() {
        document.getElementById("brezza").setAttribute("src", "m.brezza.webp");
    }
}
window.addEventListener( "load", frmevnt, false );
function frmevnt()
{
{
document.getElementById("CustomerName").addEventListener("focus",focusone, false );
document.getElementById("CustomerName").addEventListener("blur", blurone, false );
document.getElementById("password").addEventListener("focus",focus2, false );
document.getElementById("password").addEventListener("blur", blur2, false );
document.getElementById("address").addEventListener("focus",focus3, false );
document.getElementById("address").addEventListener("blur", blur3, false );
document.getElementById("Pincode").addEventListener("focus",focus4, false );
document.getElementById("Pincode").addEventListener("blur", blur4, false );
document.getElementById("email").addEventListener("focus",focus5, false );
document.getElementById("email").addEventListener("blur", blur5, false );
document.getElementById("MobileNumber").addEventListener("focus",focus6, false );
document.getElementById("MobileNumber").addEventListener("blur", blur6, false );
document.getElementById("myform").addEventListener("submit",subfun, false );
document.getElementById("myform").addEventListener("reset",resetfun, false );
}

function focusone() 
{document.getElementById("help").innerHTML=" Enter your sweet name:" ;
}
function blurone() 
{ 
    document.getElementById("help").innerHTML="" ;
}
function focus2() 
{document.getElementById("help").innerHTML=" Enter your Strong Password:" ;
}
function blur2() 
{ 
    document.getElementById("help").innerHTML="" ;
}
function focus3() 
{document.getElementById("help").innerHTML=" Enter your Address:" ;
}
function blur3() 
{ 
    document.getElementById("help").innerHTML="" ;
}
function focus4() 
{document.getElementById("help").innerHTML=" Enter your  correct Pincode:" ;
}
function blur4() 
{ 
    document.getElementById("help").innerHTML="" ;
}
function focus5() 
{document.getElementById("help").innerHTML=" Enter your Email:" ;
}
function blur5() 
{ 
    document.getElementById("help").innerHTML="" ;
}
function focus6() 
{document.getElementById("help").innerHTML=" Enter your Phone-Number:" ;
}
function blur6() 
{ 
    document.getElementById("help").innerHTML="" ;
}

function subfun() 
{
     window.alert("Do You Want To Submit");
  window.alert("Thank You!!!!!!");
}
function resetfun() 
{
    window.alert("Do You Want To reset")}
}
function stp()
	{
	document.getElementById("move").addEventListener("mousemove", moveone, false );
	document.getElementById("move").addEventListener("mouseout", leaveone, false );
	}
	
	function moveone()
	{
	document.getElementById("move").innerHTML ="OUR POPULAR BRANDS";
	}

	function leaveone()
	{
	document.getElementById("move").innerHTML ="THE MECH DOCTOR";
	}
	window.addEventListener( "load", stp, false );
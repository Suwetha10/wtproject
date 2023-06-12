function loginform()
{
  var password=document.myform.password.value;
  var CustomerName=document.myform.CustomerName.value;  
  if (CustomerName==null || CustomerName==" ")
  {  
    alert("Name can't be blank");  
    return false;  
  }
   if (password == "") 
   {
            alert("Please enter your password");
             password.focus();
             return false;
   }
   if(password.length!= "")
   {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
          if(regex.test(password) === false) 
        { 
              alert("Password should be atleast 8 characters");
               alert("It should be atleast one uppercase,one special character,numbers");
           return false;
         }       
    }
}
function validateform()
{
   var password=document.myform.password.value;
   var ConfirmPassword=document.myform.ConfirmPassword.value;
   var CustomerName=document.myform.CustomerName.value;  


   if (CustomerName==null || CustomerName=="")
  {  
    alert("Name can't be blank");  
    return false;  
  }
   if (password == "") 
   {
            alert("Please enter your password");
             password.focus();
             return false;
   }
   if(password.length!= "")
   {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
          if(regex.test(password) === false) 
        { 
              alert("Password should be atleast 8 characters");
               alert("It should be atleast one uppercase,one special character,numbers");
           return false;
         }       
    }
    if(password !=ConfirmPassword){
      alert("Password mismatch");
            return false;
    }
    
}
function signform()
{
var CustomerName=document.myform.CustomerName.value;  
var password=document.myform.password.value;
var MobileNumber=document.myform.MobileNumber.value;
var radio=document.getElementsByName("feed");  
var formValid= false;
var email=document.myform.email.value;

if (CustomerName==null || CustomerName=="")
{  
  alert("Name can't be blank");  
  return false;  
}

if (password == "") 
 {
            alert("Please enter your password");
             password.focus();
             return false;
 }
if(password.length!= "")
   {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
          if(regex.test(password) === false) 
        { 
              alert("Password should be atleast 8 characters");
               alert("It should be atleast one uppercase,one special character,numbers");
           return false;
         }       
    }
if(MobileNumber==null||MobileNumber=="")
{
  alert("Please Enter the MobileNumber");
  return false;
}
if(MobileNumber.length!= " ")
    {
        var regex= /^(?=.*[0-9])(?=.{10,})/;
        if(regex.test(MobileNumber) === false)
        {
            alert("Please Enter the valid Phone Number");
            return false;
        }
    }


    var i = 0;
    while (!formValid && i < radio.length) {
        if (radio[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
    alert("Must check some option!");
    alert("Please click anyone of radio button.")

    return formValid;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
}
else {
    alert("You have entered an invalid email address!");
    return (false);
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

function loanform()
{
  var Name=document.myform.Name.value;
  var email=document.myform.email.value;  
  var age=document.myform.age.value;
  var pan=document.myform.pan.value;
  var phone=document.myform.phone.value;
  var salary=document.myform.salary.value;
  if (Name==null || Name=="")
  {  
    alert("Name can't be blank");  
    return false;  
  }
  if(phone.length!= "")
    {
        var regex= /^(?=.*[0-9])(?=.{10,})/;
        if(regex.test(phone) === false)
        {
            alert("Please Enter the valid Phone Number");
            return false;
        }
    }
  if(age<=18){
       alert("YOUR age is to less so can't Eligible for applying  loan");
      }
    
  if(salary<=20000)
  {
  alert("Your salary is too low for appling the loan");
  }
  if(pan.length!= "")
  {
    var regex= /^(?=.*[0-9])(?=.{10,})/;
    if(regex.test(pan) === false)
    {
        alert("Please Enter the valid PAN Number");
        return false;
    }
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  return (true);
  }


}
























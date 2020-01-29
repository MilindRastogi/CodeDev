var semail = [];
var spsw = [];

function info_signup(){
semail.push(document.getElementById("email").value);
spsw.push(document.getElementById("psw").value);
console.log(semail);
}
function info_login()
{
var lemail = document.getElementById("lemail").value;
var lpsw = document.getElementById("lpsw").value;
if(lemail === semail[0] && lpsw === spsw[0])
  console.log("logged in");
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
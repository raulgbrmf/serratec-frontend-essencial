
var logado = false;
var checkbox=document.getElementById("login_menu");

if (localStorage.getItem("acesso") == "true") {
    logado = true;
    console.log("logado");
    document.getElementById("login").innerHTML ="logout";
    
   
        
       
    
}
function myfunction(){
if( checkbox.checked==false && logado==true){
    document.getElementById("login_menu").onclick
   logout();
   console.log("deslogado");
    
}}



function logout() {
    
    logado = false;
    localStorage.setItem("acesso",false);
    window.location.href="index.html";
    
}

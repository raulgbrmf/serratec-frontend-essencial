
var darkmode=false;



function darkMode(){
    if(  localStorage.getItem("acesso")==true){
        localStorage.setItem("acesso",false);
    }
    else{
    localStorage.setItem("dark",true);

   

    
        
        var body= document.getElementById("corpo");
        body.classList.toggle("dark-mode");
        var a = document.getElementsByClassName("link");
        for(i=0;i<a.length;i++){
            a[i].classList.toggle("dark-font");
            }
        var menu=document.getElementById("menu-principal");
       menu.classList.toggle("dark-font")

       var login=document.getElementById("login");
       login.classList.toggle("dark-mode-login");
    
       var darktoggle=document.getElementById("toggle");
       darktoggle.classList.toggle("dark-font");
    
       var populares =document.getElementById("populares");
       
       populares.classList.toggle("dark-font");
              
      
       
    }
    
  
  
  
   
}

 




 
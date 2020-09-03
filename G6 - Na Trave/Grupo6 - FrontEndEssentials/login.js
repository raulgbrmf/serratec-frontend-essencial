function logar(){
    var email=document.getElementById("email");
    var senha=document.getElementById("senha");

    if(email.value=="admin@admin.com" && senha.value=="admin"){
        localStorage.setItem("acesso",true);
        document.getElementById("login_menu").checked = false;
        window.location.href="produtos.html";
    }else{

        alert("usuario ou senha invalidos");
    }
}
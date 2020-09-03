// Função Alto Contraste
checaContraste(); // verifico o status do contraste ao iniciar o DOM
var teste = document.getElementsByClassName("altocontraste");
for (var i = 0; i < teste.length; i++) {
    teste[i].addEventListener("click", ativaContraste);
}

function checaContraste() {
    var status = localStorage.getItem('contraste');

    if (status == 'false') {
        document.body.classList.remove('contraste');
    } else {
        document.body.classList.add('contraste');
    }
}

function ativaContraste(evt) {
    evt.preventDefault();

    var statusContraste = document.body.classList.toggle("contraste");
    localStorage.setItem('contraste',statusContraste); // grava o status do click

    console.log("contraste: " + statusContraste);
}



// Login

// Verifica se o formulario foi submetido
document.getElementById("btn-login").addEventListener("click", checaLogin);

function checaLogin(evt) {
    evt.preventDefault();

    var frmUsuario = document.getElementById("login-usuario").value;
    var frmSenha = document.getElementById("login-senha").value;
    
    // checa se os campos usuario e senha foram preenchidos
    if(frmUsuario == "" || frmSenha == "") {
        alert("Login - Campos em branco!")
    } else {
        if(frmUsuario == 'usuario' && frmSenha == '1234') {
            // aguarda 0,5 segundo e redireciona
            setTimeout(function() {
                window.location.href = "logado.html";
            }, 500);
        } else {
            alert("Usuário ou senha incorretos");
        }
    }
}



// Logout
function checaLogout() {
    setTimeout(function() {
        alert("Você foi desconectado com sucesso!");
        window.location.href = "index.html";
    }, 500);
}



// Google Maps
function initMap() {
    // The location of Petrópolis
    var uluru = {
        lat: -22.511,
        lng: -43.177
    };
    // The map, centered at Petrópolis
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: uluru
    });

    // The marker, positioned at Petrópolis
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}



// Formulario de Contato

// Verifica se o formulario foi submetido
document.getElementById("enviar").addEventListener("click", checaForm);

// Recupero ID das mensagens
var ok = document.getElementById("alerta-ok");
var erro = document.getElementById("alerta-erro");


function checaForm(evt) {

    var frmNome = document.getElementById("nome").value;
    var frmEmail = document.getElementById("email").value;
    var frmCurso = document.getElementById("curso").value;
    var frmAssunto = document.getElementById("assunto").value;
    var frmMsg = document.getElementById("mensagem").value;
    
    if(frmNome != "" || frmEmail != "" || frmCurso != "" || frmAssunto != "" || frmMsg != "") {
        erro.classList.remove('d-block');
        erro.classList.add('d-none');

        ok.classList.remove('d-none');
        ok.classList.add('d-block');
    } else {
        erro.classList.remove('d-none');
        erro.classList.add('d-block');
    }
}
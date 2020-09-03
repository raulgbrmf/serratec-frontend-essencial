const inputEle = document.getElementById('email');

inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  var valor = document.getElementById('email').value;
  if (key == 13) { // codigo da tecla enter
    if(!validaEmail(valor))
    {
      alert('preencha com um email válido: ' + this.value);
      inputEle.style.border = "1px solid red";
    }else{
      inputEle.style.border = "";
      alert('Lets Play2Gether');
    }
  }
});

function validaEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
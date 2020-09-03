const usuarios = [
  {
    login: 'Renato',
    senha: '123',
  },
  {
    login: 'Célio',
    senha: '123',
  },
  {
    login: 'Igor',
    senha: '123',
  },
  {
    login: 'Ercules',
    senha: '123',
  },
  {
    login: 'Ana',
    senha: '123',
  },
];

const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const enviar = document.querySelector('#login-enviar');
const form = document.querySelector('#id-form');

const validacaoLogin = () => {

  let usuarioLogado = usuarios.filter((usuario) => {
    if (usuario.login === login.value && usuario.senha === senha.value) {
      console.log(usuario);
      return usuario;
    } else {
      form.innerHTML = `<span class="user">Login ou senha incorretos!</span>`;
      setTimeout(() => {
        location.href = '../login.html';
      }, 3000);
      clearTimeout();
    }
  });

  usuarioLogado.forEach((usuarioLogado) => {
    
      console.log(usuarioLogado);
      form.innerHTML = `<span class="user">${usuarioLogado.login} logado com sucesso!</span>`;
      setTimeout(() => {
        location.href = '../index.html';
      }, 3000);
  });
};

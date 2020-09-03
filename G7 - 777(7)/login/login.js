function doLogin(form) {
  event.preventDefault();

  var userList = [
    {
      nome: "Rafael",
      senha: "123",
    },
    {
      nome: "Mayana",
      senha: "123",
    },
    {
      nome: "Douglas",
      senha: "123",
    },
    {
      nome: "Gabriela",
      senha: "123",
    },
  ];

  if (
    (form.usuario.value == userList[0].nome) &
      (form.senha.value == userList[0].senha) ||
    (form.usuario.value == userList[1].nome) &
      (form.senha.value == userList[1].senha) ||
    (form.usuario.value == userList[2].nome) &
      (form.senha.value == userList[2].senha) ||
    (form.usuario.value == userList[3].nome) &
      (form.senha.value == userList[3].senha)
  ) {
    location.href = "../index.html";
    localStorage.setItem("username", form.usuario.value);
    return true;
  } else {
    document.getElementById("error").style.display = "block";
    return false;
  }
}

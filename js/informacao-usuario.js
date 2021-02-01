function usuario() {
  let secaoUsuraio = document.querySelector("section");
  secaoUsuraio.setAttribute("class", "display-usuario");
}

usuario();

function dadosUsuario() {
  let usuario = document.querySelector(".dados-usuario");
  let icone = document.querySelector(".icone-editar");
  imagemUsuario(usuario);
  informcaoUsuario(usuario);
  iconeEditar(icone);
}

dadosUsuario();

function imagemUsuario(usuario) {
  let imagem = document.createElement("img");
  imagem.setAttribute("src", "./img/gabriel.jpeg");
  usuario.appendChild(imagem);
}

function informcaoUsuario(usuario) {
  let secaoDiv = document.createElement("div");
  usuario.appendChild(secaoDiv);
  secaoDiv.setAttribute("class", "informacao-usuario");
  nomeUsuario(secaoDiv);
  emailUsuario(secaoDiv);
}

function nomeUsuario(div) {
  let nome = document.createElement("p");
  nome.innerText = "Gabriel";
  div.appendChild(nome);
}

function emailUsuario(div) {
  let email = document.createElement("p");
  email.innerText = "eugabrielf@gmail.com";
  div.appendChild(email);
}

function iconeEditar(icone) {
  let imagemIcone = document.createElement("img");
  imagemIcone.setAttribute("src", "./img/botao-editar.png");
  icone.appendChild(imagemIcone);

  let texto = document.createElement("p");
  texto.innerText = "Editar";
  icone.appendChild(texto);
}

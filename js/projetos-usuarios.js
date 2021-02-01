let dadosProjetos = [
  { numero: 27, dado: "projetos" },
  { numero: 302, dado: "estrelas" },
  { numero: 83, dado: "seguidores" },
];

function projetos() {
  for (pos in dadosProjetos) percorreElementos(dadosProjetos[pos]);
}

projetos();

function percorreElementos(indice) {
  let cards = document.querySelector("#cards");
  let secaoDiv = document.createElement("div");

  let texto = document.createElement("p");
  texto.innerText = `${indice.dado}`;

  let quantidade = document.createElement("span");
  quantidade.innerText = `${indice.numero}`;

  secaoDiv.appendChild(texto);
  secaoDiv.appendChild(quantidade);
  cards.appendChild(secaoDiv);

  return indice;
}

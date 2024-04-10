let inputHomens = document.querySelector("#homens");
let inputMulheres = document.querySelector("#mulheres");
let inputCriancas = document.querySelector("#criancas");
let inputBebem = document.querySelector("#adultosBebem");

let resultado = document.querySelector("#resultado");

function calc() {
  let homens = parseInt(inputHomens.value);
  let mulheres = parseInt(inputMulheres.value);
  let criancas = parseInt(inputCriancas.value);
  let adultosBebem = parseInt(inputBebem.value);

  if (
    inputHomens.value === "" ||
    inputMulheres.value === "" ||
    inputCriancas.value === "" ||
    inputBebem.value === ""
  ) {
    alert("Por favor, preencha todos os campos antes de calcular.");
    return;
  }

  document.getElementById("churrascoForm").style.display = "none";

  document.querySelector("h2").style.display = "none";

  document.querySelector("#resultado").style.display = "block";

  document.getElementById("voltar").style.display = "block";

  let carneHomens = homens * 0.4;
  let carneMulheres = mulheres * 0.32;
  let carneCriancas = criancas * 0.2;
  let totalCarne = carneHomens + carneMulheres + carneCriancas;

  let paoDeAlho = homens * 2 + criancas * 1;

  let carvao = (homens + mulheres + criancas) * 1;

  let sal = (homens + mulheres + criancas) * 0.04;

  let gelo = Math.ceil((homens + mulheres + criancas) / 10) * 5;

  let refrigerante = Math.ceil((homens + mulheres + criancas) / 5);

  let agua = Math.ceil((homens + mulheres + criancas) / 5);

  let cerveja = adultosBebem * 3;

  resultado.innerHTML = `<h3>Será necessário:</h3>`;
  resultado.innerHTML += `<p class="meet">Carne: ${totalCarne.toFixed(
    2
  )} kg</p>`;
  resultado.innerHTML += `<p class="pao">Pão de alho: ${paoDeAlho} unidades</p>`;
  resultado.innerHTML += `<p class="carvao">Carvão: ${carvao} kg</p>`;
  resultado.innerHTML += `<p class="sal">Sal: ${sal.toFixed(2)} kg</p>`;
  resultado.innerHTML += `<p class="gelo">Gelo: ${gelo} kg</p>`;
  resultado.innerHTML += `<p class="refrigerante">Refrigerante: ${refrigerante} garrafas de 2L</p>`;
  resultado.innerHTML += `<p class="agua">Água: ${agua} garrafas de 1L</p>`;
  resultado.innerHTML += `<p class="beer">Cerveja: ${cerveja} garrafas de 600ml</p>`;
}

function voltar() {
  inputHomens.value = "";
  inputMulheres.value = "";
  inputCriancas.value = "";
  inputBebem.value = "";

  document.getElementById("churrascoForm").style.display = "flex";

  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").style.display = "none";

  document.getElementById("voltar").style.display = "none";

  document.querySelector("#textDiv h2").style.display = "block";

  const container = document.getElementById("container");
  container.classList.remove("dark-mode");

  toggleDarkModeButton.textContent = "Modo Escuro";
}

const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;

toggleDarkModeButton.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  body.classList.toggle("dark-mode");

  container.classList.toggle("dark-mode");

  if (container.classList.contains("dark-mode")) {
    toggleDarkModeButton.textContent = "Modo Claro";
  } else {
    toggleDarkModeButton.textContent = "Modo Escuro";
  }
}

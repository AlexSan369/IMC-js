const form = document.querySelector("#imc-form");
const calcular = form.querySelector("#calc-btn");

calcular.addEventListener("click", () => {
    const height = form.querySelector("#height").value;
    const validaHeight = parseFloat(height.replace(",", "."));
    const weight = form.querySelector("#weight").value;
    const validaWeight = parseFloat(weight.replace(",", "."));
    const result = (validaWeight / (validaHeight*validaHeight)).toFixed(1);
    /* console.log(result.toFixed(2)); */

    const resultImc = document.querySelector("p#imc-number span");
    resultImc.innerHTML = result;
    
    let situacao = "";
    let tipo;
    let classificacao = "";

    if (result < 18.5) {
         situacao = "Magreza";
         tipo = 0;
         classificacao = "Menor que 18,5";
    } else if (result < 24.9) {
         situacao = "Normal";
         tipo = 0;
         classificacao = "Menor que 24,9";
    } else if (result < 29.9) {
         situacao = "Sobrepeso";
         tipo = "I";
         classificacao = "Menor que 29,9";
    } else if (result < 39.9) {
         situacao = "Obesidade";
         tipo = "II";
         classificacao = "Menor que 39,9";
    }
    else { 
         situacao = "Sobrepeso";
         tipo = "III";
         classificacao = "Acima de 39,9";
    }

    const resultSituacao = document.querySelector("p#imc-info span");
    resultSituacao.innerHTML = situacao;
    const resultTipo = document.querySelectorAll(".table-header h4");
    resultTipo[0].innerHTML = situacao;
    resultTipo[1].innerHTML = `Tipo: ${tipo}`;
    resultTipo[2].innerHTML = classificacao;

    const resultContainer = document.querySelector("#result-container");
    const calcContainer = document.querySelector("#calc-container").classList.add("hide");
    resultContainer.classList.remove("hide");
});


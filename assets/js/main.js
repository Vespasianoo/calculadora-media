const btnFormSubmit = document.querySelector(".btn")
let liInputBox = document.querySelector(".list")

function Criando() {
    liInputBox.insertAdjacentHTML('beforeend', '<li><input type="number" placeholder="Digite o número"></li>')   
}

function Remover() {
    liInputBox.removeChild(liInputBox.firstElementChild);
}

function Calcular() {
    var soma = 0;
    let anchors = document.querySelectorAll('input')
    var arrayOfAnchors = [];
    
    for (var i = 0; i < anchors.length; i++) {
      var item = anchors[i];
      arrayOfAnchors.push(Number(item.value));
    };

    console.log(arrayOfAnchors);

    for(var i = 0; i < arrayOfAnchors.length; i++) {
        soma += arrayOfAnchors[i];
    }
    console.log(soma);

    calculo = soma / arrayOfAnchors.length
    console.log(calculo)

}

/* criar a function para limpar inputs e functions para set aprovado ou reprovado */



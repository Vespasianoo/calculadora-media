let resultado = document.querySelector("#resultado")
let exibirMediaNoSpan = document.querySelector("#mediafinal")

let liInputBox = document.querySelector(".list")

let btnFormSubmit = document.querySelector("#btnFormSubmit")
let btnFormAdd = document.querySelector("#btnFormAdd")
let btnFormRemove = document.querySelector("#btnFormRemove")

let calculo = 0


btnFormSubmit.addEventListener("click", (evento) =>{
    evento.preventDefault();
})

btnFormAdd.addEventListener("click", (evento) =>{
    evento.preventDefault();
})

btnFormRemove.addEventListener("click", (evento) =>{
    evento.preventDefault();
})


function Criando() {
    liInputBox.insertAdjacentHTML('beforeend', '<li><input type="number" placeholder="Digite o número"></li>')   
}

function Calcular() {
    let soma = 0;
    let anchors = document.querySelectorAll('input')
    var arrayOfAnchors = [];
    
    for (let i = 0; i < anchors.length; i++) {
      var item = anchors[i];
      arrayOfAnchors.push(Number(item.value));
    };

    console.log(arrayOfAnchors);

    for(let a = 0; a < arrayOfAnchors.length; a++) {
        soma += arrayOfAnchors[a];
    }
    console.log(soma);

    calculo = soma / arrayOfAnchors.length
    console.log(calculo)

    aprovado()
}

function Remover() {
    liInputBox.removeChild(liInputBox.firstElementChild);
}

function Limpar() {
    resultado.innerHTML = ""
    exibirMediaNoSpan.innerHTML = ""
}

function aprovado() {
    exibirMediaNoSpan.innerHTML = `Sua média é: ${calculo}`
}
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

    //console.log(arrayOfAnchors);

    for(let a = 0; a < arrayOfAnchors.length; a++) {
        soma += arrayOfAnchors[a];
    }
    //console.log(soma);
    let condicao = arrayOfAnchors.length < 2

    if (condicao){
        exibirMediaNoSpan.innerHTML = "Preencher no mínimo dois campos"
    } else  {
        calculo = soma / arrayOfAnchors.length
        Exibir()
    }

    //console.log(calculo)

    
}

function Remover() {
    liInputBox.removeChild(liInputBox.firstElementChild);
}

function Limpar() {
    exibirMediaNoSpan.innerHTML = ""
}

function Exibir() {
    exibirMediaNoSpan.innerHTML = `Sua média é: ${calculo}`
}
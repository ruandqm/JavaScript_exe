//* Função de cada operação

function somar() {
    let input1 = document.querySelector("#n1")
    let input2 = document.querySelector("#n2")
    let n1 = input1.value
    let n2 = input2.value

    let resultado = n1 + n2
    document.getElementById("result").innerHTML = "<h3>" + resultado + "</h3>"
}

function subtrair() {
    let input1 = document.querySelector("#n1")
    let input2 = document.querySelector("#n2")
    let n1 = input1.value
    let n2 = input2.value

    let resultado = n1 - n2
    document.getElementById("result").innerHTML = "<h3>" + resultado + "</h3>"
}

function multiplicar() {
    let input1 = document.querySelector("#n1")
    let input2 = document.querySelector("#n2")
    let n1 = input1.value
    let n2 = input2.value

    let resultado = n1 * n2
    document.getElementById("result").innerHTML = "<h3>" + resultado + "</h3>"
}

function dividir() {
    let input1 = document.querySelector("#n1")
    let input2 = document.querySelector("#n2")
    let n1 = input1.value
    let n2 = input2.value

    let resultado = n1 / n2
    document.getElementById("result").innerHTML = "<h3>" + resultado + "</h3>"
}

//* Trecho responsável pela exibição do Popup com o resultado

let pops = document.getElementsByClassName("pop")
let popup = document.querySelector(".popup-wrapper")
let popupClose = document.querySelector(".popup-close")

pops[0].addEventListener('click', () => {
    popup.style.display = 'block'
})

for (let pop of pops) {
    pop.addEventListener('click', () => {
        popup.style.display = 'block'
    })
}
popup.addEventListener('click', () => {
    popup.style.display = 'none'
})

popupClose.addEventListener('click', () => {
    document.getElementById("n1").value = ''
    document.getElementById("n2").value = ''
    popup.style.display = 'none'
})
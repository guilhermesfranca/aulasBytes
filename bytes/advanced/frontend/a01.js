    function incrementar() {
    let elemento = document.getElementById("contador") // pega o elemento
    let numero = parseInt(elemento.innerText)          // pega o texto e transforma em número
    elemento.innerText = numero + 1                    // devolve o valor atualizado no HTML
}


function resetar() {
    let elemento = document.getElementById("contador")
     elemento.innerText = 0
}



/*
ATUALMENTE TEMOS DUAS FORMAS DE ALTERAR UM CONTEUDO DO HTML, SE FIZEMOS POR MEIO DO OnClick() vamos ter um html com chamada de função no HTML enquanto o addEvent permite um
melhor escalamento da aplicação e deixa o código mais atualizado e recente

*/


let botao = document.querySelector("button.incrementar") // seleciona o botão
botao.addEventListener("click", 
    function() {
    let elemento = document.getElementById("contador")
    let numero = parseInt(elemento.innerText)
    elemento.innerText = numero + 1
})

let botao2 = document.querySelector("button.resetar") 
    botao2.addEventListener("click", function() {
        let elemento = document.getElementById("contador")
        elemento.innerText = 0
    })
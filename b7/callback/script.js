//Callback = I gonna call you back (promessa de retorno da ligação)


// Ou seja, qunado algo acontecer, eu faço isso.

function alertar() {
    console.log("Opa, tudo bem?")
}
let nome = 'Bonieky'
setTimeout(alertar, 2000)
let sobrenome = 'Lacerda'

console.log('Nome completo =' + nome +' ' + sobrenome)
//um resultado temporario para uma função, basicamente é uma promessa


function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log('pegando temperatura...');

        setTimeout(function() {
            resolve('40 na sombra');
        }, 2000);
    })
}
//como usar uma promisse 
//salva em uma variavel e usa o then

let temp = pegarTemperatura()
temp.then(function(resultado) {
    console.log(("TEMPERATURA:" + resultado));
    
})
.catch(function(error) {
    console.log('eita, deu ruim');
    
})
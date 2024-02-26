/*assincronismo é quando uma tarefa não é executada imediatamente e volta
para nós em algum momento. Igual a leitura de um arquivo do disco
o qual o sist operacional aciona todo o necessário, e devolve o arquivo lido*/

const promessaNumeroRandom = new Promise ((resolve, reject) => {
   setTimeout(()=> {
        const numero = parseInt(Math.random() * 100)//processamento envolvido
        resolve(numero)//caso dê certo: resolve
    }, 3000)
})


promessaNumeroRandom
    .then((value) => {
        console.log(value)
        return value + 10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("finalizou")
    })
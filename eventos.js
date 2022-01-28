console.log("Digite a data do evento: ")

let dataEvento = new Date("01/28/2022");
let dataHoje = new Date();

//console.log(dataHoje)

console.log("A data do evento é " + dataEvento)

if(dataEvento > dataHoje) {
    console.log("Data válida!")
} else {
    console.log("Data inválida! Informar uma data válida.")
}

console.log("Informar a data de nascimento: ")
let dataNascimento = "02/13/1985";
let dataAtual = new Date().getFullYear();
let dataInformada = dataNascimento.split('/')[2]

console.log(`Idade ${dataAtual - dataInformada}`)

if(dataAtual - dataInformada > 18) {
    console.log("Inscrição efetuada com sucesso!")
} else {
    console.log("Somente maiores de 18 anos podem participar do evento")
}

console.log("Gerar lista dos participantes inscritos")

let listaParticipantes = ["Douglas", "Fabiana", "Pablo", "Priscila"]

for(let contador = 0; contador < listaParticipantes.length; contador++){
    console.log(listaParticipantes[contador])
}

console.log(`A quantidade de participantes é: ${listaParticipantes.length}`)

console.log("Gerar lista dos palestrantes")

let listaPalestrantes = ["Alan", "Douglas", "Filippo", "Leiz", "Rodrigo"]

for(let contador = 0; contador < listaPalestrantes.length; contador++){
    console.log(listaPalestrantes[contador])
}

console.log("A quantidade de participantes é menor que 100?")

if(listaParticipantes.length < 100) {
    console.log("Sim! Evento permitido!")
} else {
    console.log("Não. Evento não permitido!")
}
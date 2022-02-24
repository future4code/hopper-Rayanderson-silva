// Exercícios de interpretação de código //

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])**/

// Exercícios de interpretação de código //

/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/


// Exercícios de interpretação de código //

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/


//  Exercícios de escrita de código   //


/*const pessoa = {
    nome: "RayCosta",
    apelidos: ["nicridori", "cueca de chumbo", "zero kall"]
}

const frase = `eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou ${pessoa.apelidos[2]}`
console.log(frase)

const novaPessoa = {
    ...pessoa,
    apelios: ["Rayzera", "RC", "Coca"]
}


console.log("nova pessoa", novaPessoa)*/



// Exercícios de escrita de código //



/*const pessoa1 = {
    nome: "RayCosta",
    idade: 27,
    profissao: "tecnico mobile"
}

const pessoa2 = {
    nome: "Alanna Lira",
    idade: 30,
    profissao: "Mae Do meu filho"
}

const nomePessoa1 = pessoa1.nome
console.log("nome Pessoa1", [nomePessoa1, pessoa1.nome.length -1, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length -1]) 

const nomePessoa2 = pessoa2.nome
console.log("nome pessao2", [nomePessoa2, pessoa2.nome.length -1, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length -1])**/


// Exercícios de escrita de código //


const carrinho = [ ]

const frutas = [
    {nome: "jaca", disponibilidade: true},
    {nome: "jambo", disponibilidade: true},
    {nome: "cajá", disponibilidade: true}
]


function adicionaFrutas(frutas){
    carrinho.push(frutas)
}

console.log(carrinho)







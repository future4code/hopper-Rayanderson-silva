 //Exercícios de interpretação de código//

 /*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)*/


//Exercícios de interpretação de código//

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}**/


//Exercícios de interpretação de código//

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/

//-------- Exercícios de escrita de código -----------//


let animaisDeEstimacao = Number(prompt("quantos animais de estimaçao você tem?"))
if (animaisDeEstimacao <= 0) {
    console.log( "que pena! Você pode dotar um pet!")
    
}
const animais = []
for (let i = 0; i < animaisDeEstimacao; i++) {
    const nomeAnimais = prompt("Digite o nome do pet.");
    animais.push(nomeAnimais)
    }
    
    console.log(animais);



    //-------- Exercícios de escrita de código -----------//

    







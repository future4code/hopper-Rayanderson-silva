// a = falso 
// b = falso
// c = true
// d = boolean

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)



/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)/** 


/*let suaIdade = prompt("digite sua idade")
let IdadeDoSeuAmigo = prompt("idade do seu amigo")

const somaIdades =  Number(suaIdade) >+  Number(IdadeDoSeuAmigo)
const diferencaEntreIdade = suaIdade % IdadeDoSeuAmigo


console.log(diferencaEntreIdade)
console.log(somaIdades) /** 



/* let InsiraNumeroPar = prompt("digiti numeors pares")
let divisor = 2 

const restoDaDivisao = Number(InsiraNumeroPar) % 2/** 




console.log(restoDaDivisao)

/*sempre que colocado um numero par no resto da divisao deu 0
 sempre que coloco numero impares no resto da divisao deu 1 /**
  * 
  */
  








 /**let numeroUm = prompt("digiti um numero")
 let numeroDois = prompt("digite outro numero")
 

 const NumeroUmMaior = Number(numeroUm) > Number(numeroDois)
 const numeroIgual = Number(numeroUm) === Number(numeroDois)
 const DivisivelUm = Number(numeroUm) / Number(numeroDois) 
 const divisivelDois = Number(numeroDois) / Number(numeroUm)


 console.log(NumeroUmMaior)
console.log(numeroIgual)  
console.log(DivisivelUm)
console.log( divisivelDois)/** */





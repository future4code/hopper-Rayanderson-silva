// -------- Exercícios de interpretação de código --------- //

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })**/


// -------- Exercícios de interpretação de código --------- //



/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)**/


  // -------- Exercícios de interpretação de código --------- //


  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)**/


  // ----- Exercícios de escrita de código ------//


  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomePet = pets.map((item, index, array) => {
    return item.nome
})

console.log(nomePet)


const petSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"

})

console.log(petSalsicha)




const descontoPoodle = pets.filter((pet) => {
    
    return pet.raca === "Poodle"
    


}).map((poodle) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`

})
console.log(descontoPoodle);










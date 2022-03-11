/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    

    
    
    if(confirm("quer iniciar uma nova rodada?")) {
      // o que fazer se o usuário clicar "ok"
      console.log("Bem-Vindo(a) ao jogo de Blackjack")
   } else {
      // o que fazer se o usuário clicar "cancelar"
      console.log("O jogo acabou")
   }
   

   if (confirm) {

      const carta1Usuario = comprarCarta()
      const carta2Usuario = comprarCarta()
      const cartaPc1 = comprarCarta()
      const cartaPc2 = comprarCarta()
  
      const pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
      console.log(`Usuario - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontuacaoUsuario}`)

      const pontuacaoPc = cartaPc1.valor + cartaPc2.valor
      console.log(`Computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - pontuação ${pontuacaoPc}`)
  
      if (pontuacaoUsuario === pontuacaoPc) {
         console.log("Empate!")
         
      } else if (pontuacaoUsuario > pontuacaoPc) {
         console.log("O usuario ganhou!")

      } else if (pontuacaoPc > pontuacaoUsuario) {
         console.log("O computador ganhou!")
      }
  
  } else {
      console.log("O jogo acabou!")
  }


  

  
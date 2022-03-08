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


    

    
    
    if(confirm("pergunta de sim ou não")) {
      // o que fazer se o usuário clicar "ok"
      console.log("Bem-Vindo(a) ao jogo de Blackjack")
   } else {
      // o que fazer se o usuário clicar "cancelar"
      console.log("O jogo acabou")
   }
   

   if (confirm) {

      const carta1Usuario = comprarCarta()
      const carta2Usuario = comprarCarta()
      const carta1Pc = comprarCarta()
      const carta2Pc = comprarCarta()
  
      const pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
      console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontuacaoUsuario}`)

      const pontuacaoPc = carta1Pc.valor + carta2Pc.valor
      console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - pontuação ${pontuacaoPc}`)
  
      if (pontuacaoUsuario === pontuacaoPc) {
         console.log("Empate!")
         
      } else if (pontuacaoUsuario > pontuacaoPc) {
         console.log("O usuário ganhou!")

      } else if (pontuacaoPc > pontuacaoUsuario) {
         console.log("O computador ganhou!")
      }
  
  } else {
      console.log("O jogo acabou!")
  }


  

  
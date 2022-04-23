import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

import styled from 'styled-components'



const EstiloPgCompleta = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const EstiloContainer = styled.div `
  width: 40vw;
  margin: 10px 0; 
  h2 { 
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
  margin-bottom: 20px;
  
  }
`






function App() {
  return (
    <EstiloPgCompleta>
      <EstiloContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/98134368?v=4"
          nome="Rayanderson Costa" 
          descricao="Oi, eu sou o Rayanderson. Sou aluno da Labenu. Estou em aprendizado de programação e pronto para novos desafios"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://e7.pngegg.com/pngimages/624/1016/png-clipart-email-box-computer-icons-symbol-mini-miscellaneous-angle.png" 
          nome="Email:" 
          descricao="raycostapr7@gmail.com" 
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/1479/1479518.png" 
          nome="Endereço:" 
          descricao="PB, Brasil" 
        />
      </EstiloContainer>

      <EstiloContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Em processo!" 
        />
        
        <CardGrande 
          imagem="http://webtelevisao.com.br/blog/wp-content/uploads/2012/03/samsung-logo-4.png" 
          nome="Autorizada Samsung" 
          descricao="Técnico Mobile." 
        />
      </EstiloContainer>

      <EstiloContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </EstiloContainer>
    </EstiloPgCompleta>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
     data: [
      {
        nomeUsuario: "Rayanderson",
        fotoUsuario: "https://avatars.githubusercontent.com/u/98134368?v=4",
        fotoPost: "https://scontent.fjpa3-1.fna.fbcdn.net/v/t1.18169-9/12592613_498826150304329_7446866892069673217_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=exz-F1WZ-wwAX9xCFNs&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT9rECRrI6BqRxKgloQCFj97TtYnxOvzyPf_E2NZtuZaDA&oe=628C4D1F"
      },
      {
        nomeUsuario: "Rayanderson",
        fotoUsuario: "https://avatars.githubusercontent.com/u/98134368?v=4",
        fotoPost: "https://scontent.fjpa3-1.fna.fbcdn.net/v/t1.18169-9/10325578_466844676835810_5551043759108903569_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_ohc=g5dfwkj0B9AAX8dk7LP&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT94Hu8ld_vMxczB9hGyND28DQWthiC8zmF8Hor7j2bF4A&oe=628C76BE"
      },
      {
        nomeUsuario: "Rayanderson",
        fotoUsuario: "https://avatars.githubusercontent.com/u/98134368?v=4",
        fotoPost: "https://scontent.fjpa3-1.fna.fbcdn.net/v/t31.18172-8/12473568_471401879713423_8183526644149296590_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=19026a&_nc_ohc=Hht9WvAbDW0AX8emfbC&_nc_ht=scontent.fjpa3-1.fna&oh=00_AT9kDVl0VUNLPLOK35drFFEcNKSsr9ihjoychPSpSTURKg&oe=628FEB2D"
      }
    ]
  }
  render() {
    
    return (
      <MainContainer>
        {this.state.data.map(post => (<Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}/>)) }
      </MainContainer>
    );
  }
}


export default App;

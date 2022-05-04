import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"


export default class App extends React.Component {
  state = {
    proximaEtapa: false
  }

  logar = () => {
    this.setState({proximaEtapa: true})
  }

  render(){
    let pagina;

    if(this.state.proximaEtapa){
      pagina = <Etapa2/>
    } else {
      pagina = <Etapa1 onClickProximaEtapa={this.proximaEtapa}/>;
    }
    
    return(
      <>
      {pagina}
      <button>Próxima etapa</button>
      
      
      </>

    )
  }
  };

 
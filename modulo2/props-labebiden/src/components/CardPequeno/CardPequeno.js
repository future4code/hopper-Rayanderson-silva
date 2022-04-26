import React from 'react';
import styled from 'styled-components'

const PequenoContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    div {
    display: flex;
    flex-direction: row;
    justify-items: flex-start; 
    }
    p {
     margin-left: 10px;
    }
`
const ContainerImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const SmallContainerH4 = styled.h4 `
    margin-bottom: 15px;
`

function CardPequeno(props) {
    return (
        <PequenoContainer className="small-container">
            <ContainerImg src={ props.imagem } alt=""/>
            <div>
                <SmallContainerH4>{ props.nome }</SmallContainerH4>
                <p>{ props.descricao }</p>
            </div>
        </PequenoContainer>
    )
}

export default CardPequeno;
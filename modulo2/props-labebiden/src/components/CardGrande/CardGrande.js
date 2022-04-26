import React from 'react';
import styled from 'styled-components'

const BigContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    }
`
const CardContainer = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const ContaierH4 = styled.h4 `
    margin-bottom: 15px;
`


function CardGrande(props) {
    return (
        <BigContainer>
            <CardContainer src={ props.imagem } alt=""/>
            <div>
                <ContaierH4>{ props.nome }</ContaierH4>
                <p>{ props.descricao }</p>
            </div>
        </BigContainer>
    )
}

export default CardGrande;
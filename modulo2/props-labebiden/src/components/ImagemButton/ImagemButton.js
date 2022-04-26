import React from 'react';
import styled from 'styled-components'

const Imgbutton = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

`
const ButtonContainer = styled.img `
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <Imgbutton>
            <ButtonContainer src={ props.imagem } alt=""/>
            <p>{ props.texto }</p>
        </Imgbutton>

    )
}

export default ImagemButton;
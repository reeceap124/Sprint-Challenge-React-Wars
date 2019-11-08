import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
flex: 0 1 24%
min-width: 250px;
margin: 1% 3% 5% 3%;
border-radius: 5px;
background: rgba(70,130,180,0.5);
color: whitesmoke;
`

const Name = styled.h2``
const Films = styled.p``
const Height = styled.p``
const Mass = styled.p``


export default function CharacterCard(props){
    return(
    <CardContainer>
        <Name>{props.name}</Name>
        <Films>Number of films: {props.films.length}</Films>
        <Height>Height: {props.height}</Height>
        <Mass>Mass: {props.mass}</Mass>
    </CardContainer>
    
    )
}
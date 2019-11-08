import React, {useState, useEffect} from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-around;
width: 95%;
margin: auto;
flex-wrap: wrap;
`

export default function CharacterGrid(){
    const [characters, setCharacters]= useState([])

    useEffect(()=>{
        axios
            .get('https://swapi.co/api/people')
            .then((res)=>{
                console.log(res.data.results);
                setCharacters(res.data.results);
            })
            .catch((error)=>{
                console.log('there was an erry', error);
            })
        
    },[])
    
    
    return(
        <Container>
            {characters.map((character, index)=>{
                return (
                    <CharacterCard
                    key = {index}
                    name = {character.name}
                    films ={character.films}
                    height ={character.height}
                    mass ={character.mass}
                    />
                    
                )
                
            })}
        </Container>
    )

}
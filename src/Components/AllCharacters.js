import React, { useContext, useEffect } from 'react';
import CharacterContext from '../CharacterContext.js';
import GroupOrCharCard from './GroupOrCharCard.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ApiHelper from '../apiHelper.js';

export default function() {


  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;


    fetch('http://localhost:5000/characters/get', {signal: signal})
    .then(res => res.json())
    .then(data => {
      console.log(data.body)
      characterContext.setAllCharacters(data.body)
    })
    .catch(err => console.log(err))


    return function cleanup() {
      abortController.abort()
    }
  },[])
  return(
    characterContext.allCharacters!==undefined?
    <Container>
      <Row>
      {characterContext.allCharacters.map((x, index )=>
        <GroupOrCharCard type="/CharacterPage/" setTo={() => characterContext.setCurrentCharacter(x)} key={index} groupOrChar={x}/>
      )
    }
      </Row>
    </Container>:
    <p>UhOh....</p>
  )
}

import React, { useContext, useEffect } from 'react';
import CharacterContext from '../CharacterContext.js';
import GroupOrCharCard from './GroupOrCharCard.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ApiHelper from '../apiHelper.js';

export default function() {


  const characterContext = useContext(CharacterContext)
  
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

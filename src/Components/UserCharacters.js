import React, {useContext} from 'react';
import GroupOrCharCard from './GroupOrCharCard.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import UserContext from '../UserContext.js';
import CharacterContext from '../CharacterContext.js';

export default function UserCharacters() {

  const characterContext = useContext(CharacterContext);
  const userContext = useContext(UserContext);

  return(
    <div>
      <Container>
        <Row>
        {characterContext.allCharacters.filter(character => character.user===userContext.user._id).map((x, index )=>
          <GroupOrCharCard type="/CharacterPage/" setTo={() => characterContext.setCurrentCharacter(x)} key={index} groupOrChar={x}/>
        )
      }
        </Row>
      </Container>
    </div>
  )
}

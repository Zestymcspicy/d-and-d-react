import React, { useContext } from 'react';
import CharacterContext from '../CharacterContext.js';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function() {
  const characterContext = useContext(CharacterContext)
  const character = characterContext.currentCharacter;
  const slide = (x, index) => {
    return(
    <Carousel.Item key={index}>
      <img
      style={{maxHeight:"450px", width:"auto"}}
      src={x.img}
      alt={x.captionBody}
      className="d-block w-100 mx-auto"/>
      <Carousel.Caption>
        <h3>{x.headline}</h3>
        <p>{x.captionBody}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )}
  let imageSource = ""
  if(character!=={}){
    imageSource = character.icon.includes('http')?character.icon:`/${character.icon}`;
  }
  const styles = {
    icon : {
      maxHeight: "250px",
      width: "auto",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
  return character?
    (
      <Jumbotron>
      {character.carousel?
        <Carousel>
          {character.carousel.map((x,index) => slide(x, index))}
        </Carousel>
          :
          <p>No Carousel Yet</p>
        }
        <Container>
          <Image
          style={styles.icon}
          alt="character image"
          src={imageSource}/>
          <p>{character.name}</p>
        </Container>
      </Jumbotron>
    ):
    (
    <div>
      <p>You somehow have not selected a character...</p>
    </div>
  )
}

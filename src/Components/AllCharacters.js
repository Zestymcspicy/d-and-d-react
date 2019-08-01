import React, { useContext, useEffect } from 'react';
import CharacterContext from '../CharacterContext.js';
import ApiHelper from '../apiHelper.js';

export default function() {
  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;


    fetch('http://localhost:5000/characters/get', {signal: signal})
    .then(res => res.json())
    .then(data => characterContext.setAllCharacters(data.body))
    .catch(err => console.log(err))


    return function cleanup() {
      abortController.abort()
    }
  }, [characterContext])
  return(
    characterContext.allCharacters!==undefined?
    <div>{characterContext.allCharacters.map( x => <p>{x.name}</p>)}</div>:
    <p>UhOh....</p>
  )
}

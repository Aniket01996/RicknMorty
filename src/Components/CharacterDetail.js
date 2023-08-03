import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CharacterDetail = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.log("Error found here", error));
  }, [characterId]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
    <div className='card'>
      <h1>Character Details...</h1>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
    </div>
  );
};

export default CharacterDetail;

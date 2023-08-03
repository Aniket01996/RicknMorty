import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Api = () => {
    const [characters, setCharacters] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    // const [filtersApplied, setFiltersApplied] = useState(false);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
                // setFiltersApplied(false);
            })
            .catch((error) => console.log("Error found here:", error));
    }, []);

    const filteredCharacters = characters.filter((character) => {
        const nameMatch = character.name.toLowerCase().includes(nameFilter.toLowerCase());
        const statusMatch = statusFilter === '' || character.status === statusFilter;
        const genderMatch = genderFilter === '' || character.gender === genderFilter;
        return nameMatch && statusMatch && genderMatch;
    });

    // const handleFilterChange = () => {
    //     if ((nameFilter || statusFilter || genderFilter)) { 
    //      setFiltersApplied(true);
    //     } else {
    //       setFiltersApplied(false);
    //     }
    //   };

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <div>
                <label>
                    Name:
                    <input type="text" value={nameFilter} placeholder='  Type name here...' onChange={(e) => {setNameFilter(e.target.value)}} />
                </label>
            </div>
            <div>
                <label>
                    Status:
                    <select value={statusFilter} onChange={(e) => {setStatusFilter(e.target.value)}}>
                        <option value="">All</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Gender:
                    <select value={genderFilter} onChange={(e) => {setGenderFilter(e.target.value)}}>
                        <option value="">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </label>
            </div>
            {filteredCharacters.length === 0 ? (
                <h1>No results found :(</h1>
            ) : (
                <ul className="character-list">
                    {filteredCharacters.map((character) => (
                        <li key={character.id}>
                            <div className="container">
                                <div className="cards">
                                    <Link to={`/characters/${character.id}`} style={{ textDecoration: 'none' }}>
                                        <img className='images' src={character.image} alt={character.name} />
                                        <h3>{character.name}</h3>
                                        <p>Status: {character.status}</p>
                                        <p>Species: {character.species}</p>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                    {/* {!filtersApplied && filteredCharacters.length >= 1 && ( */}
                        <div className="side-images">
                        <img id='rick' width="300" height="300" src="https://img.icons8.com/plasticine/400/rick-sanchez.png" alt="rick-sanchez" />
                        <img id='morty' width="300" height="300" src="https://img.icons8.com/plasticine/400/morty-smith.png" alt="morty-smith" />
                        <img id='ufo' width="100" height="100" src="https://img.icons8.com/doodle/100/sci-fi.png" alt="sci-fi" />
                        <img id='a1' width="100" height="100" src="https://img.icons8.com/external-color-for-better-life-royyan-wijaya/100/external-alien-group-space-lineal-color-color-for-better-life-royyan-wijaya.png" alt="external-alien-group-space-lineal-color-color-for-better-life-royyan-wijaya" />
                        <img id='a2' width="100" height="100" src="https://img.icons8.com/external-linear-basic-color-abderraouf-omara/100/external-Aliens-space-and-astronomy-linear-basic-color-abderraouf-omara.png" alt="external-Aliens-space-and-astronomy-linear-basic-color-abderraouf-omara" />
                        <img id='a3' width="300" height="300" src="https://img.icons8.com/stickers/400/grey.png" alt="grey" />
                        <img id='beth' width="300" height="300" src="https://img.icons8.com/plasticine/400/beth-smith.png" alt="beth-smith" />
                        <img id='summer' width="300" height="300" src="https://img.icons8.com/plasticine/400/summer-smith.png" alt="summer-smith" />
                        <img id='a4' width="256" height="256" src="https://img.icons8.com/cotton/256/martian.png" alt="martian" />
                        <img id='jerry' width="300" height="300" src="https://img.icons8.com/plasticine/400/jerry-smith.png" alt="jerry-smith" />
                    </div>
                        {/* )}  */}
                </ul>
            )}
        </div>
    );
};

export default Api;

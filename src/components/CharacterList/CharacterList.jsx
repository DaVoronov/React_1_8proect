import CharacterListItem from "../CharacterListItem/CharacterListItem";

function CharacterList({ characters }) {
  return (
    <div>
      <ul>
        {characters.map((character) => (
          <CharacterListItem
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            character={character}
          />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;

import CharacterListItem from "../CharacterListItem/CharacterListItem";
import "/src/index.css";

function CharacterList({ characters }) {
  return (
    <div>
      <ul className="CharacterList">
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

import styles from "./CharacterList.module.css";
import CharacterListItem from "../CharacterListItem/CharacterListItem";

function CharacterList({ characters }) {
  return (
    <div>
      <ul className={styles.CharacterList}>
        {characters.map((character) => (
          <CharacterListItem
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            character={character}
          />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;

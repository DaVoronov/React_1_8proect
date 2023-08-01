import { useState } from "react";

import styles from "./CharacterList.module.css";
import CharacterListItem from "../CharacterListItem/CharacterListItem";

import Modal from "../Modal/Modal";

function CharacterList({ characters, onClick }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (character) => {
    setSelectedCharacter(character);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div onClick={onClick}>
      <ul className={styles.CharacterList}>
        {characters.map((character) => (
          <CharacterListItem
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            location={character.location.name}
            episode={character.episode}
            onClick={() => openModal(character)}
            character={character}
          />
        ))}
      </ul>
      {showModal && (
        <Modal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
}

export default CharacterList;

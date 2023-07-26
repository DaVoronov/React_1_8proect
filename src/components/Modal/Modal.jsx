import styles from "./Modal.module.css";

const Modal = ({ character, onClose }) => {
  return (
    <div className={styles.Overlay}>
      <div></div>
      <div className={styles.CharacterDescription}>
        <button className={styles.BtnClose} onClick={onClose}>
          X
        </button>

        <div className={styles.CharacterDescriptionCenter}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

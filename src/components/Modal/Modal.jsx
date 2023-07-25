import styles from "./Modal.module.css";

const Modal = ({ character, onClose }) => {
  function overlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }

    onClose();
  }

  return (
    <div className={styles.Overlay} onClick={overlayClick}>
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

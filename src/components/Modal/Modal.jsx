import styles from "./Modal.module.css";

const Modal = ({ character, onClose }) => {
  const getTextColor = (status) => {
    switch (status) {
      case "Dead":
        return "red";
      case "Alive":
        return "green";
      default:
        return "grey";
    }
  };

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.CharacterDescription}>
        <div className={styles.CharacterDescriptionCenter}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <h3
            className="Status"
            style={{
              textAlign: "center",
              borderRadius: "6px",
              background: getTextColor(character.status),
              width: "300px",
              height: "30px",
            }}
          >
            {character.status}
          </h3>
          <p>Gender: {character.gender}</p>
          <p>Location: {character.location.name}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Species: {character.species}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

{
  /* <Typography gutterBottom variant="h6" component="h4">
Species: {character.species}
</Typography>
<Typography gutterBottom variant="h6" component="h4">
Gender: {character.gender}
</Typography>
<Typography gutterBottom variant="h6" component="h4">
Origin: {character.origin.name}
</Typography>
<Typography gutterBottom variant="h6" component="h4">
Status: {character.status}
</Typography> */
}

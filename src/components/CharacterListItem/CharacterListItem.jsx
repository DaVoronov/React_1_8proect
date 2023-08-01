import styles from "./CharacterListItem.module.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CharacterListItem({ character, onClick }) {
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
    <Card onClick={onClick} className={styles.Grow}>
      <CardMedia
        component="img"
        width={1}
        src={character.image}
        alt={character.name}
      />
      <h3
        className="Status"
        style={{
          position: "relative",
          bottom: "270px",
          left: "150px",
          textAlign: "center",
          borderRadius: "6px",
          background: getTextColor(character.status),
          width: "100px",
          height: "30px",
          marginBottom: "-50px",
        }}
      >
        {character.status}
      </h3>
      <CardContent>
        <div>
          <Typography gutterBottom variant="h5" component="h3">
            {character.name}
          </Typography>
        </div>
        <div className={styles.textColumn}>
          <p>Last location</p>
          <Typography gutterBottom variant="h6" component="h3">
            {character.location.name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default CharacterListItem;

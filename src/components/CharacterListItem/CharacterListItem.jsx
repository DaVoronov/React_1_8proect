import styles from "./CharacterListItem.module.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CharacterListItem({ character }) {
  return (
    <Card className={styles.Grow}>
      <CardMedia
        component="img"
        width={1}
        src={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {character.name}
        </Typography>
        <div className={styles.textColumn}>
          <Typography gutterBottom variant="h6" component="h4">
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
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default CharacterListItem;

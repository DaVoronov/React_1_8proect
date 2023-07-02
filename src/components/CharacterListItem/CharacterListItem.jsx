import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CharacterListItem({ character }) {
  return (
    <Card>
      <CardMedia
        component="img"
        src={`rickandmortyapi.com/api/character/avatar/${character.url}`}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {character.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h4">
          {character.status}/{character.species}/{character.gender}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterListItem;

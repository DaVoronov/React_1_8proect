import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import Loader from "./components/Loader/Loader";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((error) => {
        console.log("Error occurred while retrieving data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <Container sx={{ py: "12px" }}>
        <Typography variant="h3" my={5}>
          Rick & Morty characters
        </Typography>

        <CharacterList characters={characters} />
      </Container>
    </div>
  );
}

export default App;

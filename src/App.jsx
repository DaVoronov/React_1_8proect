import { Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import "/src/index.css";
import Loader from "./components/Loader/Loader";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [page]);

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="Flex">
      {loading && <Loader />}

      <div className="BtnCenter">
        <Button
          onClick={handlePrevPage}
          variant="contained"
          className="btn"
          disabled={page === 1}
        >
          Previous
        </Button>
        <Typography className="pageCount">{page}</Typography>
        <Button
          onClick={handleNextPage}
          variant="contained"
          className="btn"
          disabled={page === 42}
        >
          Next
        </Button>
      </div>

      <Container sx={{ py: "24px" }}>
        <Typography variant="h3" my={5} textAlign={"center"}>
          Rick & Morty characters
        </Typography>

        <CharacterList characters={characters} />
      </Container>
    </div>
  );
}

export default App;

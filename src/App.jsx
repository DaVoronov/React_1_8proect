import { Container, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import "/src/index.css";
import Loader from "./components/Loader/Loader";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        setCharacters(res.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [page]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
      );
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCharacters();
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="Flex">
      {loading && <Loader />}

      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter character name"
          />
          <button type="submit">Search</button>
        </form>
      </div>

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

import { Container, Typography, Button } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

import "/src/index.css";
import Loader from "./components/Loader/Loader";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  const ref = useRef(null);
  const refs = useRef(null);

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [characterNotFound, setCharacterNotFound] = useState(false);

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

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?name=${e.target.value}`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        setCharacters(data.results);
        setCharacterNotFound(false);
      } else {
        setCharacters([]);
        setCharacterNotFound(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePrevPage = () => {
    setPage(page - 1);

    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    setPage(page + 1);

    window.scrollTo(0, 0);
  };

  const handleClickDown = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickUp = () => {
    refs.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Flex">
      {loading && <Loader />}

      <Container ref={refs} sx={{ py: "24px" }}>
        <header className="Header">
          <div className="Sticky">
            <img className="ImgIcon" src="/public/Rick&Morty_Icon.png" alt="" />

            <input
              className="Searcher"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search characters: "
            />
          </div>
        </header>

        <Typography variant="h3" my={5} textAlign={"center"}>
          Rick & Morty characters
        </Typography>

        {characterNotFound && <p>Character not found!</p>}

        <CharacterList characters={characters} />
      </Container>

      <div className="BtnUpDown">
        <button className="BtnDown" onClick={handleClickDown}>
          ▼
        </button>

        <button className="BtnUp" onClick={handleClickUp}>
          ▲
        </button>
      </div>

      <div ref={ref} className="BtnCenter">
        <Button
          onClick={handlePrevPage}
          variant="contained"
          disabled={page === 1}
        >
          Previous
        </Button>
        <Typography className="pageCount">{page}</Typography>
        <Button
          onClick={handleNextPage}
          variant="contained"
          disabled={page === 42}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default App;

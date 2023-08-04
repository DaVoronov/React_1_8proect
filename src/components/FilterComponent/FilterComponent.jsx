import { useState, useEffect } from "react";

const FilterComponent = ({ data }) => {
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    // Apply filters whenever statusFilter, genderFilter, or speciesFilter changes
    const filteredCharacters = data.filter((character) => {
      const statusMatch = !statusFilter || character.status === statusFilter;
      const genderMatch = !genderFilter || character.gender === genderFilter;
      const speciesMatch =
        !speciesFilter || character.species === speciesFilter;
      return statusMatch && genderMatch && speciesMatch;
    });

    setFilteredData(filteredCharacters);
  }, [statusFilter, genderFilter, speciesFilter, data]);

  return (
    <div>
      {/* Status filter */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      {/* Gender filter */}
      <select
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      {/* Species filter */}
      <select
        value={speciesFilter}
        onChange={(e) => setSpeciesFilter(e.target.value)}
      >
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Robot">Robot</option>
        <option value="unknown">Unknown</option>
      </select>

      {/* Display filtered characters */}
    </div>
  );
};

export default FilterComponent;

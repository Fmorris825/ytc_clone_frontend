import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import { Container } from "react-bootstrap";
import API_KEYS from "../../../API_KEYS";

const SearchPage = ({ setVideoId, setActiveVideo }) => {
  const [query, setQuery] = useState("Best React Tutorials");
  const [searchResults, setSearchResults] = useState(false);

  useEffect(() => {
    getQuery();
  }, [query]);

  async function getQuery() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}}&part=snippet&key=${API_KEYS.apiKey}`
    );
    setSearchResults(response.data);
  }

  return searchResults ? (
    <Container>
      <SearchBar query={query} setQuery={setQuery} />
      <h2 className="m-3">Search Results:</h2>
      <div>
        {searchResults.items.map((result, index) => {
          return (
            <SearchResult
              setVideoId={setVideoId}
              result={result}
              key={index}
              setActiveVideo={setActiveVideo}
            />
          );
        })}
      </div>
    </Container>
  ) : (
    <Container>
      <SearchBar query={query} setQuery={setQuery} />
    </Container>
  );
};

export default SearchPage;

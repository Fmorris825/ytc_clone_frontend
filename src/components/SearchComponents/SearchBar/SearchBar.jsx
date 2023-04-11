import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SearchBar = ({ setQuery }) => {
  const [tempQuery, setTempQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(tempQuery);
    setTempQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="What kind of videos are you searching for?"
        size="50"
        value={tempQuery}
        onChange={(event) => setTempQuery(event.target.value)}
      />
      <Button className="button">Okay go</Button>
    </form>
  );
};

export default SearchBar;

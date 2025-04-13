import React, { useState } from "react";

function StreamList() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", input);
    setInput(""); // Clear input after submission
  };

  return (
    <div>
      <h2>Welcome to StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a show or movie"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StreamList;

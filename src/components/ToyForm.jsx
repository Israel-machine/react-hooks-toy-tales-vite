import React, { useState } from "react";

function ToyForm({ toys, setToys }) {
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");

  function addToy(e) {
    e.preventDefault();
    fetch("http://localhost:3000/toys", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: toyName,
        image: toyImage,
        likes: 0,
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(newProduct => {
        setToys([...toys, newProduct])
        setToyName("");
        setToyImage("");
      })
      .catch((e) => {
        console.error(e);
        alert('Failed to add item. Please check your server.');
      });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={addToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          /* 2. Connected value and onChange */
          value={toyName}
          onChange={(e) => setToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImage}
          onChange={(e) => setToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
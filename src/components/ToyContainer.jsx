import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  const donateToy = (toyId) => {
    fetch(`http://localhost:3000/toys/${toyId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(donatedToy => {
        const updatedToys = toys.filter(toy => toy.id !== donatedToy.id);
        setToys(updatedToys)
      })
      .catch((e) => console.log(e))
  }
  return (
    <div id="toy-collection">
      {toys.map((toy) =>
        <ToyCard key={toy.id} name={toy.name} image={toy.image} likes={toy.likes} toyId={toy.id} donateToy={donateToy} />
      )}
    </div>
  );
}

export default ToyContainer;

import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([])
  const fetchToys = () => {
    fetch('http://localhost:3000/toys')
      .then(response => response.json())
      .then(toys => setToys(toys))
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    fetchToys()
  }, [])

  return (
    <div id="toy-collection">
      {toys.map((toy) => <ToyCard key={toy.id} name={toy.name} image={toy.image} likes={toy.likes} />)}
    </div>
  );
}

export default ToyContainer;

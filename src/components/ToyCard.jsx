import React from "react";

function ToyCard({ name, image, likes, toyId, donateToy }) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={() => donateToy(toyId)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

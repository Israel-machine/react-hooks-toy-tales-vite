import React, { useState } from "react";

function ToyCard({ name, image, likes, toyId, donateToy, likeToy }) {
  const [likesOnScreen, setLikesOnScreen] = useState(likes)

  const onLike = (toyId) => {
    const numOfLikes = likesOnScreen + 1
    setLikesOnScreen(numOfLikes)
    likeToy(toyId, numOfLikes)
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likesOnScreen} Likes </p>
      <button className="like-btn" onClick={() => onLike(toyId)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => donateToy(toyId)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

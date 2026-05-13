import React from "react";

function ToyCard({toy, onDeleteToy}) {
  function handleDonation(){
    const deleteToy = () => {
      fetch(`http://localhost:3001/toys/${toy.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(toy)
      }).then(() => onDeleteToy(toy.id))
    }
    deleteToy();
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonation}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

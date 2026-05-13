import React from "react";
import {useState } from 'react'

function ToyForm({onAddToy}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [likes,setlikes] = useState(0)

  function handleForm(e){
    e.preventDefault();

    const newToy = {
      name,
      image,
      likes,
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(res => {
        if(res.ok){
          return res.json();
        }
      })
      .then(toy => {
        onAddToy(toy);
        setName("");
        setImage("");
        setlikes(0);
      }
      )
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleForm}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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

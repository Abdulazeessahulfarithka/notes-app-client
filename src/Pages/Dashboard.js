import React, { useEffect, useState } from "react";
import Card from "../Pages/Card";
import axios from "axios";
import API from "../Global.js";
import backgroundImage from "../assets/back.jpeg";

function Dashboard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Sample data for the new note
    const newNoteData = {
      title: "Sample Title",
      description: "Sample Description",
      tag: "Sample Tag",
    };

    axios
      .post(`${API}/api/message/notes`, newNoteData)
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image
          backgroundSize: "cover", // Cover the entire container
          backgroundRepeat: "no-repeat", // Do not repeat the image
          minHeight: "100vh", // Set minimum height to fill the viewport
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container my-3">
          <h2>Add a Note</h2>

          <form className="my-3">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="Title"
                minLength={3}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="Description"
                minLength={5}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Tag
              </label>
              <input type="text" className="form-control" id="tag" name="Tag" />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Note
            </button>
          </form>
          <div className="mt-5">
            {notes.map((note, index) => (
              <Card key={index} note={note} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

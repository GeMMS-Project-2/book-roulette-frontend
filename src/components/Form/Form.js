import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

function Form() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    genre: "",
    author: "",
    img: "",
    filmAdaptation: true,
    description: "",
  });

  const handleChange = (event) => {
    setBook({ ...book, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(book);
    axios
      .post("https://book-roulette.herokuapp.com/books", book)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/");
        } else {
          alert(
            "Oops your request was not able to submit. Please verify you have all of the required fields and try again."
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="master-container">
      <div className="form-container">
        <div className="card-title">
          <p className="addBook">Add A Book</p>
          <p className="library">To Library</p>
        </div>
        <form onSubmit={handleSubmit} className="addForm">
          <div className="addDetails-container">
            <div className="author-container">
              <div className="author-label">
                <label htmlFor="author">Author </label>
              </div>
              <div className="author-input">
                <input
                  onChange={handleChange}
                  type="text"
                  id="author"
                  value={book.author}
                  placeholder="First Last"
                  required
                />
              </div>
            </div>
            <div className="title-container">
              <div className="title-label">
                <label htmlFor="title">Title </label>
              </div>
              <div className="title-input">
                <input
                  onChange={handleChange}
                  id="title"
                  value={book.title}
                  placeholder="The Title"
                  required
                />
              </div>
            </div>
            <div className="genre-container">
              <div className="genre-label">
                <label htmlFor="genre">Genre </label>
              </div>
              <div className="genre-input">
                <input
                  onChange={handleChange}
                  list="genres"
                  id="genre"
                  value={book.genre}
                  placeholder="Genre"
                  required
                />
                <datalist id="genres">
                  <option value="Fantasy"></option>
                  <option value="Mystery"></option>
                  <option value="Thriller"></option>
                  <option value="Education"></option>
                  <option value="Romance"></option>
                </datalist>
              </div>
            </div>
            <div className="notRequired-container">
              <div className="notRequired-label">
                <p>Detail</p>
              </div>
              <div className="notRequired-input">
                <p>Optional</p>
              </div>
            </div>
            <div className="img-container">
              <div className="img-label">
                <label htmlFor="img">Book Cover URL </label>
              </div>
              <div className="img-input">
                <input
                  onChange={handleChange}
                  id="img"
                  value={book.img}
                  placeholder="http://exampleurl.com"
                />
              </div>
            </div>
            <div className="film-container">
              <div className="film-label">
                <label htmlFor="filmAdaptation">Adapted To Film </label>
              </div>
              <div className="film-input">
                <input
                  onChange={() => {
                    setBook({
                      ...book,
                      filmAdaptation: !book.filmAdaptation,
                    });
                  }}
                  checked={book.filmAdaptation}
                  type="checkbox"
                  id="filmAdaptation"
                  value={book.filmAdaptation}
                  placeholder="Adapted To Film"
                  required
                />
              </div>
            </div>
            <div className="synopsis-container">
              <div className="synopsis-label">
                <label htmlFor="description">Synopsis </label>
              </div>
              <div className="synopsis-input">
                <input
                  onChange={handleChange}
                  id="description"
                  value={book.description}
                  placeholder="Once upon a time..."
                />
              </div>
            </div>
          </div>
          <div className="addBookButton-container">
            <button type="submit" className="addBookButton">
              Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

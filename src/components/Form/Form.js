import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

function Form() {
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: '',
        genre: '',
        author: '',
        img: '',
        filmAdaptation: true,
        description: '',
    });

    const handleChange = (event) => {
        setBook({ ...book, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("https://book-roulette.herokuapp.com/", book)
        .then (res => {
            if (res.status === 201) {
                navigate('/');
            } else {
                alert(
                    'Oops your request was not able to submit. Please verify you have all of the required fields and try again.'
                );
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    onChange={handleChange}
                    id='title'
                    value={book.title}
                    placeholder='Title'
                    required
                />
                <label htmlFor='genre'>Genre: </label>
                <input
                    onChange={handleChange}
                    list="genres"
                    id='genre'
                    value={book.genre}
                    placeholder='Genre'
                    required
                />
                    <datalist id="genres">
                        <option value="Fantasy"></option>
                        <option value="Mystery"></option>
                        <option value="Thriller"></option>
                        <option value="Education"></option>
                        <option value="Romance"></option>
                    </datalist>
                <label htmlFor='author'>Author: </label>
                <input
                    onChange={handleChange}
                    id='author'
                    value={book.author}
                    placeholder='Author'
                    required
                />
                <label htmlFor='img'>Book Cover URL: </label>
                <input
                    onChange={handleChange}
                    id='img'
                    value={book.img}
                    placeholder='Book Cover'
                />
                <label htmlFor='filmAdaptation'>Adapted To Film: </label>
                <input
                    onChange={() => {
                        setBook({
                            ...book,
                            filmAdaptation: !book.filmAdaptation,
                        });
                    }}
                    checked={book.filmAdaptation}
                    type="checkbox"
                    id='filmAdaptation'
                    value={book.filmAdaptation}
                    placeholder='Adapted To Film'
                    required
                />
                <label htmlFor='description'>Synopsis: </label>
                <input
                    onChange={handleChange}
                    id='description'
                    value={book.description}
                    placeholder='Synopsis'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;
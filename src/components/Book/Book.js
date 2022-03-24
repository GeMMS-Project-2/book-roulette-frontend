import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";


function Book() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch(`https://book-roulette.herokuapp.com/books/${id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data);
            })
            .catch(err => console.log(err));
    }, [id]);

    if (!book) {
        return <h1>Loading...</h1>;
    }

    const editBookPage = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }

    const handleChange = (event => {
        setBook({ ...book, [event.target.id]: event.target.value });
    });

    const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const res = await axios.put(`https://book-roulette.herokuapp.com/books/${id}`, book);
			if (res.status === 200) {
				setModal(false);
			}
		} catch (err) {
			console.log(err)
		}
		navigate('/');
	};

	const handleDelete = async () => {
		const confirm = window.confirm("Are you sure you want to delete?");
		if (confirm) {
			try {
				const res = await axios.delete(`https://book-roulette.herokuapp.com/books/${id}`);
				if (res.status === 200) {
					navigate('/');
				}
			} catch (err) {
				console.log(err);
			}
		};
	};

    return (
        <section>
            {modal ? (
                <div>
                    <h2>Edit Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="edit-title">Title</label>
                            <input onChange={handleChange} id="edit-title" value={book.title} />
                        </div>
                        <div>
                            <label htmlFor="edit-author">Author</label>
                            <input onChange={handleChange} id="edit-author" value={book.author} />
                        </div>
                        <div>
                            <label htmlFor="edit-img">Book Cover URL</label>
                            <input onChange={handleChange} id="edit-img" value={book.img} />
                        </div>
                        <div>
                            <label htmlFor="edit-genre">Genre</label>
                            <input onChange={handleChange} id="edit-genre" value={book.genre} />
                        </div>
                        <div>
                            <label htmlFor="edit-description">Synopsis</label>
                            <input onChange={handleChange} id="edit-description" value={book.description} />
                        </div>
                        <div>
                            <label htmlFor="edit-filmAdaptation">Adapted To Film?</label>
                            <input 
                                type="checkbox"
                                onChange={() => {
                                    setBook({
                                        ...book,
                                        filmAdaptation: !book.filmAdaptation,
                                    });
                                }} 
                                id="edit-filmAdaptation" 
                                value={book.filmAdaptation} 
                                checked={book.filmAdaptation}
                            />
                        </div>
                        <button type="submit">Submit Changes</button>
                        <button type="button" onClick={closeModal}>Close</button>
                    </form>
                </div>
            ) : (
                <>
                    <h2>{book.title}</h2>
                    <h3>By: {book.author}</h3>
                    <img src={book.img} alt={book.title} />
                    <div>
                        <button onClick={editBookPage}>
                            Edit
                        </button>
                        <button onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                    <div>
                        <button>
                            More Details:
                        </button>
                        <p>
                            Genre: {book.genre}
                        </p>
                        <p>
                            {book.description}
                        </p>
                        <p>
                            Adapted to Film: {book.filmAdaptatioin ? "Yes" : "No"}
                        </p>
                    </div>
                </>
            )}
        </section >
    );
}

export default Book;
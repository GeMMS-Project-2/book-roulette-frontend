import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import "./Book.css";

function Book() {
    const { id, genre } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [modal, setModal] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [active, setActive] = useState("")

    useEffect(() => {
        fetch(`https://book-roulette.herokuapp.com/books/genre/${genre}/random`)
            .then(res => res.json())
            .then(data => {
                setBook(data);
            })
            .catch(err => console.log(err));
    }, []);

    if (!book) {
        return <h1>Loading...</h1>;
    }

    const moreDetails = () => {
        setShowMore(!showMore);
        setHidden(!hidden);
        if (hidden) {
            setActive("moveUpAndDown")
        } else {
            setActive("")
        }
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
			const res = await axios.put(`https://book-roulette.herokuapp.com/books/${book._id}`, book);
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
				const res = await axios.delete(`https://book-roulette.herokuapp.com/books/${book._id}`);
				if (res.status === 200) {
					navigate('/');
				}
			} catch (err) {
				console.log(err);
			}
		};
	};

    return (
        <section className="bookDetails-container">
            {modal ? (
                <div className="modal-container">
                    <div className="edit-title">
                        <h2>Edit Book</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="edit-container">
                            <div className="edit-label">
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="edit-input">
                                <input onChange={handleChange} id="title" value={book.title} />
                            </div>
                        </div>
                        <div className="edit-container">
                            <div className="edit-label">
                                <label htmlFor="author">Author</label>
                            </div>
                            <div className="edit-input">
                                <input onChange={handleChange} id="author" value={book.author} />
                            </div>
                        </div>
                        <div className="edit-container">
                            <div className="edit-label">
                                <label htmlFor="img">Book Cover URL</label>
                            </div>
                            <div className="edit-input">
                                <input onChange={handleChange} id="img" value={book.img} />
                            </div>
                        </div>
                        <div className="edit-container">
                            <div className="edit-label">
                                <label htmlFor="genre">Genre</label>
                            </div>
                            <div className="edit-input">
                                <input onChange={handleChange} id="genre" value={book.genre} />
                            </div>
                        </div>
                        <div className="edit-container">
                            <div className="edit-label">
                                <label htmlFor="description">Synopsis</label>
                            </div>
                            <div className="edit-input">
                                <input onChange={handleChange} id="description" value={book.description} />
                            </div>
                        </div>
                        <div className="edit-container">
                            <div className="edit-label">
                                <label htmlFor="filmAdaptation">Adapted To Film?</label>
                            </div>
                            <div className="edit-input">
                                <input 
                                type="checkbox"
                                onChange={() => {
                                    setBook({
                                        ...book,
                                        filmAdaptation: !book.filmAdaptation,
                                    });
                                }} 
                                id="filmAdaptation" 
                                value={book.filmAdaptation} 
                                checked={book.filmAdaptation}
                            />
                            </div>
                        </div>
                        <div className="editButtons">
                            <button type="submit">Submit Changes</button>
                            <button type="button" onClick={closeModal}>Close</button>
                        </div>
                    </form>
                </div>
            ) : (
                <>
                    <div className="book-img">
                        <img src={book.img} alt={book.title} />
                    </div>
                    <div className={`details-container ${active}`}>
                        <div className="details-child">
                            <div className="top-details">
                                <h2>{book.title}</h2>
                                <h3>By: {book.author}</h3>
                                <p>Genre: {book.genre}</p>
                            </div>
                            <div className="bottom-details">
                                <div className="buttons-bar">
                                    <div className="moreButton-container">
                                        <button type="button" onClick={moreDetails}>
                                            More Details
                                        </button>
                                    </div>
                                    <div className="editButton-container">
                                        <button onClick={editBookPage}>
                                            Edit
                                        </button>
                                        <button onClick={handleDelete}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                {showMore ? (
                                    <div className="moreDetails">
                                        <p>
                                            {book.description}
                                        </p>
                                        <p className="filmDetail">
                                            <span>Adapted to Film: </span>
                                            {book.filmAdaptation ? "Yes" : "No"}
                                        </p>
                                    </div>
                                ) : (null) }
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section >
    );
}

export default Book;


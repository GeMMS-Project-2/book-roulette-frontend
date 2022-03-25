import React, { useEffect, useState } from "react";

function BookList() {
  const [booksArray, setBooksArray] = useState([]);

  useEffect(() => {
    fetch("https://book-roulette.herokuapp.com/books")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooksArray(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!booksArray.length) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      {booksArray.map((book) => {
        return (
          <div>
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default BookList;

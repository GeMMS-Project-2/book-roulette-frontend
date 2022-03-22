import './App.css';
import { Routes, Route } from 'react-router-dom';
import Book from "./components/Book/Book";
import BookList from "./components/BookList/BookList";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:genre" element={<BookList />} />
        <Route path="/add-book" element={<Form />} />
        <Route path="/:genre/:id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
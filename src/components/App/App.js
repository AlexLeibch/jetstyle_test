import React from "react";
import "./App.css";
import Bookform from "../Bookform/Bookform";
import Booklist from "../Booklist/Booklist";
import { getBase64 } from "../../Utils/toBase64";

function App() {
  const [books, setBooks] = React.useState([
    { author: "", title: "", id: "", pic: "" },
  ]);
  const [editBook, setEditBook] = React.useState(null);
  const [editAuthorBook, setEditAuthorBook] = React.useState("");
  const [editTitleBook, setEditTitleBook] = React.useState("");
  const [cover, setCover] = React.useState("");

  React.useEffect(() => {
    const bookStorage = localStorage.getItem("bookStorage");
    const loadBook = JSON.parse(bookStorage);
    console.log(loadBook);
    if (loadBook) {
      setBooks(loadBook);
    }
  }, []);

  React.useEffect(() => {
    const bookStorage = JSON.stringify(books);
    localStorage.setItem("bookStorage", bookStorage);
  }, [books]);

  const handleEditAuthorBook = (e) => {
    setEditAuthorBook(e.target.value);
  };

  const handleEditTitleBook = (e) => {
    setEditTitleBook(e.target.value);
  };

  const createBook = (newBook) => {
    setBooks([...books, newBook]);
    console.log(books);
  };

  const removeBook = (book) => {
    setBooks(books.filter((b) => b.id !== book.id));
  };

  const addCover = (e) => {
    const file = e.target.files[0];
    getBase64(file)
      .then((result) => {
        setCover(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeBook = (existBook) => {
    const updateBook = [...books].map((book) => {
      if (book.id === existBook.id) {
        console.log(book.author, "-author");
        console.log(book.title, "-title");
        book.author = editAuthorBook;
        book.title = editTitleBook;
        console.log(editAuthorBook, "editAuthorBook");
        console.log(editTitleBook, "editTitleBook");
      }
      console.log(book, "-book:");
      return book;
    });
    // eslint-disable-next-line no-unused-expressions
    setBooks(updateBook);
    console.log(updateBook);
    setEditBook(null);
  };

  function switchBookInfo(bookId) {
    console.log("hello", bookId);
    setEditBook(bookId);
    const book = books.find((book) => {
      return book.id === bookId;
    });
    console.log(book);
    setEditAuthorBook(book.author);
    setEditTitleBook(book.title);
  }

  return (
    <div className="page">
      <Bookform
        createBook={createBook}
        addCover={addCover}
        cover={cover}
        setCover={setCover}
      />
      {books.length !== 0 ? (
        <Booklist
          handleEditAuthorBook={handleEditAuthorBook}
          handleEditTitleBook={handleEditTitleBook}
          remove={removeBook}
          editBook={editBook}
          setEditBook={switchBookInfo}
          changeBook={changeBook}
          books={books}
          cover={cover}
        />
      ) : (
        <h1 className="booklist__title">Книги отсутствуют</h1>
      )}
    </div>
  );
}

export default App;

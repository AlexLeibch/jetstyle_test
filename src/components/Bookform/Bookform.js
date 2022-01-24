import React from "react";
import "./Bookform.css";

function Bookform({ createBook, addCover, cover, setCover }) {
  const [books, setBooks] = React.useState({ author: "", title: "" });

  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      ...books,
      id: Date.now(),
      pic: cover,
    };
    createBook(newBook);
    console.log(newBook);
    setBooks({ author: "", title: "" });
    setCover("");
  };

  const handleAuthorChange = (e) => {
    setBooks({ ...books, author: e.target.value });
  };

  const handleTitleChange = (e) => {
    setBooks({ ...books, title: e.target.value });
  };

  return (
    <form className="form" noValidate>
      <label className="form__label" htmlFor="book-author">
        Автор книги
      </label>
      <input
        className="form__input form__input_author"
        onChange={handleAuthorChange}
        name="book-author"
        type="text"
        value={books.author}
        required
        placeholder="Автор"
        minLength="2"
      ></input>
      <label className="form__label" htmlFor="book-title">
        Название книги
      </label>
      <input
        className="form__input form__input_title"
        name="book-title"
        onChange={handleTitleChange}
        type="text"
        value={books.title}
        required
        placeholder="Название"
        minLength="2"
      ></input>
      <div className="form__wrap">
        <button
          type="submit"
          onClick={addNewBook}
          disabled={books.author.length < 2 || books.title.length < 2}
          className="form__button"
        >
          Добавить
        </button>
        <input
          type="file"
          name="files"
          id="files"
          className="form__button-file"
          onChange={(i) => addCover(i)}
        ></input>
        <label className="form__label form__label_files" htmlFor="files">
          Загрузить обложку
        </label>
      </div>
    </form>
  );
}

export default Bookform;

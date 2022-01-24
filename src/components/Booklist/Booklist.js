import React from "react";
import Bookitem from "../Bookitem/Bookitem";
import "./Booklist.css";
function Booklist({
  books,
  remove,
  setEditBook,
  setEditTextBook,
  editBook,
  changeBook,
  handleEditTitleBook,
  handleEditAuthorBook,
  cover,
}) {
  return (
    <>
      <h1 className="booklist__title">Каталог книг</h1>
      <section className="booklist__section">
        {books.map((book) => (
          <Bookitem
            changeBook={changeBook}
            editBook={editBook}
            remove={remove}
            setEditTextBook={setEditTextBook}
            author={book.author}
            setEditBook={setEditBook}
            title={book.title}
            key={book.id}
            book={book}
            handleEditAuthorBook={handleEditAuthorBook}
            handleEditTitleBook={handleEditTitleBook}
            cover={cover}
          />
        ))}
      </section>
    </>
  );
}

export default Booklist;

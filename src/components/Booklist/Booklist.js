import React from "react";
import Bookitem from "../Bookitem/Bookitem";
function Booklist({
  books,
  remove,
  setEditBook,
  setEditTextBook,
  editBook,
  updateBook,
  handleEditTitleBook,
  handleEditAuthorBook
}) {
  return (
    <section className="booklist">
      <h1>Каталог книг</h1>
      {books.map((book) => (
        <Bookitem
          updateBook={updateBook}
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
        />
      ))}
    </section>
  );
}

export default Booklist;

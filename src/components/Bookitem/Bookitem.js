import React from "react";
import "./Bookitem.css";
import editIcon from '../../vendor/image/editIcon.png'
import deleteIcon from '../../vendor/image/deleteIcon.png'
import saveIcon from '../../vendor/image/saveIcon.png'
function Bookitem({
  author,
  title,
  remove,
  book,
  setEditBook,
  editBook,
  changeBook,
  handleEditAuthorBook,
  handleEditTitleBook,
}) {
  return (
    <div className="book-item">
      <img
        className="book-item__title-image"
        src={book.pic}
        alt="Обложка"
      ></img>
      <div className="book-item__text">
        <div className="book-item__wrap">
          {editBook === book.id ? (
            <>
              <input
                type="text"
                onChange={handleEditAuthorBook}
                defaultValue={author}
                className="book-item__input"
              ></input>
              <input
                type="text"
                onChange={handleEditTitleBook}
                defaultValue={title}
                className="book-item__input"
              ></input>
            </>
          ) : (
            <>
              <p className="book-item__author">{author}</p>
              <p className="book-item__title">{title}</p>
            </>
          )}
        </div>

        <div className="book-item__edit">
          <button
            onClick={() => remove(book)}
            className="book-item__edit-delete"
          >
            <img
              src={deleteIcon}
              alt="delete"
              className="book-item__edit-pic"
            ></img>
          </button>
          {editBook !== book.id ? (
            <button
              onClick={() => setEditBook(book.id)}
              className="book-item__edit-change"
            >
              <img
                src={editIcon}
                alt="edit"
                className="book-item__edit-pic"
              ></img>
            </button>
          ) : (
            <button
              onClick={() => changeBook(book)}
              className="book-item__edit-change"
            >
              <img
                src={saveIcon}
                alt="save"
                className="book-item__edit-pic"
              ></img>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookitem;

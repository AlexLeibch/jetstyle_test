import React from "react";
import "./Bookitem.css";
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
              src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1642618717~hmac=01817bef53cabc582e5b1ff551cb2247"
              alt="delete pic"
              className="book-item__edit-pic"
            ></img>
          </button>
          {editBook !== book.id ? (
            <button
              onClick={() => setEditBook(book.id)}
              className="book-item__edit-change"
            >
              <img
                src="https://cdn-icons.flaticon.com/png/128/644/premium/644279.png?token=exp=1642620526~hmac=cf7470358db66ccb27e96a27dc2da92a"
                alt="edit pic"
                className="book-item__edit-pic"
              ></img>
            </button>
          ) : (
            <button
              onClick={() => changeBook(book)}
              className="book-item__edit-change"
            >
              <img
                src="https://cdn-icons.flaticon.com/png/128/2874/premium/2874050.png?token=exp=1642671029~hmac=ffb6d043e9f0cc022465870a63d3a4ec"
                alt="edit pic"
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

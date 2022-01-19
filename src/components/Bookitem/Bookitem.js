import React from 'react'
import './Bookitem.css'
function Bookitem({author, title, remove, book}) {

    return (
        <div className='book-item'>
            <div className='book-item__text'>
                <p className='book-item__author'>{author}</p>
                <p className='book-item__title'>{title}</p>
            </div>
            <div className="book-item__edit">
                <button onClick={() => remove(book)} className='book-item__edit-delete'><img src='https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1642618717~hmac=01817bef53cabc582e5b1ff551cb2247' alt="delete pic" className="book-item__edit-pic"></img></button>
                <button className='book-item__edit-change'><img src="https://cdn-icons.flaticon.com/png/128/644/premium/644279.png?token=exp=1642620526~hmac=cf7470358db66ccb27e96a27dc2da92a" alt="eit pic" className="book-item__edit-pic"></img></button>
            </div>
        </div>
    )
}

export default Bookitem

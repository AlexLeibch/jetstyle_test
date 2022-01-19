import React from 'react'
import Booklist from '../Booklist/Booklist'
import './Bookform.css'

function Bookform({createBook}) {
    const [books, setBooks] = React.useState({author: '', title: ''})
    const [edit, setEdit] = React.useState(null)
    
    const addNewBook = (e) => {
        e.preventDefault()
        const newBook = {
            ...books,
            id: Date.now(),
        }
        createBook(newBook)
        console.log(newBook)
        setBooks({author: '', title: ''})
    }



    const handleAuthorChange = (e) => {
        setBooks({...books, author: e.target.value,})
    }

    const handleTitleChange = (e) => {
        setBooks({...books, title: e.target.value})
    }

    return (
        <form className="form">
            <label className="form__label" htmlFor="book-author">Автор книги</label>
            <input  className="form__input" onChange={handleAuthorChange} name="book-author" type="text" value={books.author} required  placeholder='Автор'></input>
            <label className="form__label" htmlFor='book-title'>Название книги</label>
            <input className="form__input" name="book-title" onChange={handleTitleChange} type="text" value={books.title} required placeholder='Название'></input>
            <button type="submit" onClick={addNewBook} className="form__button">Добавить</button>
        </form>
    )
}

export default Bookform

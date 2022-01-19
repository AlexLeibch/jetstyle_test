import React from 'react'
import Bookitem from '../Bookitem/Bookitem'
function Booklist({books, remove, isElem}) {
    return (
        <section className='booklist'>
            <h1>Каталог книг</h1>
            {books.map((book) => (
                <Bookitem  remove={remove} author={book.author} title={book.title} key={book.id} book={book}/>
            ))}
        </section>
    )
}

export default Booklist

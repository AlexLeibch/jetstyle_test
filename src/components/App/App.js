import React from 'react'
import './App.css'
import Bookform from '../Bookform/Bookform';
import Booklist from '../Booklist/Booklist';

function App() {
    const [books, setBooks] = React.useState([{author: 'Братья Гримм', title: 'Бременские музыканты', id: 1231232}])
    const createBook = (newBook) => {
      setBooks([...books, newBook])
      console.log(books)
    }

    const removeBook = (book) => {
      setBooks(books.filter(b => b.id !== book.id ))

    }


  return (
    <div className="page">
      <Bookform createBook={createBook}/>
      {books.length !== 0
      ? 
      <Booklist remove={removeBook} books={books}/>
      : 
      <h1>Книги отсутствуют</h1>
      }
    </div>
  );
}

export default App;

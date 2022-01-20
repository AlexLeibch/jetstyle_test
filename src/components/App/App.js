import React from 'react'
import './App.css'
import Bookform from '../Bookform/Bookform';
import Booklist from '../Booklist/Booklist';

function App() {
    const [books, setBooks] = React.useState([{author: 'Братья Гримм', title: 'Бременские музыканты', id: 1231232}])
    const [editBook, setEditBook] = React.useState(null)
    const [editAuthorBook, setEditAuthorBook] = React.useState('')
    const [editTitleBook, setEditTitleBook] = React.useState('')

    React.useEffect(() =>  {
      const bookStorage = localStorage.getItem('bookStorage')
      const loadBook = JSON.parse(bookStorage)
      if(loadBook) {
        setBooks(loadBook)
      }
    }, [])

    React.useEffect(() => {
      const bookStorage = JSON.stringify(books)
      localStorage.setItem('bookStorage', bookStorage)
    }, [books])

    const  handleEditAuthorBook = (e) => {
        setBooks(e.target.value)
    }

    const handleEditTitleBook = (e) => {
      setBooks(e.target.value)
  }
    
    
    const createBook = (newBook) => {
      setBooks([...books, newBook])
      console.log(books)
    }

    const removeBook = (book) => {
      setBooks(books.filter(b => b.id !== book.id ))

    }



    const eidtBook = (id) => {
      const updateBook = [...books].map((book) => {
        if (book.id === id) {
          book.author = editAuthorBook;
          book.title = editTitleBook;
        }
        console.log(book)
        return book;
      })
      // eslint-disable-next-line no-unused-expressions
      setBooks(updateBook)
      setEditBook(null)
    }


  return (
    <div className="page">
      <Bookform createBook={createBook}/>
      {books.length !== 0
      ? 
      <Booklist
      handleEditAuthorBook={handleEditAuthorBook}
      handleEditTitleBook={handleEditTitleBook}
      remove={removeBook} 
      editBook={editBook}
      setEditBook={setEditBook}
      updateBook={eidtBook} 
      books={books}/>
      : 
      <h1>Книги отсутствуют</h1>
      }
    </div>
  );
}

export default App;

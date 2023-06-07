import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {

  //STATE VARIABLES: books array and book to edit
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  //FUNCTIONS
  function onBookCreated(book){
    //no book to edit, so set that to null
    setBookToEdit(null);
    //add the book onto the already existing books array
    setBooks([...books, book]);
  }

  function onBookEdit(book){
    //the book we're editing is the book passed
    setBookToEdit(book);
    //delete this book from the list
    setBooks(books.filter((b) => b.isbn !== book.isbn));
  }

  function onBookDelete(book){
    //filter the books array and exclude any with matching isbn
    setBooks(books.filter((b) => b.isbn !== book.isbn));
  }

  //RETURN 
  return (
    <div className='text-center'>
      <div className='card m-5 p-4'>
        <BookForm
          onBookCreated = {onBookCreated}
          bookToEdit = {bookToEdit}
        ></BookForm>
        <BookTable
          books = {books}
          onBookEdit = {onBookEdit}
          onBookDelete = {onBookDelete}
        ></BookTable>
      </div>
    </div>
  )
}

export default App;
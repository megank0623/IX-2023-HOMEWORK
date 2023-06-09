import './App.css';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Book } from './models/book';
import BookForm from './components/book/BookForm';
import BookTable from './components/BookTable';

import TaskService from './services/task-service';

function App() {

  //STATE VARIABLES: books array and book to edit
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  //FUNCTIONS
  useEffect(
    () => {
      if (!books.length) {
        onInitialLoad();
        //console.log(`after onInitialLoad, books:`);
        //console.log(books);
      }
    },

    // In the case of an empty array, the function only fires the first time the
    // component initializes

    // If we put a variable reference and that variable changes
    // this function fires again
    []);

  async function onInitialLoad() {
    //  try catch here if there is error
    // show that error to the user
    try {
      const books = await TaskService.fetchTasks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }


  async function onBookCreated(book){
    // create the book
    const newBook = await TaskService.createTask(new Book(null, book.title, book.author, book.isbn));
    console.log(`made new book in onBokCret with id ${newBook.id}`);
    //no book to edit, so set that to null
    setBookToEdit(null);
    //add the book onto the already existing books array
    
    console.log('books before');
    console.log(books);

    //put both but why isnt it working
    setBooks([...books, newBook]);

    console.log('BOOK ADDED, new arary: ');
    console.log(books);
  }

  async function onBookEdit(book){
    //the book we're editing is the book passed
    setBookToEdit(book);

    //delete this book from the list
    await TaskService.deleteTask(book.id);
    setBooks(books.filter((b) => b.id !== book.id));
  }

  async function onBookDelete(book){
    //delete it from the database
    await TaskService.deleteTask(book.id);

    //filter the books array and exclude any with matching isbn
    setBooks(books.filter((b) => b.id !== book.id));
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
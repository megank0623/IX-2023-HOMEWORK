import React from 'react'

import { useState, useEffect } from 'react';


// If you export default then you don't need the brackets
import { Book } from '../../models/book';
import BookForm from './BookForm';
import BookTable from './BookTable';

import TaskService from '../../services/task-service';
import Alert from '../common/Alert';
import Spinner from '../common/Spinner';

export default function BookPage(props) {
      //STATE VARIABLES: books array and book to edit
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  //this monitors whether or not the spinner is active
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const books = await TaskService.fetchTasks();
      setBooks(books.filter((book) => book.userId === props.user.uid));
    } catch (err) {
      <Alert show = "true" variant = 'danger'>
        {err}
      </Alert>
    }
    setLoading(false);
  }


  async function onBookCreated(book){
    // create the book
                                                          //null before
    const newBook = await TaskService.createTask(new Book(null, book.title, book.author, book.isbn, props.user.uid));
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
      {loading ? (
        <Spinner variant = 'warning'></Spinner>
      ) : (
        <div className='card m-5 p-4'>
          <BookForm
            onBookCreated = {onBookCreated}
            bookToEdit = {bookToEdit}
          ></BookForm>
          <BookTable
            loading = {loading}
            books = {books}
            onBookEdit = {onBookEdit}
            onBookDelete = {onBookDelete}
          ></BookTable>
        </div>
      )}
    </div>
  )
}

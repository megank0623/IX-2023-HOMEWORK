
import React, {useState, useEffect} from 'react'
import {Book} from '../../models/book';

export default function BookForm(props) {

  //STATE VARIABLES: title, author, isbn from form
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  //FUNCTIONS

  //not 100% a function, but checks if it should refill the form fields when editing a book
  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  //this clears the input fields
  function clearInputs() {
    setTitle("");
    setIsbn("");
    setAuthor("");
  }

  //when the form is submitted, make a new book if valid input
  function onBookFormSubmit(e){
    e.preventDefault();

    //make sure all the fields were filled out 
    if (title === "" || author === "" || isbn === ""){
      console.log('this was not valid input, one or more fields blank');
      return;
    }

    let book = new Book(null, title, author, isbn);
    //now pass the book to the app file and clear the inputs
    props.onBookCreated(book);
    clearInputs();
  }

  //RETURN
  return (
    <div>
      <h1>Library</h1>

      <form id="form" onSubmit = {onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input 
            id="title-input" 
            type="text" 
            className="form-control" 
            value = {title}
            //if there are any changes in the title input, change the var too
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Author </label>
          <input 
            id="author-input" 
            type="text" 
            className="form-control" 
            value = {author}
            //when author input area changes, update author label
            onChange = {(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> ISBN </label>
          <input 
            id="isbn-input" 
            type="text" 
            className="form-control" 
            value = {isbn}
            //if isbn input changes, update the variable
            onChange = {(e) => setIsbn(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  )
}

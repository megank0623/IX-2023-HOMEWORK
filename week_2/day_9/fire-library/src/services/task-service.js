import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  } from 'firebase/firestore';
  
  import { db } from '../firebase/firebase';
  import { Book } from '../models/book';        //STUB: might be Book instead of book
  
  class TaskService {
    constructor() {
      this.collection = 'books';
    }
  
    async fetchTasks() {
      const collectionRef = collection(db, this.collection);
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
  
      const books = [];
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        //console.log("data obtained by fetch:");
        //console.log(data);
        const book = new Book(doc.id, data.Title, data.Author, data.ISBN);    //STUB: the null might not be right here
        
        //console.log('book added: ');
        //console.log(book);

        books.push(book);
        //console.log(book);
        //console.log("books:");
        //console.log(books);
      });
      
      //console.log('after init fetch, books: ');
      //console.log(books);
      return books;
    }
  
    async createTask(book) {
      const collectionRef = collection(db, this.collection);
      //console.log(`about to create task. cllection: ${this.collection}, database: ${db}`);
      //console.log(`trying to make a doc with title: ${book.title}, author: ${book.author}, isbn: ${book.isbn}`)
      const docRef = await addDoc(collectionRef, {
        Title: book.title, 
        Author: book.author, 
        ISBN: book.isbn,

      });
  
      book.id = docRef.id;        //STUB: was docRef.id
      console.log(`set the new book id to ${book.id} in createTask`);
      return book;
    }
  
    async updateTask(book) {        //STUB: book.id should = book.isbn
      const docRef = doc(db, this.collection, book.id);
  
      await updateDoc(docRef, {
        Title: book.title, 
        Author: book.author, 
        ISBN: book.isbn,
      });
  
      return book;
    }
  
    //STUB: where is bookID defined?
    async deleteTask(bookId) {
      const docRef = doc(db, this.collection, bookId);
  
      await deleteDoc(docRef);
    }
  }
  
  const service = new TaskService();
  export default service;
  
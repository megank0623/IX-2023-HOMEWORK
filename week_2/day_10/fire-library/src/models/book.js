
//need to set the class to export so that the other files can use it
export class Book {
    constructor(id, title, author, isbn, userId){
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.userId = userId;
    }
}
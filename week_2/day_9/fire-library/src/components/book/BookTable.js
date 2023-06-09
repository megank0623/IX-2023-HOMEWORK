
import React from 'react'

export default function BookTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <button
                    className = "btn btn-outline-warning me-1"
                    onClick = {() => props.onBookEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    className = "btn btn-outline-danger ms-1"
                    onClick = {() => props.onBookDelete(book)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

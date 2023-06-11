
import React from 'react'
import Spinner from '../common/Spinner';

export default function BookTable(props) {

  return (
    <div>
      {!props.loading ? (
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
      ) : (
        <div className = 'd-flex justify-content-center'>
          <Spinner variant = 'success'></Spinner>
        </div>
      )}
    </div>
  );
}

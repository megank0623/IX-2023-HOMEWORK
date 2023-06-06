
import React from 'react'

export default function BookTable() {
  return (
    <div>
        <table class="table mt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
    </div>
  )
}

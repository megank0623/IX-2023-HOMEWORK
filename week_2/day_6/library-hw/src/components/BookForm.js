
import React from 'react'

export default function BookForm() {
  return (
    <div>
        <h1>Library</h1>

        <form id="form">
          <div class="mb-3">
            <label class="form-label"> Title </label>
            <input id="title-input" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label"> Author </label>
            <input id="author-input" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label"> #ISBN </label>
            <input id="isbn-input" type="text" class="form-control" />
          </div>

          <div class="d-grid mt-4">
            <button class="btn btn-outline-primary" type="submit">
              Add Book
            </button>
          </div>
        </form>
    </div>
  )
}

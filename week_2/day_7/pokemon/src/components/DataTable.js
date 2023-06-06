import React from 'react'

export default function InputArea(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Base Experience</th>
            <th>Weight</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.posts.map((post) => {
            return (
              <tr key={post.name}>
                <td>{post.name}</td>
                <td>{post.baseExp}</td>
                <td>{post.weight}</td>
                <td>{post.height}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

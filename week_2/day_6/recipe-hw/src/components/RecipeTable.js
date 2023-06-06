
import React from 'react'

export default function RecipeTable(props) {
  return (
    <div className="text-center">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Recipe name</th>
              <th>Time to cook</th>
              <th>Ingredients</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {props.recipeList.map((recipe) => {
              return (
                <tr key={recipe.title}>
                  <td>{recipe.title}</td>
                  <td>{recipe.time}</td>
                  <td>{recipe.ingredients}</td>
                  <td>
                    <button 
                      className="btn btn-outline-warning"
                      onClick={() => props.onRecipeEdit(recipe)}
                    >Edit</button>
                    <button 
                      className="btn btn-outline-danger ms-1"
                      onClick={() => props.onRecipeDelete(recipe)}
                    >Delete</button>
                  </td>
                </tr>
              );
              
            })}
          </tbody>
        </table>
    </div>
  )
}

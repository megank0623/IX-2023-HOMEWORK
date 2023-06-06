
import React, {useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import RecipeForm from './components/RecipeForm';
import RecipeTable from './components/RecipeTable';

export default function App() {

  const [recipeList, setRecipeList] = useState([]);
  const [recipeToEdit, setRecipeToEdit] = useState(null);


  //
  //when a new recipe is made, this adds it to the recipe list 
  function recipeCreated(recipe){
    setRecipeToEdit(null);          //not editing a recipe rn
    setRecipeList([...recipeList, recipe]);    
    console.log(`Recipe lists: ${recipeList}`);
  }

  //
  //when a delete button is pressed, it should filter the list and reprint the table with all values not sharing the same name
  function onRecipeDelete(recipe){
    console.log(`deleting ${recipe.title}`);
    setRecipeList(recipeList.filter((x) => x.title !== recipe.title));
  }

  //
  //when an edit button is pressed, it should delete the recipe from the table, then put it's values back into the input area
  function onRecipeEdit(recipe){
    console.log(`editing ${recipe.title}`);
    setRecipeToEdit(recipe);
    onRecipeDelete(recipe);

  }

  return (
    <body id='back'>
        <div className='card text-center m-4'>
          <RecipeForm
            recipeCreated = {recipeCreated} 
            recipeToEdit = {recipeToEdit}>
          </RecipeForm>
          <RecipeTable
            recipeList={recipeList}
            onRecipeDelete={onRecipeDelete}
            onRecipeEdit={onRecipeEdit}
          >
          </RecipeTable>
        </div>
    </body>
    
  )
}

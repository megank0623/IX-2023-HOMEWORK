
import React, {useState, useEffect} from 'react'
import { Recipe } from '../modules/recipe';


export default function RecipeForm(props) {

  //defining useState variables (?) that will be used depending on the values of each book
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [ingredients, setIngredients] = useState('');

  //
  // React hook that runs a function anytime a given variable/object changes
  useEffect(() => {
    if (props.recipeToEdit) {
      setTitle(props.recipeToEdit.title);
      setTime(props.recipeToEdit.time);
      setIngredients(props.recipeToEdit.ingredients);
    }
  }, [props.recipeToEdit]);

  //
  //set off when the button submit is clicked: makes a new recipe and passes it to the app file
  function onRecipeFormSubmit(e){
    e.preventDefault();             //no refreshing
    console.log("form submitted");

    //if any fields left blank, return
    if (title === "" || time === "" || ingredients === ""){
      console.log("One of the fields was blank");
      return;
    }

    const recipe = new Recipe(title, time, ingredients);
    props.recipeCreated(recipe);
    clearTable();
  }

  //
  //this resets the input fields in the form area
  function clearTable(){
    setTitle("");
    setTime("");
    setIngredients("");
    console.log("Inputs cleared");
  }

  return (
    <div className='p-3'>
        <h1 className='m-4'>Recipe Book</h1>

        <form id="form" onSubmit={onRecipeFormSubmit}>
          <div className="mb-3">
            <label className="form-label"> Recipe Title </label>
            <input 
              id="title-input" 
              type="text" 
              className="form-control" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label"> Time to Cook </label>
            <input 
              id="time-input" 
              type="text" 
              className="form-control" 
              value={time}
              onChange={(e) => setTime(e.target.value)} 
            />
          </div>

          <div className="mb-3">
            <label className="form-label"> Ingredients </label>
            <input 
              id="ingredients-input" 
              type="text" 
              className="form-control" 
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}    //any time this changes, setIngredients to update
            />
          </div>

          <div className="d-grid mt-4">
            <button className="btn btn-outline-primary" type="submit">
              Add Recipe
            </button>
          </div>
        </form>
    </div>
  )
}

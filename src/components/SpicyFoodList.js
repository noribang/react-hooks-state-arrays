// Import useState Hook.
import React, { useState } from "react";
// Import array of objects, function.
import { spicyFoods, getNewSpicyFood } from "../data";



function SpicyFoodList() {
  /* foods = spicyFoods array of objects */
  const [foods, setFoods] = useState(spicyFoods);
  /* State of option value attribute. */
  const [filterBy, setFilterBy] = useState("All");

  // New array. Return elements that return true.
  const foodsToDisplay = foods.filter((food) => {
    /* Test state of option value attribute */
    if (filterBy === "All") {
      // Return object
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  }); 

  // Update state. Get new array/ object dynamically.
  // Event Handler callback.
  function handleAddFood() {
    // Object.
    const newFood = getNewSpicyFood();
    console.log(newFood);
    // New array. Unpacks (current state) and copies foods objects.
    // Then adds random newFood object.
    const newFoodArray = [...foods, newFood];
    // Sets new state to setState.
    // Passes new array to setState.
    setFoods(newFoodArray);
    console.log(foods)
  }
  /* Event handler.
     Update state array without li food clicked on. */
  function handleClick(id) {
    // Create new array with objects whose food.id is not id passed in.
    // const newFoodArray = foods.filter((food) => food.id !== id);

    // New array
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        } 
      } else {
        return food;
      }
    });
    // Pass new array to setState.
    setFoods(newFoodArray);
  }

  /* Event handler. */
  function handleFilterChange(event) {
    console.log(event.target.value);
    // Setter for state filterBy.
    setFilterBy(event.target.value);
  }

  /* Returns new array. */

  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={() => handleClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  // JSX
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      {/* Array of li elements. */}
      <ul>{foodList}</ul>

      <select name="filter" onChange={handleFilterChange} >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;

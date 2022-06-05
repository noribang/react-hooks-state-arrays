const spicyFoods = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
];

let nextId = 3;

const newSpicyFoods = [
  { name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  { name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  { name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
];

// Return one random spicy food object from the array newSpicyFoods.
function randomSpicyFood() {
  // Random index number up to but including newSpicyFoods.length. 
  const index = Math.floor(Math.random() * newSpicyFoods.length);
  // Unpack newSpicyFoods object from random index.
  const newSpicyFood = { ...newSpicyFoods[index] };
  newSpicyFood.id = nextId;
  nextId++;
  return newSpicyFood;
}

function getNewSpicyFood() {
  return randomSpicyFood();
}

export { spicyFoods, getNewSpicyFood };

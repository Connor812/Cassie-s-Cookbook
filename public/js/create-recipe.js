const addIngredient = (event) => {
    event.preventDefault();
    console.log('button worked')

const newIngredient = document.createElement('input');
const placeHolder = 'Enter Ingredient';
newIngredient.classList.add('input');
newIngredient.setAttribute('type', 'text');
newIngredient.setAttribute('place')

console.log(newIngredient)
const ingredientContainer = document.getElementById('#ingredients');
ingredientContainer.append(newIngredient);


}










document
.querySelector('#add-ingredient')
.addEventListener('click', addIngredient)
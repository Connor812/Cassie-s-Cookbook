const ingredientContainer = document.getElementById('ingredients');
console.log(ingredientContainer)

const addIngredient = (event) => {
    event.preventDefault();
    console.log('button worked')

    const newIngredient = document.createElement('input');
    newIngredient.classList.add('ingredient-input');
    newIngredient.setAttribute('type', 'text');
    newIngredient.setAttribute('placeholder', 'Enter Ingredient')

    console.log(newIngredient)

    console.log(ingredientContainer)
    ingredientContainer.appendChild(newIngredient);


}

const submitRecipeHandler = async (event) => {
    event.preventDefault();

    let title = document.getElementById('recipe').value;
    let description = document.getElementById('recipe-textarea').value;

    let allIngredients = document.querySelectorAll('.ingredient-input');
    let userIngredietns = [];

    for (let i = 0; i < allIngredients.length; i++) {
        userIngredietns.push({ name: allIngredients[i].value });
    }

    if (title && description) {

        const response = await fetch('/create_recipe', {
            method: 'POST',
            body: JSON.stringify({ title, description, userIngredietns }),
            header: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create recipe!');
        }

    } else {
        alert("Please Enter Recipe Name and Description");
    };
};

document
    .querySelector('#add-ingredient')
    .addEventListener('click', addIngredient)
document
    .querySelector('.create-recipe-btn')
    .addEventListener('click', submitRecipeHandler)
document
    .querySelector('.ingredient-input')
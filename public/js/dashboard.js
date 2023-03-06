// Delete Favourite Recipe

const deleteFavouritesButtons = document.querySelector("#favourites");
console.log(deleteFavouritesButtons)

deleteFavouritesButtons.addEventListener("click", (event) => {
    if (event.target.value !== undefined) {
        var favouriteId = event.target.value;
        console.log(favouriteId)
        fetch('/dashboard/favourite', { 
            method: "DELETE",
            body: JSON.stringify({ favouriteId }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                console.log(response)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    event.stopPropagation();
});

// Delete user recipe

const deleteRecipeButtons = document.querySelector("#user-recipes");
console.log(deleteRecipeButtons)

deleteRecipeButtons.addEventListener("click", (event) => {
    if (event.target.value !== undefined) {
        var recipeId = event.target.value;
        console.log(recipeId)
        fetch('/dashboard/recipe', { 
            method: "DELETE",
            body: JSON.stringify({ recipeId }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                console.log(response)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    event.stopPropagation();
});
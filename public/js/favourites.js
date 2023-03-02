const favouriteButton = document.querySelector('#all-recipes');

favouriteButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.value !== undefined) {
    const favouriteId = event.target.value;
    console.log(favouriteId);
    const response = fetch(`/favourites/${favouriteId}`, {
        method: "POST",
    })
    
    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }
    event.stopPropagation();

} 
});

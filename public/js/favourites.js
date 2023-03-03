const favouriteButton = document.querySelector('.favourite-btn');

favouriteButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.value !== undefined) {
        const favouriteId = event.target.value;
        console.log(favouriteId);
        const response = fetch(`/favourites/${favouriteId}`, {
            method: "POST",
        })

        if (!response.ok) {
            document.location.replace('/login')
        } else {
            event.preventDefault();
        }
        event.stopPropagation();
        
    }
});
const addReview = async (event) => {
    event.preventDefault();

    let recipe_id = document.getElementById('create-review-btn').value;
    let description = document.getElementById('review-textarea').value;
    console.log(recipe_id);
    console.log(description);

    if (description) {

        const response = await fetch('/create_review', {
            method: 'POST',
            body: JSON.stringify({ recipe_id, description }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        console.log(recipe_id + description);

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to create review');
        }

    } else {
        alert("Please Enter Review Description");
    };
    event.stopPropagation();
};

document
    .querySelector('#create-review-btn')
    .addEventListener('click', addReview);

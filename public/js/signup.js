const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('button worked');
    const username = document.querySelector('#username-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && email && password) {
      console.log(username, email, password)
    
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to signup in');
      }
    } else {
        alert('Cannot enter nothing')
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', loginFormHandler);
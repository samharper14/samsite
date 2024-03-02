function checkCredentials() {
    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Replace this with your actual authentication logic
    if (username === 'username' && password === 'password') {
      // If credentials are correct, navigate to the home page (replace 'home.html' with your actual home page)
      window.location.href = 'home.html';
    } else {
      // If credentials are incorrect, show an error message or perform other actions
      alert('Incorrect credentials. Please try again.');
    }
  }
  
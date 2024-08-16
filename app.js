// Simulated correct credentials
let users = {};

function showSignUp() {
    document.getElementById('sign-up-container').style.display = 'block';
    document.getElementById('sign-in-container').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'none';
    document.getElementById('sign-up-error').style.display = 'none';
    document.getElementById('sign-in-error').style.display = 'none';
}

function showSignIn() {
    document.getElementById('sign-up-container').style.display = 'none';
    document.getElementById('sign-in-container').style.display = 'block';
    document.getElementById('dashboard-container').style.display = 'none';
    document.getElementById('sign-up-error').style.display = 'none';
    document.getElementById('sign-in-error').style.display = 'none';
}

function showDashboard() {
    document.getElementById('sign-up-container').style.display = 'none';
    document.getElementById('sign-in-container').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'block';
    document.getElementById('sign-up-error').style.display = 'none';
    document.getElementById('sign-in-error').style.display = 'none';
}

function signUp() {
    const username = document.getElementById('sign-up-username').value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    const errorMessage = document.getElementById('sign-up-error');

    // Clear previous error message
    errorMessage.style.display = 'none';

    if (!username || !email || !password) {
        errorMessage.textContent = 'All fields are required.';
        errorMessage.style.display = 'block';
        return;
    }

    // Simulate storing the user data
    users[username] = password;
    console.log('Sign Up Successful!');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    // After sign-up, navigate to the sign-in page
    showSignIn();
}

function signIn() {
    const username = document.getElementById('sign-in-username').value;
    const password = document.getElementById('sign-in-password').value;
    const errorMessage = document.getElementById('sign-in-error');

    // Clear previous error message
    errorMessage.style.display = 'none';

    if (!username || !password) {
        errorMessage.textContent = 'All fields are required.';
        errorMessage.style.display = 'block';
        return;
    }

    // Check credentials
    if (users[username] === password) {
        console.log('Sign In Successful!');
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        showDashboard();
    } else {
        console.log('Incorrect username or password.');
        errorMessage.textContent = 'Incorrect username or password. Please try again.';
        errorMessage.style.display = 'block';
    }
}

function logOut() {
    console.log('Logged Out!');
    showSignIn();
}

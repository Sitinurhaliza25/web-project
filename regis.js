
//daftar dulu 
function signUp() {
    //untuk data pendaftaran 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    console.log('Sign Up Data:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // setelah daftar akan ke halaman login
    window.location.href = 'sign_in.html';
    return false;
}
//setelah daftar akan ke login 
function signIn() {
// untuk data login
    const signInEmail = document.getElementById('signin_email').value;
    const signInPassword = document.getElementById('signin_password').value;

    console.log('Sign In Data:');
    console.log('Email:', signInEmail);
    console.log('Password:', signInPassword);

    //setelah login akan ke halaman index.html
    window.location.href = 'index.html';

    return false;
}

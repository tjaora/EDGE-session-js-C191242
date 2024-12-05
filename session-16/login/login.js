// Step 1: Read email and password value from input
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

document.getElementById("loginButton").addEventListener("click", verifyLogin);

function verifyLogin() {
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    console.log(emailValue);
    console.log(passwordValue);

    if(emailValue === 'secret@gmail.com' && passwordValue === 'secret') {
        alert('WOW User is Valid');
        window.location.href = "dashboard.html";
    } else {
        alert('Beware, You are unauthorized');
    }
}

// Step 2: Verify email and password

// Step 3: Redirect to Dashboard or Show alert/warning/error
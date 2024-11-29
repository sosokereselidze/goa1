function validateForm() {
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var passwordError = document.getElementById("passwordError");

    if (password !== repeatPassword) {
        passwordError.textContent = "Passwords do not match";
        return false;
    } else {
        passwordError.textContent = "";
        alert("Account created successfully!");
        return true;
    }
}

console.log(kompeomacket)
function submitForm() {
    // Get form elements
    var firstName = document.getElementsByClassName('firstName').value;
    var lastName = document.getElementsByClassName('lastName').value;
    var age = document.getElementsByClassName('age').value;

    // Create an object to store the information
    var formData = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    // Display the object in the console
    console.log(formData);
}
function logFormData() {
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;

    console.log(`Name: ${name}`);
    console.log(`Lastname: ${lastname}`);
    console.log(`Age: ${age}`);
}
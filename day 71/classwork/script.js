let users = [];

function addUser() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    
    if (!firstName || !lastName) {
        alert("Please enter both first name and last name.");
        return;
    }

    users.push({ firstName, lastName });
    displayUsers();
    resetInputFields();
}

function displayUsers() {
    const userListDiv = document.getElementById("userList");
    userListDiv.innerHTML = "<h3>List of Users:</h3>";

    if (users.length > 0) {
        const userList = users.map(user => `<li>${user.firstName} ${user.lastName}</li>`).join("");
        userListDiv.innerHTML += `<ul>${userList}</ul>`;
    } else {
        userListDiv.innerHTML += "<p>No users added yet.</p>";
    }
}

function resetInputFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
}
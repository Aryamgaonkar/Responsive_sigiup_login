function validateForm() {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username === "" || password === "") {
        alert("Username and password are required!");
        return false;
    }
    return true;
}
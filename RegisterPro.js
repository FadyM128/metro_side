const submitButton = document.getElementById("sumbit");

submitButton.addEventListener("click", () =>{
    let NameInput = document.getElementById("Name");
    let UsernameInput = document.getElementById("Username");
    let passwordInput = document.getElementById("password");
    let accounts = JSON.parse(localStorage.getItem("accounts")) ||  [];
    let newAccount = {
        username: UsernameInput.value,
        name:NameInput.value,
        password: passwordInput.value,
        type: typeInput.value,
    }
    accounts.push(newAccount);
    localStorage.setItem("account", JSON.stringify(accounts));
      window.location.herf="Login.html";
});

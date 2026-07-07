document.getElementById("loginBtn").addEventListener("click", function () {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === "" || password === ""){
        alert("Please enter username and password.");
        return;
    }

    alert("account linked");
});
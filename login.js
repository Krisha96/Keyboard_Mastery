function login(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "123") {
      document.getElementById("success-message").style.display = "block";
      document.getElementById("login-form").style.display = "none";
      
    } else {
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      alert("Incorrect Username or Password!");

      cancel();
    }
  
    return false;
}

function cancel() {
   
}

function openForm() {
    document.getElementById("forms").style.display = "block";
}

function closeForm(event) {
    event.preventDefault();
    document.getElementById("forms").style.display = "none";
    resetForm();
}
  
function resetForm() {
   
    document.getElementById("login-form").reset();
}

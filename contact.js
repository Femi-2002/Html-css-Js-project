const validateForm = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
  
    if (name === "") {
      document.getElementById("nameError").innerHTML = "Name is required";
      return false;
    }
  
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required";
      return false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email format";
      return false;
    }
  
    if (password === "") {
      document.getElementById("passwordError").innerHTML = "Password is required";
      return false;
    }
  
    return true;
  };
  function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
console.log("Registration form!");

function registerUser() {
  //Registration logic goes here
  let fullName = prompt("Enter your full name:");
  //Check both names
  while (
    fullName
      .trim()
      .split(" ")
      .filter((word) => word !== "").length < 2
  ) {
    fullName = prompt(
      "invalid name.please enter both your surname and your last name"
    );
    return;
  }
  // registration logic goes here
  let email = prompt("Enter your email:");
  while (!email.includes("@") || !email.includes(".")) {
    email = prompt("please enter a valid email address.");
    return;
  }

  //password
  let password = prompt("create a password.your password must have atleast 8 character 1 number and 1 special character:");
  while ((password.length < 8 || !/[!@#$%^&*()_+-=[\]{}|;:'"<>\/?]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test)) {
    password = prompt("invalid password.your password must contain atleast 8 character 1 number and 1 special character:");
    return;
    //confirmpassword
  let confirmPassword =prompt("confirm password. password must match the password feild.");
    while (confirmPassword !== password) {
    confirmPassword = prompt("password must match.please enter password again.");
    }
    return;
  }
  //Age
  let Age = prompt("enter your age");
  while (isNaN(Age) || Age <= 18){
    Age = prompt ("invalid Age. please enter a valid Age.");
    return;
  }
  alert("Registration sucessful");
}
registerUser();

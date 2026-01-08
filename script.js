console.log("Registration form!");

function registerUser() {
  // Full name
  let fullName = prompt("Enter your full name:");
  while (
    fullName
      .trim()
      .split(" ")
      .filter((word) => word !== "").length < 2
  ) {
    fullName = prompt(
      "Invalid name. Please enter both your first name and last name."
    );
  }

  // Email
  let email = prompt("Enter your email:");
  while (!email.includes("@") || !email.includes(".")) {
    email = prompt("Please enter a valid email address.");
  }

  // Password
  let password = prompt(
    "Create a password.\nMust be at least 8 characters, include 1 capital letter, 1 number, and 1 special character."
  );

  while (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[!@#$%^&*()_+\-=[\]{}|;:'"<>\/?]/.test(password)
  ) {
    password = prompt(
      "Invalid password.\nMust be at least 8 characters, include 1 capital letter, 1 number, and 1 special character."
    );
  }

  // Confirm password
  let confirmPassword = prompt("Confirm your password:");
  while (confirmPassword !== password) {
    confirmPassword = prompt("Passwords do not match. Please try again:");
  }

  // Age
  let age = prompt("Enter your age:");
  while (isNaN(age) || age <= 18) {
    age = prompt("Invalid age. You must be older than 18.");
  }

  alert("Registration successful!");
}

registerUser();

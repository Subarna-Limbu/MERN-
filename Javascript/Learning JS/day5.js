function login(username, password) {
  if (!username || !password) {
    console.log("Username or password cannot be empty");
    return;
  }

  if (password.length < 6) {
    console.log("Password too short");
    return;
  }

  console.log("Login successful!");
}

login("Subarna", "123456");

import React, { useEffect, useState } from "react";
import "../asserts/form.css";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username);
    if (username.trim() === "") {
      alert("Username can't be empty!!");
      return;
    }
    if (password.trim() === "") {
      alert("Password can't be empty!!");
      return;
    }
    alert("Login Successfull...");
    setIsLoggedIn(true);
  }
  useEffect(() => {
    console.log("Hii Welcome to Login Page!!!");
  });
  return (
    <div className="form">
      {isLoggedIn ? (
        <div className="home-container">
          <h2>User Details</h2>
          <p>Username: {username}</p>
        </div>
      ) : (
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>Username:</label>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";

const Login = ({ setauthView, setview }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <h1>Login Page</h1>
      <div>
        <div>
          <label>Email</label>{" "}
          <input
            onChange={(e) => {
              const value = e.target.value;
              setemail(value);
            }}
            placeholder="email"
          />{" "}
        </div>
        <div>
          <label>Password</label>{" "}
          <input
            onChange={(e) => {
              const value = e.target.value;
              setpassword(value);
            }}
            placeholder="name"
          />{" "}
        </div>
      </div>
      <button
        onClick={() => {
          if (email == "") return;
          if (password == "") return;
          setview("");
          setauthView("todo");
        }}
      >
        submit
      </button>
    </>
  );
};
export default Login;

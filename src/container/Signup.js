import React, { useState } from "react";

const SignUp = ({ setauthView }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <h1>Signup page</h1>
      <div>
        <div>
          <label>Enter your name</label>{" "}
          <input
            onChange={(e) => {
              const value = e.target.value;
              setname(value);
            }}
            placeholder="name"
          />{" "}
        </div>
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
          if (name == "") return;
          if (email == "") return;
          if (password == "") return;
          setauthView("login");
        }}
      >
        submit
      </button>
    </>
  );
};
export default SignUp;

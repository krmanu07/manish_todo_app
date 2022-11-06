import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import Todo from "./Todo";

const Conatiner = () => {
  const [view, setview] = useState("button");
  const [authView, setauthView] = useState("");
  return (
    <div>
      {view === "button" && (
        <div>
          <button
            onClick={() => {
              setview("");
              setauthView("signup");
            }}
          >
            SignUp
          </button>
          <button
            onClick={() => {
              setauthView("login");
            }}
          >
            Login
          </button>
        </div>
      )}
      {authView == "signup" && <SignUp setauthView={setauthView} />}
      {authView == "login" && (
        <Login setview={setview} setauthView={setauthView} />
      )}
      {authView == "todo" && <Todo />}
    </div>
  );
};
export default Conatiner;

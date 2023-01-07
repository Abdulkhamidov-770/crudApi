import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_IN } from "./redux-toolkit/sagas/types";
import { setSignInSlice } from "./redux-toolkit/slice/signIn";

export default function Login() {
  const signIn = useSelector((state) => state.signIn.user);
  const token = useSelector((state) => state.signIn.token);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("signIn data", signIn);
    console.log("token effect", token);

  }, [signIn]);
  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;
    dispatch(setSignInSlice({ 
        username:username.value,
        password:password.value
    }));
    dispatch({ type: SIGN_IN , signIn});
    console.log("token after", token);
  }
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login page</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}

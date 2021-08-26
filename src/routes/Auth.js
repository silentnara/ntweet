import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const onChangeForm = (event) => {
    const {
      target: { name, value },
    } = event;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      isLogin
        ? await authService.signInWithEmailAndPassword(
            form.email,
            form.password
          )
        : await authService.createUserWithEmailAndPassword(
            form.email,
            form.password
          );
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleLogin = () => setIsLogin(!isLogin);
  const signInwWithSocial = async (event) => {
    const {
      target: {
        dataset: { service },
      },
    } = event;
    let provider;
    try {
      switch (service) {
        case "google":
          provider = new firebaseInstance.auth.GoogleAuthProvider();
          break;
        case "github":
          provider = new firebaseInstance.auth.GithubAuthProvider();
          break;
        default:
          break;
      }
      await authService.signInWithPopup(provider);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          required
          id="email"
          placeholder="Email"
          onChange={onChangeForm}
        />
        <input
          name="password"
          type="password"
          required
          id="password"
          placeholder="Password"
          onChange={onChangeForm}
          autoComplete="on"
        />
        <input
          type="submit"
          id="submit"
          placeholder="Email"
          value={isLogin ? "Login" : "Sign up"}
        />
        <span>{error}</span>
      </form>
      <button onClick={toggleLogin}>{isLogin ? "Login" : "Sign up"}</button>
      <>
        <button data-service="google" onClick={signInwWithSocial}>
          Sign in with Google
        </button>
        <button data-service="github" onClick={signInwWithSocial}>
          Sign in with Github
        </button>
      </>
    </>
  );
};
export default Auth;

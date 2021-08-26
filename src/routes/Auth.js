import React, { useState } from "react";

const Auth = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const onChangeForm = (event) => {
    const {
      target: { name, value },
    } = event;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form>
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
          value="submit"
          onSubmit={onSubmit}
        />
      </form>
      <>
        <button>Sign in with Google</button>
        <button>Sign in with Github</button>
      </>
    </>
  );
};
export default Auth;

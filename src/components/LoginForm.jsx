"use client";

import { handleLogin } from "@/utils/action";
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
        const formData = new FormData(event.currentTarget);

        const response = await handleLogin(formData);

        if (!!response.error) {
            console.error(response.error);
            setError(response.error.message);
        } else {
          window.location.href = "/";
        }
    } catch (e) {
        console.error(e);
        setError("Check your Credentials");
    }
}

 
  return (
    <div className="form-container w-80 rounded-lg bg-navyBlue p-8 text-gray-200">
      <p className="title text-center text-2xl font-bold">Login</p>
      <form className="form mt-6" onSubmit={onSubmit}>
        <div className="input-group mt-1 text-sm">
          <label htmlFor="username" className="block text-gray-400 mb-1">Employee ID</label>
          <input type="text" name="username" id="username" placeholder="" className="w-full rounded-md border border-gray-700 outline-0 bg-gray-900 p-3 text-gray-200 focus:border-purple-500" />
        </div>
        <div className="input-group mt-1 text-sm">
          <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
          <input type="password" name="password" id="password" placeholder="" className="w-full rounded-md border border-gray-700 outline-0 bg-gray-900 p-3 text-gray-200 focus:border-purple-500" />
          <div className="forgot flex justify-end text-xs text-gray-400 mt-2 mb-3">
            <a rel="noopener noreferrer" href="#" className="hover:underline text-gray-200">Forgot Password ?</a>
          </div>
        </div>
        <button type="submit" className="sign block w-full bg-purple-500 p-3 text-center text-gray-900 rounded-md font-semibold">Sign in</button>
      </form>
    </div>

  );
}

export default LoginForm;

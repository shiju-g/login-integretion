"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (e.target.email.value !== "") {
      setEmail(e.target.email.value);
    }
    if (e.target.password.value != "") {
      setPassword(e.target.password.value);
    }

    if (password == "" || email == "") {
      return;
    }

    try {
      const response = await fetch(
        "https://textile.torcdeveloper.com/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(response);
        // Store the access token in local storage or state
        const accessToken = data.accessToken;
        // Redirect to the dashboard page
        // window.location.href = "/dashboard";
        console.log(accessToken);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <div className="w-full xl:px-20 sm:px-10  h-full flex lg:flex-row flex-col min-h-screen items-center   justify-center   bg-[#f8f8f8]">
        <div className="bg-white h-full  sm:p-10 p-8 xl:max-w-md lg:max-w-sm max-w-lg lg:order-1 order-2 w-full  rounded-xl shadow-xl">
          <h2 className="text-3xl text-indigo-900 font-bold">Login</h2>
          <p className="text-gray-500 mt-2">
            Does't have account?{" "}
            <span className="font-bold text-purple-700">Sign Up</span>
          </p>
          <form onSubmit={submitHandler} method="post" action="">
            <div className="mt-5">
              <label className="block font-semibold" htmlFor="">
                Email Address
              </label>
              <input
                className="p-3 w-full n rounded-lg border-2 border-gray-400"
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-5">
              <label className="block font-semibold" htmlFor="">
                Password
              </label>
              <input
                name="password"
                className="p-3 w-full rounded-lg border-2 border-gray-400"
                type="password"
                placeholder="Enter 6 character or more"
              />
            </div>
            <div className="text-sm font-medium text-gray-500 mt-5">
              <input className="p-2" type="checkbox" />
              <label className="ml-2" htmlFor="">
                Remember me
              </label>
            </div>
            <button
              className="mt-8 bg-indigo-500 text-lg hover:bg-indigo-700 font-medium py-3 w-full rounded-xl text-white"
              type="submit"
            >
              LOGIN
            </button>
            <div className="text-center text-gray-400 mt-5 relative">
              <div className="w-full h-0.5 bg-gray-400"></div>
              <p className=" absolute  left-1/3 -mt-4 bg-white m-0 py-0 px-3">
                or login with
              </p>
            </div>
            <div className="flex mt-8 gap-4">
              <button className="w-1/2 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm border-2 border-red-500 rounded-lg py-2">
                Google
              </button>
              <button className="w-1/2 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold text-sm border-2 border-blue-500 rounded-lg py-2">
                Facebook
              </button>
            </div>
          </form>
        </div>
        <div className="w-11/12 mx-auto lg:order-2 order-1">
          <img className="" src="/icon.png" />
        </div>
      </div>
    </>
  );
}

"use client";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const page = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const profile = Cookies.get("user");
    const data = JSON.parse(profile);
    setUser([data]);
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-xl my-3">
        Welcome to Dashboard!
      </h1>
      {user &&
        user.map((item) => (
          <div className="text-center rounded-lg bg-gray-300 mx-auto w-11/12 py-2">
            <h1 className="text-3xl font-bold">name: {item.name}</h1>
            <h2 className="text-2xl font-bold">email: {item.email}</h2>
            <h3 className="text-2xl font-semibold">number: {item.mobile}</h3>
          </div>
        ))}
    </div>
  );
};

export default page;

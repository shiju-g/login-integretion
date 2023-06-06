"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

const page = () => {
  const userDetails = async () => {
    try {
      const response = await fetch(
        "https://textile.torcdeveloper.com/api/v1/dashboard/data"
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error retrieving user details", error);
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  return <div>page</div>;
};

export default page;

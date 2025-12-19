"use client";
import { IUser } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
import Details from "./Details";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  console.log(userInfo);

  // console.log(loading);

  const getCustomerInfo = async () => {
    const customerId = localStorage.getItem("customerId");
    const token = localStorage.getItem("token");
    if (!customerId) {
      alert("Please login");
      return;
    }

    const data = { customerId, token };

    console.log("data=>", data);

    try {
      const apiRes = await fetch(`/api/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const apiResJson = await apiRes.json();

      console.log("apiResJson=>", apiResJson);

      if (apiResJson.status == "200") {
        // localStorage.setItem("customerId", apiResJson.response);
        // router.push("/dashboard");

        setUserInfo(apiResJson.response[0]);
      }
    } catch (error) {
      console.log("error=>", error);
    }
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);
  return (
    <>
      {/* <section className="p-10">
        <div className="flex  gap-2 text-white">
          <h1>Name:</h1> <span>{userInfo?.name}</span>
        </div>
        <div className="flex  gap-2 text-white">
          <h1>Email:</h1> <span>{userInfo?.email}</span>
        </div>
        <div className="flex  gap-2 text-white">
          <h1>Mobile No.:</h1> <span>{userInfo?.mobile}</span>
        </div>
      </section> */}
      <Details />
    </>
  );
};

export default Dashboard;

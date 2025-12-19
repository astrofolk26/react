"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { IUser } from "../interfaces";
import { useRouter } from "next/navigation";
// import { notification } from "antd";

interface CommonContextType {
  //   toast: (type: NotificationType, message: string) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  customer: IUser | null;
  setCustomer: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const GlobalContext = createContext({} as CommonContextType);

type GlobleContextProviderProps = {
  children: ReactNode;
};

// type NotificationType = "success" | "info" | "warning" | "error";

const GlobalProvider = (props: GlobleContextProviderProps) => {
  //   const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState<IUser | null>(null);
  const router = useRouter();

  //   const toast = (type: NotificationType, message: string) => {
  //     api[type]({
  //       message,
  //       placement: "top",
  //     });
  //   };

  const getCustomerInfo = async () => {
    const customerId = localStorage.getItem("customerId");
    const token = localStorage.getItem("token");

    if (!customerId || !token) {
      alert("Please login");
      router.replace("/");
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

        setCustomer(apiResJson.response[0]);
      }
    } catch (error) {
      console.log("error=>", error);
    }
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        // toast,
        loading,
        setLoading,
        customer,
        setCustomer,
        ...props,
      }}
    >
      {props.children}
      {/* {contextHolder} */}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

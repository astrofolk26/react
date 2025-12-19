"use client";

import React from "react";
import { useSearchParams,useRouter } from "next/navigation";
import { HiH2 } from "react-icons/hi2";


const ThankYou = () => {
  const searchParams = useSearchParams();
  var orderId = new URLSearchParams(searchParams.toString()).get("id") ;
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div style={styles.abc}>
        <h1 style={styles.title}>🎉 Thank You!</h1>
        <h3 style={styles.message}>
          Your order has been successfully created.
          <br/> Please be ready for Payment.
        </h3>
        {orderId && (
          <h3 style={styles.orderInfo}>
            <strong>Order ID:</strong> {orderId}
          </h3>
        )}
        <button style={styles.button} onClick={() => router.push("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#eff1f4ff",
  },
  title: {
    color: "#16a34a",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
  },
  orderInfo: {
    marginBottom: "1.5rem",
    color: "#374151",
  },
  button: {
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
  }, abc: {
    backgroundColor: "#f7f2f2ff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(236, 233, 233, 1)",
    textAlign: "center",
    maxWidth: "400px",
  }  as React.CSSProperties,

};

export default ThankYou;
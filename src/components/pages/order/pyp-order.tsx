"use client";
import React, { useState } from "react";
import { useSearchParams,useRouter } from "next/navigation";
import axios from 'axios'


function AstrologyForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        gender: "",
        email: "",
        mobile: "",
        dob: "",
        tob :"",
        birthPlace: "",
        currentLocation: "",
        issue: "NA",
        price:"",
        paymentMode:"",
        reportType:"",
        orderId:"",
        orderDate:""

    });

    const searchParams = useSearchParams();
    var type = new URLSearchParams(searchParams.toString()).get("type") ;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        e.preventDefault();
    };

    const dateTime = new Date();
   const router = useRouter();
var randomNumber = Math.floor(Math.random() * 900) + 100;

// Example: YYYYMMDDHHMMSS
var simpleNumber =
  dateTime.getFullYear().toString().padStart(2, "0")  + String(dateTime.getMonth() + 1).padStart(2, "0") +  String(dateTime.getDate()).padStart(2, "0") + String(dateTime.getHours()).padStart(2, "0") +  String(dateTime.getMinutes()).padStart(2, "0") + String(dateTime.getSeconds()).padStart(2, "0")+ String(randomNumber) ;

    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formData.price="$35 | INR3100";
        formData.orderId = "PYP-"+ simpleNumber;
        formData.orderDate =  dateTime.toDateString();
       // console.log("Form submitted:", formData);
                try {
    await axios.post(
      "https://api.sheetbest.com/sheets/efe335b0-0875-4525-9d21-c28da47e3e43",
      formData
    );
const orderI=formData.orderId;
    // Reset form
    setFormData({
      fullName: "",
      gender: "",
      email: "",
      mobile: "",
      dob: "",
      tob: "",
      birthPlace: "",
      currentLocation: "",
      issue: "NA",
      price: "",
      paymentMode: "",
      reportType: "",
      orderId: "",
      orderDate: "",
    });
    //e.currentTarget.reset();

    // Redirect to thank you page
    router.push(`/thankyou?id=${orderI}`);
  } catch (error) {
    console.error("Error submitting form:", error);
  }

//         axios.post('https://api.sheetbest.com/sheets/efe335b0-0875-4525-9d21-c28da47e3e43',formData).then((response)=>
//         {console.log(response);
             
//     e.currentTarget.reset();
//  router.push("/thank-you");

//     })
    //     const apiRes = await fetch("/api/auth/order", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const apiResJson = await apiRes.json();

    //   console.log("apiResJson=>", apiResJson);

    };

    const containerStyle = {
        display: "flex",
        gap: "40px",
        margin: "40px auto",
        maxWidth: "1000px",
        padding: "0 20px"
    };

    const formStyle = {
        flex: 1,
        padding: "30px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif"
    };

    const sidebarStyle = {
        width: "250px",
        padding: "30px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        height: "fit-content"
    };

    const labelStyle = {
        display: "block",
        marginBottom: "8px",
        fontWeight: "600",
        color: "#333"
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        marginBottom: "16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
        boxSizing: "border-box" as const
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        backgroundColor: "#f3620eff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s"
    };

    const sidebarItemStyle = {
        marginBottom: "20px",
        padding: "15px",
        backgroundColor: "white",
        borderRadius: "4px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2 style={{ textAlign: "center", color: "#333", marginBottom: "24px" }}>Astrology Order Form</h2>

                <div>
                    <label style={labelStyle}>Full Name:</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={inputStyle} required />
                </div>

                <div>
                    <label style={labelStyle}>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} style={inputStyle} required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label style={labelStyle}>Email ID:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                </div>

                <div>
                    <label style={labelStyle}>Mobile Number:</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} style={inputStyle} required />
                </div>

                <div>
                    <label style={labelStyle}>Date of Birth:</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} style={inputStyle} required />
        
                </div>

                <div>
                    <label style={labelStyle}>Time of Birth:</label>
                    <input type="time" name="tob" value={formData.tob} onChange={handleChange} style={inputStyle} required />
                </div> 

                <div>
                   <label style={labelStyle}>Place of Birth (city, state, country):</label>
                 <input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleChange} style={inputStyle} required />
                </div>

                <div>
                   <label style={labelStyle}>Current Location (full address with city, state, country):</label>
                    <input type="text" name="currentLocation" value={formData.currentLocation} onChange={handleChange} style={inputStyle} required />
                </div>
                
         
                <button type="submit" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#45a049"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#4CAF50"}>
                    Submit
                </button>
            </form>

            <div style={sidebarStyle}>
                <h3 style={{ color: "#333", marginBottom: "20px", textAlign: "center" }}>Order Summary</h3>
                <div style={sidebarItemStyle}>
                    <label style={labelStyle}>Report Type:</label>
                    <p style={{ margin: "0", color: "#666", fontSize: "16px" }}>{"Personalized Yearly Prediction"}</p>
                </div>
                <div style={sidebarItemStyle}>
                    <label style={labelStyle}>Price:</label>
                    <p style={{ margin: "0", color: "#f46417ff", fontSize: "24px", fontWeight: "bold" }}>{"$35 | INR3100"}</p>
                </div>
            </div>
        </div>
    );
}

export default AstrologyForm;

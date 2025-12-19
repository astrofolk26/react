"use client";

//container
import Container from "@/components/layouts/Container";
//image
import Image from "next/image";
import CryptoJS from "crypto-js";

import React, { MouseEvent, useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { baseurl } from "@/utils/constants";
import { useRouter } from "next/navigation";



type BannerProps = {
  t?: {
    bannerTitle: string;
  };
};

const Banner = ({ }: BannerProps) => {
  const [amount, setAmount] = useState(10000);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const [disabled, setDisabled] = useState(false);
  const [disabledOtp, setDisabledOtp] = useState(true);
  const [ip, setIp] = useState("");
  const [utmSource, setUtmSource] = useState("");

  const router = useRouter();
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const source = searchParams.get("utm_source") || "";
    setUtmSource(source);
  }, []);

  useEffect(() => {
    const fetchIp = async () => {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);

    };
    fetchIp();
  }, []);


  const handleChange = (key: string, value: string) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const handleApply = async (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!userInfo.name) {
      return alert("Please enter Name");
    }

    if (!userInfo.email) {
      return alert("Please enter Email");
    }

    if (!userInfo.phone) {
      return alert("Please enter Mobile number");
    }

    const formData = new FormData();
    formData.append("leadId", "0");
    formData.append("mobile", userInfo.phone);
    try {
      setDisabled(true);

      const apiRes = await fetch(`${baseurl}/loan_otp.php`, {
        method: "POST",
        body: formData,
      });


      const apiResJson = await apiRes.json();


      if (apiResJson.status == "200") {
        setShowOtp(true);
      }
    } catch (error) {
      console.log("error=>", error);
    } finally {
      setDisabled(false);
    }
  };
  function base64UrlEncode(wordArray: CryptoJS.lib.WordArray) {
    return CryptoJS.enc.Base64.stringify(wordArray)
      .replace(/\+/g, "-") // + → -
      .replace(/\//g, "_") // / → _
      .replace(/=+$/, ""); // Remove padding
  }
  const handleSubmitOtp = async () => {
    if (otp.length > 4) {
      return alert("OTP should be of 4 digits only");
    }
    const formData = new FormData();
    formData.append("mobile", userInfo.phone);
    formData.append("otp", otp);
    try {
      const apiRes = await fetch(`${baseurl}/OTP.php`, {
        method: "POST",
        //headers: {
        //  "Content-Type": "application/json",
        // },
        // body: JSON.stringify({ mobile: userInfo.phone, otp }),
        body: formData
      });
      const apiResJson = await apiRes.json();

      console.log("apiResJson=>", apiResJson);

      if (apiResJson.status == "200") {
        localStorage.setItem("token", apiResJson.response[0].token);
        localStorage.setItem("utmSource", utmSource);
        localStorage.setItem("ip", ip);
        if (apiResJson.response[0].customerId == "0"  || apiResJson.response[0].customerId) {
          registerCustomer();
        } else {
          const secretHex =
            "d9f8b93e0f6a421a8e1b6c3a04c1fdfd8e23fbf3ce2e7b90d5b33bda4eec0bb6";
          const secretKey = CryptoJS.enc.Hex.parse(secretHex.slice(0, 32)); // AES-128 = 16 bytes
          const iv = CryptoJS.lib.WordArray.random(16); // Random IV

          const customerId =
            apiResJson.response[0]?.customerId || apiResJson.response;
          const token = apiResJson.response[0]?.token || apiResJson.token;

          const encryptedCustomerId = CryptoJS.AES.encrypt(
            customerId,
            secretKey,
            { iv: iv }
          );
          const encryptedToken = CryptoJS.AES.encrypt(token, secretKey, {
            iv: iv,
          });
          const encryptedutm_source = CryptoJS.AES.encrypt(utmSource, secretKey, {
            iv: iv,
          });
          const encryptedip = CryptoJS.AES.encrypt(ip, secretKey, {
            iv: iv,
          });

          const encryptedutm_sourceBase64 = base64UrlEncode(
            encryptedutm_source.ciphertext
          );

          const encryptedCustomerIdBase64 = base64UrlEncode(
            encryptedCustomerId.ciphertext
          );
          const encryptedTokenBase64 = base64UrlEncode(
            encryptedToken.ciphertext
          );

          const encryptedipBase64 = base64UrlEncode(encryptedip.ciphertext);
          const ivBase64 = base64UrlEncode(iv);

          console.log("Encrypted Token:", encryptedTokenBase64);
          localStorage.setItem("customerId", apiResJson.response[0].customerId);
          router.push(
            `https://astrofolk.com/loan/index.php?customerId=${encodeURIComponent(
              encryptedCustomerIdBase64
            )}&token=${encodeURIComponent(
              encryptedTokenBase64
            )}&iv=${encodeURIComponent(ivBase64)}&utm_source=${encodeURIComponent(encryptedutm_sourceBase64)}&ip=${encodeURIComponent(encryptedipBase64)}`
          );
        }
        setShowOtp(false);
      } else if (apiResJson.status == "101") {
        return alert(apiResJson.response);
      } else {
        return;
      }
    } catch (error) {
      console.log("error=>", error);
    } finally {
    }
  };

  const registerCustomer = async () => {
    const token = localStorage.getItem("token") || "";
    const formData = new FormData();
    formData.append("mobile", userInfo.phone);
    formData.append("name", userInfo.name);
    formData.append("email", userInfo.email);
    formData.append("token", token);
    try {
      const apiRes = await fetch(`${baseurl}/InsertCustomer.php`, {
        method: "POST",
        body: formData
      });
      const apiResJson = await apiRes.json();


      console.log("apiResJson=>", apiResJson);

      if (apiResJson.status == "200") {           console.log("error=>");
       
      }
    } catch (error) {
      console.log("error=>", error);
    }
  };
  return (
    <section className="bg-[var(--primary)] padding relative " style={{ paddingBottom: '12px' }} >
               
                   <section className="flex items-center justify-center" style={{ marginTop: '-40px' }}>
                     
        <Image
                  src="/assets/images/security/remediesspecialist.JPG"
          alt="Astro the Sky"
          width={1250}
          height={550}
          className=""
        />
      </section>
     
    </section>
  );
};

export default Banner;


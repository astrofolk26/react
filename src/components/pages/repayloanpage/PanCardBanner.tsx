'use client';

import React, { MouseEvent, useState } from "react";
import Image from "next/image";
import Container from '@/components/layouts/Container';
import { baseurl } from "@/utils/constants";

interface LoanData {
    leadID: string;
    name: string;
    loanNo: string;
    disbursalAmount: string;
    disbursalDate: string;
    repayDate: string;
    mobile: string;
}

const PanCardBanner = () => {
    const [userInfo, setUserInfo] = useState({ info: "" });
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [loanData, setLoanData] = useState<LoanData[] | null>(null);  // Updated type
    const [upiData, setupiData] = useState<string | null>(null);
    const [mobile, setMobile] = useState<string>("");

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    // Handle OTP input
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value);
    };

    // Get OTP
    const getOtp = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!userInfo.info) return alert("Please enter Name, PAN, or Mobile.");

        setIsLoading(true);
        setError("");

        try {
            // Step 1: Repay Loan API
            const formData = new FormData();
            formData.append("search", userInfo.info);

            const apiRes = await fetch(`${baseurl}/repayLoan_web.php`, {
                method: "POST",
                body: formData,
            });

            const rawText = await apiRes.text();
            let apiResJson;
            try {
                apiResJson = JSON.parse(rawText);
            } catch {
                //console.error("Backend raw response:", rawText);
                throw new Error("Invalid JSON response from backend");
            }

            if (apiResJson.status === 200) {
                setLoanData(apiResJson.data);
                //  console.log(apiResJson);


                const leadId = apiResJson.data?.[0]?.leadID || userInfo.info;
                const mobileNum = apiResJson.data?.[0]?.mobile;
                setMobile(mobileNum);

                // Step 2: Send OTP
                const otpFormData = new FormData();
                otpFormData.append("leadId", leadId);
                otpFormData.append("mobile", mobileNum);

                const otpRes = await fetch(`${baseurl}/loan_otp.php`, {
                    method: "POST",
                    body: otpFormData,
                });

                const otpJson = await otpRes.json();

                if (otpJson.status === "200") {
                    console.log(otpJson);

                    setOtpSent(true); // ✅ show OTP input
                    // alert("OTP sent successfully!");
                } else {
                    throw new Error(otpJson.response || "OTP sending failed");
                }
            } else {
                setError(apiResJson.message || "Something went wrong.");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                // console.error("Error:", err);
                setError(err.message || "Unexpected error occurred.");
            } else {
                // console.error("Unexpected error:", err);
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Submit OTP
    const submitOtp = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!otp) return alert("Please enter OTP.");

        try {
            const leadId = loanData?.[0]?.leadID || userInfo.info;
            const mobileNum = mobile || loanData?.[0]?.mobile;

            if (!leadId || !mobileNum) {
                throw new Error("Lead ID or Mobile missing!");
            }

            const verifyForm = new FormData();
            verifyForm.append("otp", otp);
            verifyForm.append("mobile", mobileNum);

            const verifyRes = await fetch(`${baseurl}/OTP.php`, {
                method: "POST",
                body: verifyForm,
            });

            const verifyJson = await verifyRes.json();

            if (verifyJson.status === "200") {

                //  alert("OTP verified successfully!");      
                const formData = new FormData();
                formData.append("leadId", leadId);
                formData.append("token", verifyJson.response[0].token);

                // ✅ Step 3: Fetch UPI QR after OTP verify
                const upiRes = await fetch(`https://sabkaloan.com/UPIApi.php`, {
                    method: "POST",
                    // headers: { "Content-Type": "application/json" },
                    body: formData,
                });

                const upiJson = await upiRes.json();

                if (upiJson.status === "200" && typeof upiJson.response === "string") {
                    const match = upiJson.response.match(/src=['"]([^'"]+)['"]/);
                    if (match && match[1]) {
                        setupiData(match[1]);
                    } else {
                        throw new Error("QR URL not found in UPI API response");
                    }
                } else {
                    throw new Error(upiJson.message || "UPI API failed.");
                }
            } else {
                throw new Error(verifyJson.response || "OTP verification failed");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                // console.error("OTP Verify Error:", err);
                setError(err.message || "OTP verification error");
            } else {
                // console.error("Unexpected error:", err);
                setError("An unexpected error occurred.");
            }
        }
    };

    return (
        <section className="padding border-b border-[var(--primary)] py-6">
            <Container width>
                <h2 className="title layoutPadding max-w-[700px]">
                    <span>Repay your loan and </span>interest amount
                    <span> through the </span>QR Code
                </h2>

                <div>

                    <Image
                        src="/assets/images/repayloan/rp-1.png"
                        alt="rupee-currency-symbol"
                        width={1800}
                        height={200}
                        className="object-cover w-full padding"
                    />
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center px-4 py-6">
                    <div>
                        <p>
                            Before making any transfer, please make sure the information
                            below is correct. For queries, email us at info@sabkaloan.com.
                        </p>
                    </div>

                    <div>
                        <div className="flex gap-4">
                            <input
                                value={userInfo.info}
                                onChange={handleInputChange}
                                type="text"
                                name="info"
                                placeholder="Enter PAN, Phone or Lead ID."
                                required
                                className="flex w-100 px-4 py-2 bg-gray-200"
                            />

                            <button
                                className={`px-5 py-2 text-[var(--primary)] bg-indigo-800 hover:bg-indigo-950 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                                onClick={getOtp}
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending OTP..." : "GET OTP"}
                            </button>
                        </div>

                        {otpSent && (
                            <div className="flex gap-4 mt-3">
                                <input
                                    value={otp}
                                    onChange={handleOtpChange}
                                    type="text"
                                    name="otp"
                                    placeholder="Enter OTP"
                                    required
                                    className="flex w-100 px-4 py-2 bg-gray-200"
                                />
                                <button
                                    className="px-5 py-2 text-[var(--primary)] bg-indigo-800 hover:bg-indigo-950"
                                    onClick={submitOtp}
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </section>

                <h2 className="title text-3xl text-center py-6">
                    <span>
                        Please repay your loan and interest amount through the following
                        bank
                    </span>
                </h2>

                <section className="grid sm:grid-cols-[60%_40%] gap-4 sm:gap-10 items-center my-10">
                    <section className="w-full sm:w-auto">
                       {loanData ? (
                                        <>
                        <div className="text-white border border-[var(--primary)] p-1 sm:p-6">
                            <table className="w-full">
                                <tbody>
                                  

                                            <tr className="border-b border-[var(--primary)]">
                                                <td className="py-2 font-medium text-left border-r border-[var(--primary)]">
                                                    Lead ID
                                                </td>
                                                <td className="px-4 py-2">{loanData[0].leadID}</td>
                                            </tr>
                                            <tr className="border-b border-[var(--primary)]">
                                                <td className="py-2 font-medium text-left border-r border-[var(--primary)]">
                                                    Name
                                                </td>
                                                <td className="px-4 py-2">{loanData[0].name}</td>
                                            </tr>
                                            <tr className="border-b border-[var(--primary)]">
                                                <td className="py-2 font-medium text-left border-r border-[var(--primary)]">
                                                    Loan No.
                                                </td>
                                                <td className="px-4 py-2">{loanData[0].loanNo}</td>
                                            </tr>
                                            <tr className="border-b border-[var(--primary)]">
                                                <td className="py-2 font-medium text-left border-r border-[var(--primary)]">
                                                    Disbursed Amount
                                                </td>
                                                <td className="px-4 py-2">{loanData[0].disbursalAmount}</td>
                                            </tr>
                                            <tr className="border-b border-[var(--primary)]" >
                                                <td className="py-2 font-medium text-left border-r border-[var(--primary)]">
                                                    Disbursed Date
                                                </td>
                                                <td className="px-4 py-2">{loanData[0].disbursalDate}</td>
                                            </tr>
                                            <tr className="border-b border-[var(--primary)]" >
                                                <td className="py-2 font-medium text-left border-r border-[var(--primary)]">
                                                    Repay Date
                                                </td>
                                                <td className="px-4 py-2">{loanData[0].repayDate}</td>
                                            </tr>
                                      
                                        
                                    
                                </tbody>
                            </table>
                        </div>
                          </>
                                    ) : (<p></p>)}
                    </section>

                    <div className="grid gap-6 sm:gap-10 justify-center">
                        {upiData ? (
                            <>
                                <h4 className="title text-3xl text-center">Please QR Code Scan Now</h4>
                                <img src={`${upiData}`} srcSet={`${upiData} 192w, ${upiData} 192w`} alt="UPI QR Code" />
                <form
                                    action="loan/checkLead.php"
                  method="POST"
                  className="inline-block"
                >
                  <input type="hidden" name="leadID" value={loanData?.[0]?.leadID} />
                  <button
                    type="submit"
                    className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                  >
                    Payment through Net Banking/Card
                  </button>
                </form>
                            </>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </section>
            </Container>
        </section>
    );
};

export default PanCardBanner;

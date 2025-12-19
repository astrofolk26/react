'use client';

import React, { useState } from "react";
import Container from "@/components/layouts/Container";
import Image from "next/image";

const Contactform = () => {
    const [consentGiven, setConsentGiven] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConsentGiven(e.target.checked);
    };
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  try {
      const response = await fetch('https://www.mosaicnbfc.com/api/sendEmail.php', {
      method: 'POST',
      body: formData,
    });

    await response.text(); // or response.json() if JSON
    setResponseMessage("We've received your message and our team will get back to you as soon as possible");
    e.currentTarget.reset();
    setConsentGiven(false); // Reset checkbox state
} catch (error) {
    setResponseMessage('Error sending email.');
    console.error(error);
  }
};


    return (
        <section className="relative padding">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Image
                    src="/assets/images/contactpage/get-in-touch-2.png"
                    alt="Banner"
                    width={1500}
                    height={500}
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
            </div>

            {/* Centered Form + Contact Info */}
            <Container width>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-white">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-2"
                    >
                        <div className="rounded px-5 py-2 w-full bg-[#191a2599] border border-[#7d7d7d99]">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                            />
                        </div>

                        <div className="bg-[#191a2599] border border-[#7d7d7d99] rounded px-5 py-2 w-full">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                required
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                            />
                        </div>

                        <div className="bg-[#191a2599] border border-[#7d7d7d99] rounded px-5 py-2 w-full">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Mobile Number"
                                required
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                            />
                        </div>

                        <div className="bg-[#191a2599] border border-[#7d7d7d99] rounded px-5 py-2 w-full">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject Line"
                                required
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                            />
                        </div>

                        <div className="bg-[#191a2599] border border-[#7d7d7d99] rounded px-5 py-5 w-full">
                            <textarea
                                name="message"
                                placeholder="Write Message"
                                required
                                className="w-full bg-transparent text-white placeholder-white focus:outline-none resize-none"
                                rows={4}
                            />
                        </div>

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={consentGiven}
                                    onChange={handleConsentChange}
                                    className="mr-2"
                                />
                                I agree to the{" "}
                                <a
                                    href="/terms-conditions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Terms & Policy
                                </a>{" "}
                                and{" "}
                                <a
                                    href="/privacy-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Privacy Policy
                                </a>.
                            </label>
                            <br />
                        </div>

                        <div>
                            <input
                                type="submit"
                                disabled={!consentGiven}
                                value="Submit"
                                className={`w-full ${consentGiven
                                        ? "bg-[var(--blue)] cursor-pointer"
                                        : "bg-gray-500 cursor-not-allowed"
                                    } text-white font-semibold py-2 px-4 rounded hover:opacity-90`}
                            />
                        </div>
                        {responseMessage && <p>{responseMessage}</p>}

                    </form>

                    {/* Contact Info */}
                    {/* <div className="flex flex-col justify-center gap-3 px-4 text-white">
                        <p className="text-xl">
                            Customer Care: <span className="text-xl">8527696663</span>
                        </p>
                        <p className="text-sm">
                            <a href="mailto:customercare@sabkaloan.com">
                                customercare@sabkaloan.com
                            </a>
                        </p>
                        <div className="mt-1">
                            <p className="text-sm">Puneet Lakra (Collection Manager)</p>
                            <p className="text-sm"> <a href="mailto:Puneet@sabkaloan.com">Puneet@sabkaloan.com</a>{" "}
                                <span>8448298757</span>
                            </p>
                        </div>
                    </div> */}
                </div>
            </Container>
        </section>
    );
};

export default Contactform;
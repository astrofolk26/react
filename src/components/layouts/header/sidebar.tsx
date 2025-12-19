"use client";

import React, { useState } from "react";
import Link from "next/link";
import navbar from "@/components/assets/data/Navbar.json";
import { IoMdClose } from "react-icons/io";

//icons
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";

export default function Sidebar({
  setSidebar,
}: {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [activeLink, setActiveLink] = useState("null");

  return (
    <section className=" fixed top-0 left-0 w-[100%] h-[100%] z-10000 bg-[#04091e] bg-opacity[/100 border">
      <section className=" w-[100%] h-[100%] mt-0 mr-0 mb-0 ml-auto bg-[var(--light-bg)] ">
        <nav className="  h-full ">
          <section className=" h-1/7 text-4xl text-[var(--primary)] flex justify-end border-b-1  border-b-[var(--title-color)] items-center px-5">
            <IoMdClose onClick={() => setSidebar(false)} />
          </section>
          {navbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => {
                setActiveLink(item.link);
                setSidebar(false); // ✅ Close sidebar on link click
              }}
              className={` p-1 text-lg  flex justify-center  items-center  hover:text-[--white]  text-[var(--white)] ${
                activeLink === item.link
                  ? "bg-[var(--primary)] text-[--white]"
                  : ""
              } border-b-1  border-b-[var(--title-color)] h-1/7 uppercase  `}
            >
              {item.title}
            </Link>
          ))}
          <section className="h-1/7 flex justify-center items-center gap-4   text-2xl text-[var(--primary)]">
            <div>
              <Link href="https://www.facebook.com/sabkaloan2024/">
                <FaFacebookSquare />
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/sabka_loan/?hl=en">
                <AiFillInstagram />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/company/sablka-loan/?viewAsMember=true">
                <FaLinkedin />
              </Link>
            </div>
            <div className="text-4xl text-[var(--primary)]">
              <Link href="https://www.youtube.com/@Sabkaloan/videos">
                <FaYoutube />
              </Link>
            </div>
          </section>
        </nav>
      </section>
    </section>
  );
}

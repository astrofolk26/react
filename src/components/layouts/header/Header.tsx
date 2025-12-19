"use client";

import React, { useEffect, useState } from "react";
//container

//link
import Link from "next/link";
//image
import Image from "next/image";
//icon
import { IoMdMenu } from "react-icons/io";
//json
import navbar from "@/components/assets/data/Navbar.json";
import { useParams } from "next/navigation";
import Sidebar from "./sidebar";

const Header = () => {
  const [activeLink, setActiveLink] = useState("null"); // Set default active link
  const [sidebar, setSidebar] = useState(false);

  const params = useParams();

  useEffect(() => {
    setSidebar(false);
  }, [params]);
  return (
    <section className=" py-3 sticky top-0 z-100 bg-[var(--background)] shadow-2xl">
      <section className="w-[95%] mx-auto ">
        <section className="flex justify-between  items-center ">
          <section className="">
            <Link href="/">
              <Image
                src="/assets/images/security/astrofolkLogo.jpg"
                alt="logo"
                width={100}
                height={80}
                className=""
              />
            </Link>
          </section>
          <section className="flex gap-10 items-center ">
            <nav className=" ul li hidden sm:flex items-center gap-10 ">
              {navbar.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() => setActiveLink(item.link)} // Update active link on click
                  className={`text-[var(--white)]  flex justify-center items-center   ${
                    activeLink === item.link ? " text-[var(--white)]" : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <Link href="/yearly-prediction">
              <div className="px-2 sm:px-4 py-2 sm:py-3 rounded-full text-sm bg-[var(--primary)] sm:btnLink popup-animation ">
                <button className="font-bold"> Yearly Prediction 2026</button>
              </div>
            </Link>

            <section className=" text-[var(--primary)] sm:hidden">
              <button onClick={() => setSidebar(true)} className="text-3xl">
                <IoMdMenu />
              </button>
            </section>
          </section>
        </section>
        {sidebar && <Sidebar setSidebar={setSidebar} />}
      </section>
    </section>
  );
};

export default Header;

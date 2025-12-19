"use client";

import React from "react";
import { BiSupport } from "react-icons/bi";
import { IoNewspaper } from "react-icons/io5";
import Link from "next/link";
import {
  RiAccountCircleLine,
  RiGitRepositoryPrivateLine,
  RiLogoutCircleRFill,
} from "react-icons/ri";
import { RxDashboard, RxTimer } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const menuItems = [
  { title: "Dashboard", icon: <RxDashboard />, href: "/dashboard" },
  { title: "Loan History", icon: <RxTimer />, href: "/loan-history" },
  { title: "Support", icon: <BiSupport />, href: "/support" },
  {
    title: "Terms and Conditions",
    icon: <IoNewspaper />,
    href: "/term-and-conditions",
  },
  {
    title: "Privacy Policy",
    icon: <RiGitRepositoryPrivateLine />,
    href: "privacy-policy",
  },
  // { title: "Logout", icon: <RiLogoutCircleRFill />, href: "logout" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("/dashboard");
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("customerId");
    router.replace("/");
  };
  return (
    <div className="h-screen min-w-64 bg-[var(--blue)] overflow-auto text-white flex flex-col">
      <div className="p-10 py-8 text-2xl font-bold">
        <Image
          src="/assets/images/homepage/sabkaloan-logo.png"
          width={120}
          height={120}
          alt="Logo"
          className="mx-auto"
        />
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            href="#"
            onClick={() => setActiveItem(item.href)}
            key={item.title}
            className={`text-left px-4 py-2 rounded-full flex gap-5 items-center ${
              activeItem === item.href ? "bg-green-600" : "hover:bg-green-600"
            }`}
          >
            <span>{item.icon}</span>
            {item.title}
          </Link>
        ))}
        <button
          // onClick={() => setActiveItem(item.href)}
          onClick={handleLogout}
          className={`text-left px-4 py-2 w-full rounded-full flex gap-5 items-center ${"hover:bg-green-600"}`}
        >
          <span>
            <RiLogoutCircleRFill />
          </span>
          Logout
        </button>
      </nav>

      <div className="p-4">
        <button className="w-full px-2 bg-green-500 text-white py-2 rounded-full hover:bg-green-600 flex gap-5 items-center">
          <span>
            <RiAccountCircleLine />
          </span>
          My Account
        </button>
      </div>
    </div>
  );
}

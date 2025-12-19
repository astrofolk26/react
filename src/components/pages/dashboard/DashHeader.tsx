"use client";
import { GlobalContext } from "@/utils/context/Provider";
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function DashHeader() {
  const { customer } = useContext(GlobalContext);
  return (
    <div className="bg-[var(--blue)] text-white flex justify-end items-center px-8 py-4 ">
      <details className="relative">
        <summary className="list-none cursor-pointer">
          <FaUserCircle size={40} />
        </summary>

        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow p-2">
          <p className="text-sm text-black mb-2 !capitalize">
            {customer?.name || ""}
          </p>
          <p className="text-sm text-black mb-2 !capitalize">
            {customer?.email || ""}
          </p>
          {/* <Link
            href="#"
            className="w-full text-left text-sm hover:bg-gray-100 p-1 rounded flex gap-5"
          >
            <span>
              {" "}
              <FaUserCircle size={28} />
            </span>{" "}
            Profile
          </Link> */}
        </div>
      </details>
    </div>
  );
}

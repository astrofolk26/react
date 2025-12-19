import React from "react";
import Image from "next/image";

const Location = () => {
  return (
    <section className="bg-[#0b0d1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-start">

        <div className="w-full md:w-1/2">
          <div className="w-full h-80 rounded-lg overflow-hidden">

            <Image
              src="https://placehold.jp/592x312.png"
              alt="Office Location Map"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Offices</h2>

          <div className="text-sm leading-relaxed space-y-6">
            <div>
              <p className="font-medium">Head Office:First Floor Plot No:-17,</p>

              <p>Pocket-8, Block-C, Sector-17, Dwarka</p>
              <p>New Delhi-110075</p>
            </div>

            <hr className="border border-[#7de47d3a] w-64" />

            <div>
              <p className="font-medium">Registered Address:Kahjuria Complex</p>

              <p>Ward No 15 Kathua</p>
              <p>Jammu & Kashmir-184102</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

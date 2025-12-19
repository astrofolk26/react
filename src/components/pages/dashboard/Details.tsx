import React from "react";

export default function Details() {
  const steps = [
    {
      title: "PAN Authentication",
      description:
        "Please enter your PAN Card number your identity is secure with us.",
      icon: "/assets/icons/pan.png",
    },
    {
      title: "Personal information",
      description: "Share with us a bit about yourself",
      icon: "/assets/icons/personal.png",
    },
    {
      title: "Current Residence address",
      description:
        "Ensure to provide correct residence address. No surprise visit we promise",
      icon: "/assets/icons/address.png",
    },
    {
      title: "Income Details",
      description: "Share your income details",
      icon: "/assets/icons/income.png",
    },
    {
      title: "Selfie Upload",
      description: "Share your selfie and complete the registration",
      icon: "/assets/icons/selfie.png",
    },
  ];

  return (
    <div className="flex-1 px-8 py-10  text-white overflow-y-auto h-[100%]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Profile Registration
          </h2>

          <div className="flex-1 mx-4">
            <div className="w-full bg-[#29425c] rounded-full h-2 relative overflow-hidden">
              <div className="h-full w-full bg-[repeating-linear-gradient(45deg,#22c55e,#22c55e_10px,#15803d_10px,#15803d_20px)] rounded-full" />
            </div>
          </div>

          <button className="bg-[#0f2a4b] hover:bg-[#1c3d69] text-white text-sm px-4 py-1.5 rounded-full">
            Check Eligibility
          </button>
        </div>

        <div className="w-full -ml-2 pr-2 bg-[#213c5a] text-[#a2b4cd] text-sm p-3 rounded-md mb-6 text-center">
          Register now to explore tailored services just for you. Once
          registered registered our loan services will be available to meet your
          financial needs.
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex items-center justify-between bg-[#1e293b] hover:bg-[#2a3c53] p-4 rounded-xl transition duration-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h6 className="font-semibold text-[#3399FF]">{step.title}</h6>
                  <p className="text-sm text-[#b0c4d8]">{step.description}</p>
                </div>
              </div>
              <span className="text-white text-2xl">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

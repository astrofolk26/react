import React, { Suspense } from 'react';
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import About from "@/components/pages/homepage/About";
import Banner from "@/components/pages/homepage/Banner";
import Eligibility from "@/components/pages/homepage/Eligibility";
import Faq from "@/components/pages/homepage/Faq";
import Offer from "@/components/pages/homepage/Offer";
import Security from "@/components/pages/homepage/Security";
import Steps from "@/components/pages/homepage/Steps";
import Models from "@/components/pages/homepage/Models";
import Testimonials from "@/components/pages/homepage/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>

        <Suspense fallback={<div>Loading...</div>}>
          <Banner />
        </Suspense>
        <About />
        <Offer />
       
        <Models/>
        <Steps />
        <Testimonials />
        <Security />
        {/* <Faq /> <Eligibility /> */}
      </main>
      <Footer />
    </>
  );
}

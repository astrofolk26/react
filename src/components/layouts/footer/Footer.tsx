import React from "react";
//container
import Container from "../Container";
//image
import Image from "next/image";
//link
import Link from "next/link";
//icon
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";

import { MdOutlineCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import GoogleTranslate from "@/components/ui/GoogleTranslate";

const Footer = () => {
  return (
    <section className=" text-[var(--background)]" id="contact-us">
      <Container width>
        <section className="sm:grid grid-cols-[22%_20%_20%_23%]  justify-between ">
          {/* <section>
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={100}
                height={80}
                className=""
              />
              {/* <p className="text-[var(--primary)] mb-5 mt-2 font-bold">
                (A Unit of Go Vigyan Anusandhan Kendra)
              </p> */}
           
              
                {/* <p className="">
                  <span className="text-[var(--white)]">
                    Registered Address:-{" "}
                  </span>
                  
                </p> }
            
            </Link>
          </section> */}
             <section className="mt-5 sm:mt-15">
            <h2 className="subTitle text-[var(--primary)]">Live Links</h2>
            <ul className="ul li">
              <li><Link href="/rahu-ketu-transit">Rahu Ketu Transit Report</Link></li>
              <li><Link href="/health-report">Health Report</Link></li>
              <li><Link href="/yearly-prediction">Yearly Prediction</Link></li>
              <li><Link href="/life-prediction-report">Life Prediction Report</Link></li>
              <li><Link href="/live-astro-counselling">Live Counselling</Link></li>
              <li><Link href="/jupiter-transit-report">Jupiter Transit</Link></li>
              <li><Link href="/birth-time-rectification">Birth Time Rectification</Link></li>
              <li><Link href="/askastrologer-question">Ask A Questsion</Link></li>
             <li><Link href="/child-birth-prediction"> Child Birth Prediction</Link> </li> 
             <li><Link href="/multiple-concerns-report">Multiple Concerns Report</Link></li>
              <li><Link href="/education-astrology">Education Forecost</Link></li>
             <li><Link href="/life-love-prediction"> Life Together Prediction</Link> </li>  
             <li><Link href="/life-growth-prediction"> Growth Prediction</Link> </li>  
            </ul>
          </section>
          <section className="mt-5 sm:mt-15">
            <h2 className="subTitle text-[var(--primary)]">Remedies Links</h2>
            <ul className="ul li">
              <li><Link href="/yantras-remedies">Yantra's Remedies</Link></li>
              <li><Link href="/natural-remedies">Natural Remedies</Link></li>
              <li><Link href="/vedic-ceremonies">Vedic Ceremonies </Link></li>
              <li><Link href="/kavach-remedies">Kavach Remedies </Link></li>
              <li><Link href="/yagna-remedies">Yagna Remedies</Link></li>
              <li><Link href="/rudrabhishekpooja">Rudrabhishekam Remedies</Link></li>
              <li><Link href="/pooja-remedies">Pooja Remedies</Link></li>
              <li><Link href="/mantra-remedies">Mantra Remedies</Link></li>
              <li><Link href="/meditation-remedies">Meditation Remedies</Link></li>
              <li><Link href="/yoga-remedies">Yoga Remedies</Link></li>
              <li><Link href="/mudra-remedies">Mudra Remedies</Link></li>
              <li><Link href="/tantra-remedies">Tantra Remedies</Link></li>
                       <li><Link href="/aghor-remedies">Aghor Remedies</Link></li>
            </ul>
          </section>
          <section className="mt-5 sm:mt-15">
            <h2 className="subTitle text-[var(--primary)]">Quick Links</h2>
<ul className="ul li">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/nakshatra-calculator">Nakshatra Calculator</Link></li>
              <li><Link href="/nakshatra-prediction">Nakshatra Prediction</Link></li>
              <li><Link href="/vastu">Vastu Consultation</Link></li>
              <li><Link href="/vastu-tips">Vastu Tips</Link></li>
              <li><Link href="/child-astrology">Child Astrology</Link></li>
              <li><Link href="/teen-astrology">Teen Astrology</Link></li>
              <li><Link href="/numerology">Numerology</Link></li>
              <li><Link href="/horoscope-birthchart">Free Birth Chart</Link></li>
              <li><Link href="/daily-horoscope">Daily Horoscope</Link></li>
              <li><Link href="/weekly-horoscope">Weekly Horoscope</Link></li>
              <li><Link href="/monthly-horoscope">Monthly Horoscope</Link></li>
              <li><Link href="/yearly-horoscope">Yearly Horoscope</Link></li>
            </ul>
            
            <div className="flex items-cente gap-2">
              <CiMail className="text-2xl" />
              <a href="mailto:info@sabkaloan.com" className="wrap-anywhere">info@xyz.com</a>
            </div>
          </section>
          <section className="mt-5 sm:mt-15">
            <h2 className="subTitle text-[var(--primary)]">Follow Us</h2>

            <section className="  flex flex-col ">
              <div className=" flex gap-5 mb-5">
                <div className="text-4xl text-[var(--primary)]">
                  <Link href="https://www.facebook.com/#/"
                    target="_blank">
                    <FaFacebookSquare />
                  </Link>
                </div>
                <div className="text-4xl text-[var(--primary)]">
                  <Link href="https://www.instagram.com/#/?hl=en"
                    target="_blank">
                    <AiFillInstagram />
                  </Link>
                </div>
                <div className="text-4xl text-[var(--primary)]">
                  <Link href="https://www.linkedin.com/company/#/?viewAsMember=true"
                    target="_blank">
                    <FaLinkedin />
                  </Link>
                </div>
                <div className="text-4xl text-[var(--primary)]">
                  <Link href="https://www.youtube.com/@#/videos"
                    target="_blank">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
              <div className="">
                <p className="mb-3 ">
                  <span className="text-[var(--white)]"> Head Office: </span>
                  611, Deepshikha Appartment, Transport Nagar, Lucknow, Uttar Pradesh, India -226012
               
                </p>  </div>
                <div className="flex items-center gap-2 mb-2">
              <MdOutlineCall className="text-2xl" />
              <a href="tel:8527696663">+91 8076953168</a>
            </div>

            </section>
          </section>
        </section>
        <section className="flex flex-col sm:flex-row justify-between items-center bold py-4">
          <p>     <Link href={`/terms-conditions`}>Terms & Conditions</Link>  |{"  "}
              <Link href={`/privacy-policy`}>Privacy Policy</Link>  |{"  "}
              <Link href={`/contact-us`}>Contact us</Link>  |{"  "}<Link href={`/refund-cancellation-policy`}>Refund Cancellation Policy</Link>  |
       
</p>
          <div className="text-[var(--white)] flex flex-col md:flex-row items-center gap-2">  
                  <p> <Link href={`/astro-advertisement`}>Astro Advertisement</Link>  |{"  "}
              <Link href={`/disclaimers`}>Disclaimers</Link>  |        </p>
             <GoogleTranslate />
          </div>
          
        </section>
        
      </Container>
    <section className="bg-[var(--primary)] flex flex-col items-center justify-center">
     <div className="text-[var(--background)] gap-2">             
            Copyright @ 2025 astrofolk.com  - All Rights Reserved</div>
        {/*   <Link className="" href="/privacy-policy">

        </Link>

        <p className="text-center text-black text-s">
          <a
            href="/assets/pdf/privacy-and-data-storage-policy.pdf"
            target="_blank"
          >
            Privacy and Storage Policy
          </a>
          <span className="text-xl"><strong> | </strong></span>
          <a href="/assets/pdf/interest-rate-policy.pdf" target="_blank">
            Interest Rate Policy
          </a>
          <span className="text-xl">
            <strong> | </strong>
          </span>
          <a href="assets/pdf/grp-policy.pdf" target="_blank">
            GRP Policy
          </a>
          <span className="text-xl">
            <strong> | </strong>
          </span>
          <a href="/assets/pdf/data-deletion-policy.pdf" target="_blank">
            Data Deletion Policy
          </a>
          <span className="text-xl">
            <strong> | </strong>
          </span>
          <a href="/assets/pdf/kyc-policy.pdf" target="_blank">
            KYC policy
          </a>
          <span className="text-xl">
            <strong> | </strong>
          </span>
          <a href="/assets/pdf/fair-practice-code.pdf" target="_blank">
            Fair Practice Code
          </a>
        </p>*/}
      </section> 
    </section>
  );
};

export default Footer;

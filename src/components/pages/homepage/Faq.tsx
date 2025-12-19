"use client";
//container
import Container from "@/components/layouts/Container";
import React, { useState } from "react";
//icons
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const faqData = [
  {
    question:
      "Can I get a personal loan with a low credit score from Sabka Loan?",
    answer: `Yes, you may still be eligible for a personal loan even with a low credit score. However, the loan amount and structure may be affected. Sabka Loan considers various factors apart from the credit score to evaluate loan applications.
`,
  },
  {
    question: "What is a loan top-up and how can I avail it from Sabka Loan?",
    answer: `A loan top-up is an additional loan amount given to a borrower who has an existing loan. Sabka Loan offers loan top-ups to eligible borrowers who have made regular repayments on their current loan.
`,
  },
  {
    question: "How long does it take to get a loan from Sabka Loan?",
    answer: `Once all the necessary documents are submitted and eligibility is established, the loan amount can be disbursed within  minutes.
`,
  },

  {
    question: "How do I apply for the reloan?",
    answer: `Login → Fill in employee and salary details → Provide address → Add two references → Our agent will then contact you.
`,
  },
  {
    question: "Where can I contact support or get help?",
    answer: ` Contact customer care via phone, email, or chat support. Working hours: 10:00 AM to 6:30 PM (Monday to Saturday)
`,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="padding">
      <Container width>
        <h2 className="title text-center">FAQ’s</h2>
        <section className="sm:py-10">
          {faqData.map((faq, index) => (
            <section key={index} className="border-b border-[var(--gray)] py-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="subTitle font-normal">{faq.question}</h3>
                <div className="text-4xl text-[var(--primary)]">
                  {openIndex === index ? (
                    <IoMdArrowDropup />
                  ) : (
                    <IoMdArrowDropdown />
                  )}
                </div>
              </div>
              {openIndex === index && (
                <div className="mt-4 text-[var(--card-para)] text-base leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              )}
            </section>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Faq;

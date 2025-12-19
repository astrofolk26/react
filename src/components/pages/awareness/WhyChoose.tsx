import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <section className=" border-b border-[var(--gray)]">
      <div>
        <Image
          src="https://placehold.jp/1500x400.png"
          alt="logo"
          width={1500}
          height={400}
          className=""
        />
      </div>

      <section className="grid grid-cold-1 sm:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="https://placehold.jp/600x400.png"
            alt="logo"
            width={600}
            height={400}
            className=""
          />
        </div>
        <div>
          <h2 className="title px-3">
            <span>Why</span> Choose Us
          </h2>
          <p className="px-3">
            Sabka Loan is a well-established player in the personal finance
            services sector, catering to the immediate financial requirements of
            salaried professionals in India. With years of experience under our
            belt, we have earned a reputation for providing quality financial
            services that are transparent, quick and hassle-free. Our loan
            approval mechanisms are among the fastest and most accurate in the
            industry, and our completely online and paperless processes require
            minimal documentation. Our team of skilled professionals is
            committed to delivering personalized and courteous service to each
            and every customer. Furthermore, our loan repayment options are
            designed to be flexible and affordable, ensuring that our customers
            can repay their loans without undue financial stress.
          </p>
        </div>
      </section>
    </section>
  );
};

export default WhyChoose;

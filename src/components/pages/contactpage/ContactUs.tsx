import Container from "@/components/layouts/Container";
import React from "react";

const ContactUs = () => {
  return (
    <section className="padding">
      <Container width>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 items-center">
            <h1 className="title layoutPadding">
              <span>Contact </span> Us 
            </h1>
            <p className="text-justify">
              We value your trust and are here to assist you with any questions, concerns, or feedback regarding Astrofolk and our services.<br/>
- 📧 Email Support: support@astrofolk.com<br/>
- 🌐 Website: www.astrofolk.com<br/>
- 📞 Phone: +91-8076953168 (India support line)<br/>
- 🏢 Mailing Address: Astrofolk Services, 611, Deepsheekha Appartment, Transport Nagar, Lucknow, Uttar Pradesh-226012, India<br/>

Customer Support - 24*7


            </p>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default ContactUs;

import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "astrofolk.com",
  description: "free vedic astrology report 2026, Free horoscopes, online astrology, personalized reports from cyberastro, Vedic Astrolory, Astrology online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1410855646879741');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Meta Pixel NoScript Fallback */}
        {/* Use dangerouslySetInnerHTML to support the <noscript> tag correctly */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=1410855646879741&ev=PageView&noscript=1"/>
            `,
          }}
        />

        {/* Google Tag (gtag.js) */}
        
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

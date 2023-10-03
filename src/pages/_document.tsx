import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-900">
        <Main />
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <NextScript />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5BN5SCRK8N"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {
            // @ts-ignore
            dataLayer.push(arguments)
          }
          gtag('js', new Date()); gtag('config', 'G-5BN5SCRK8N');
        </script>
        <script src="silder.js"></script>
        <script src="mouse.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </Html>
  );
}

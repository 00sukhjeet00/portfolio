import Head from "next/head";
import React from "react";

export function MetaTag() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sukhjeet Singh - Frontend Engineer Portfolio</title>
      <link rel="icon" href="/logo.png" />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <meta
        name="description"
        content="Passionate Frontend Engineer | Crafting Seamless User Experiences with React/Next Js and React Native"
      />
      <meta
        name="keywords"
        content="frontend engineer, web development, HTML, CSS, JavaScript, portfolio, solution engineer,Next Js, React Js, React Native"
      />
      <meta name="author" content="Sukhjeet Singh" />
      <meta name="robots" content="index, follow" />
      <meta
        name="og:title"
        content="Sukhjeet Singh - Frontend Engineer Portfolio"
      />
      <meta
        name="og:description"
        content="Explore the portfolio of Sukhjeet Singh, a frontend engineer specializing in web development and react native."
      />
      <meta name="og:image" content="/logo.png" />
      <meta name="og:url" content="https://sukhjeet.netlify.app/" />
      <meta name="og:site_name" content="Sukhjeet's Portfolio" />

      <meta property="og:title" content="Sukhjeet Singh - Frontend Engineer" />
      <meta
        property="og:description"
        content="Passionate Frontend Engineer | Crafting Seamless User Experiences with React/Next Js and React Native"
      />
      <meta
        property="og:image"
        content="https://media.licdn.com/dms/image/D5603AQEUj2iB6nNcCA/profile-displayphoto-shrink_200_200/0/1669184878752?e=1701907200&v=beta&t=LyCWdKzkfTlviykmF3XyifhtFX-9MEbO2KdxkpT4pTg"
      />
      <meta
        property="og:url"
        content="https://www.linkedin.com/in/00sukhjeet00/"
      />
      <meta property="og:site_name" content="Linkedin" />
    </Head>
  );
}

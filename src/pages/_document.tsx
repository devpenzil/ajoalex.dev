import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Ajo Alex" />
        <meta
          name="description"
          content="Hello, I'm Ajo — a mobile app engineer, entrepreneur. I'm deeply passionate about AI, open source, internet startups, SaaS, developer tools, and crafting seamless user experiences. "
        />
        <meta name="keywords" content="Mobile App Engineer, " />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="Ajo Alex" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="337bdc0b-7854-49e9-bea4-0cd7c1a162a3"
        ></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import Head from "next/head";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Tambouren Rädäpläm Kriens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-8xl mx-auto">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

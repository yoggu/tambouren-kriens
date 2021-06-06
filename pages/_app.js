import Head from "next/head";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>Tambouren Rädäpläm Kriens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen max-w-8xl mx-auto flex flex-col">
        <Navigation />
        <div className="w-full px-5 mx-auto">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;

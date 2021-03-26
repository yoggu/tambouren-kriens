import Head from "next/head";
import { useEffect } from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2"></div>
  );
};

export default Home;

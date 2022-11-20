import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className="flex relative max-w-8xl mx-auto w-full">
      <div className="p-5 absolute">
        <Link href="/">
          <img src="/img/logo.png" />
        </Link>
      </div>
      <ul className="flex justify-center items-center space-x-8 p-5 mx-auto h-[100px]">
        <li>
          <Link
            href="/"
            className={router.pathname == "/" ? "text-green-600" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={router.pathname == "/about" ? "text-green-600" : ""}
          >
            Über uns
          </Link>
        </li>
        <li>
          <Link
            href="/education"
            className={router.pathname == "/education" ? "text-green-600" : ""}
          >
            Ausbildung
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={
              router.pathname.startsWith("/posts") ? "text-green-600" : ""
            }
          >
            Beiträge
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

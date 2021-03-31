import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="flex relative">
      <div className="p-5 absolute">
        <Link href="/">
          <a>
            <img src="/img/logo.png" />
          </a>
        </Link>
      </div>
      <ul className="flex justify-center items-center space-x-8 p-5 mx-auto h-[100px]">
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? "text-green-600" : ""}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "text-green-600" : ""}>
              Über uns
            </a>
          </Link>
        </li>
        <li>
          <Link href="/education">
            <a
              className={
                router.pathname == "/education" ? "text-green-600" : ""
              }
            >
              Ausbildung
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a
              className={
                router.pathname.startsWith("/posts") ? "text-green-600" : ""
              }
            >
              Beiträge
            </a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a
              className={
                router.pathname.startsWith("/events") ? "text-green-600" : ""
              }
            >
              Events
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={router.pathname == "/contact" ? "text-green-600" : ""}
            >
              Kontakt
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

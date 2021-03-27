import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex">
      <div>
        <Link href="/">
          <a>
            <img src="img/logo.png" />
          </a>
        </Link>
      </div>
      <ul className="flex justify-center items-center space-x-8 mx-auto">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Über uns</a>
          </Link>
        </li>
        <li>
          <Link href="/education">
            <a>Ausbildung</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Beiträge</a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a>Events</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Kontakt</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

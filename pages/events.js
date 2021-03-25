import React from "react";
import fs from "fs";
import Link from "next/link";

const Events = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        return (
          <div key={event}>
            <Link href={`/events/${event}`}>
              <a>{event}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/events");

  return {
    props: {
      events: files.map((event) => event.replace(".md", "")),
    },
  };
};

export default Events;

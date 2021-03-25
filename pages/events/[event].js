import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Event = ({ data, content }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("content/events");
  console.log(files);
  const paths = files.map((filename) => ({
    params: {
      event: filename.replace(".md", ""),
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { event } }) => {
  const mdWithMetadata = fs.readFileSync(
    path.join("content", "events", `${event}.md`),
    "utf-8"
  );

  const mdParsed = matter(mdWithMetadata);
  const htmlString = marked(mdParsed.content);
  return {
    props: {
      data: mdParsed.data,
      content: htmlString,
    },
  };
};

export default Event;

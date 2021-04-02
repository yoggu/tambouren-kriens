import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Post = ({ data, content }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="prose mx-auto">
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <div className="w-full max-h-[500px] relative">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("content/posts");
  console.log(files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const mdWithMetadata = fs.readFileSync(
    path.join("content", "posts", `${slug}.md`),
    "utf-8"
  );
  const mdParsed = matter(mdWithMetadata);
  const htmlString = marked(mdParsed.content);

  mdParsed.data.date = mdParsed.data.date.toString();
  console.log(mdParsed);
  return {
    props: {
      data: mdParsed.data,
      content: htmlString,
    },
  };
};

export default Post;

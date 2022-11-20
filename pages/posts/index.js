import React from "react";
import fs from "fs";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import { marked, options } from "marked";

const Posts = ({ posts }) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <div className="flex flex-wrap -mx-4 w-full box-border">
        {posts.map((post) => (
          <div
            key={post.data.title}
            className="shadow hover:shadow-lg m-4 transition duration-300 ease-in-out transform hover:-translate-y-1 rounded w-[336px]"
          >
            <Link href={"/" + post.link}>
              <a className="block w-full h-full">
                <img
                  src={post.data.thumbnail}
                  className="h-[225px] w-full object-cover"
                />
                <div className="p-4 pb-16">
                  <h2 className="font-semibold text-xl">{post.data.title}</h2>
                  <p className="text-gray-500">
                    {new Date(post.data.date).toLocaleDateString(
                      "de-DE",
                      dateOptions
                    )}
                  </p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/posts");

  const posts = files.map((post) => {
    const mdPostContent = fs.readFileSync(
      path.join("content", "posts", post),
      "utf-8"
    );

    const mdParsed = matter(mdPostContent);

    mdParsed.data.date = mdParsed.data.date.toString();
    return {
      content: marked(mdParsed.content),
      data: mdParsed.data,
      link: "posts/" + post.replace(".md", ""),
    };
  });

  posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return {
    props: {
      posts,
    },
  };
};

export default Posts;

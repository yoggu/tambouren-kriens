import React from "react";
import fs from "fs";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post}>
            <Link href={`/posts/${post}`}>
              <a>{post}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/posts");

  return {
    props: {
      posts: files.map((post) => post.replace(".md", "")),
    },
  };
};

export default Posts;

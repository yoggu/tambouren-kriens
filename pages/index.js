import { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

const Home = ({ entries }) => {
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
    <div>
      {entries.map((entry) => (
        <div key={entry.data.title}>{entry.data.date}</div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = fs.readdirSync("content/posts");
  const news = fs.readdirSync("content/news");

  const entries = posts.map((post) => {
    const mdPostContent = fs.readFileSync(
      path.join("content", "posts", post),
      "utf-8"
    );

    const mdParsed = matter(mdPostContent);

    mdParsed.data.date = mdParsed.data.date.toString();
    return {
      content: marked(mdParsed.content),
      data: mdParsed.data,
    };
  });

  entries.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return {
    props: {
      entries,
    },
  };
};

export default Home;

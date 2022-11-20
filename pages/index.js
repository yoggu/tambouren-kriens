import { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked, options } from "marked";
import Link from "next/link";

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

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <div>
        <img className="max-h-[800px]" src="/img/front.jpg" />
      </div>
      <div className="flex flex-wrap -mx-4 mt-32 w-full box-border">
        {entries.slice(0, 4).map((entry) => (
          <div
            key={entry.data.title}
            className="shadow hover:shadow-lg m-4 transition duration-300 ease-in-out transform hover:-translate-y-1 rounded w-[336px]"
          >
            <Link href={"/" + entry.link} className="block w-full h-full">
              <img
                src={entry.data.thumbnail}
                className="h-[225px] w-full object-cover"
              />
              <div className="p-4 pb-16">
                <h2 className="font-semibold text-xl">{entry.data.title}</h2>
                <p className="text-gray-500">
                  {new Date(entry.data.date).toLocaleDateString(
                    "de-DE",
                    dateOptions
                  )}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
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
      link: "posts/" + post.replace(".md", ""),
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

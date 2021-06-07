import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="bg-gray-100 mt-20">
        <div className=" h-[200px] max-w-8xl w-full mx-auto p-5 flex flex-col">
          <div className="flex flex-col items-center">
            <h3 className="mt-3 text-3xl">Kontakt</h3>
            <a className="mt-3" href="mailto:tambouren-kriens@hotmail.com">
              tambouren-kriens@hotmail.com
            </a>
          </div>
          <div className="flex mt-auto justify-between">
            <div className="flex gap-2">
              <a href="https://www.facebook.com/R%C3%A4d%C3%A4pl%C3%A4m-318380158294793/">
                <img className="h-6" src="/img/facebook.png" />
              </a>
              <a href="https://www.youtube.com/user/Drumboy1919">
                <img className="h-6" src="/img/youtube.png" />
              </a>
            </div>
            <p>© Tambouren Rädäpläm Kriens 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

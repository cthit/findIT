import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/elements/Header";
import LightBox from "../components/elements/LightBox";
import { Category } from "../data/category";
import data from "../data/service.json";

const switchMode = (darkMode: boolean) => {
  const docStyle = document.documentElement.style;
  console.log("Wow");
  if (darkMode) {
    docStyle.setProperty("--highlight1", "#de3c4b");
    docStyle.setProperty("--highlight2", "#2191fb");
    docStyle.setProperty("--highlight1-hover", "#ff8c89");
    docStyle.setProperty("--highlight2-hover", "#0171db");
    docStyle.setProperty("--background", "#2b303a");
    docStyle.setProperty("--site-background", "#111317");
    docStyle.setProperty("--text", "#ffffff");
  } else {
    docStyle.setProperty("--highlight1", "#ff5e5b");
    docStyle.setProperty("--highlight2", "#a1f1fb");
    docStyle.setProperty("--highlight1-hover", "#ff8c89");
    docStyle.setProperty("--highlight2-hover", "#81e1eb");
    docStyle.setProperty("--background", "#004e98");
    docStyle.setProperty("--site-background", "#fffcf2");
    docStyle.setProperty("--text", "#ffffff");
  }
};

const checkClientMode = () => {
  if (typeof window !== "undefined") {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      return true;
  }
  return false;
};

const Home: NextPage = () => {
  const categories: Category[] = data;
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(checkClientMode());
  useEffect(() => {
    switchMode(darkMode);
  });

  return (
    <>
      <Head>
        <title>FindIT</title>
        <meta
          name="description"
          content="Site for finding different online services for the IT-division at Chalmers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={darkMode ? "darkMode" : "lightMode"}>
        <Header
          categories={categories}
          show={show}
          setShow={setShow}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <LightBox categories={categories} show={show} setShow={setShow} />
      </main>
    </>
  );
};

export default Home;

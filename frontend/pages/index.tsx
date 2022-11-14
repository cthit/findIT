import { useEffect, useState } from "react";

import { DarkMode } from "@mui/icons-material";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/elements/Header";
import LightBox from "../components/elements/LightBox";
import { Category } from "../data/category";
import data from "../data/service.json";

import styles from "./index.module.scss";

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
    docStyle.setProperty("--highlight2", "#00a6a6");
    docStyle.setProperty("--highlight1-hover", "#ff8c89");
    docStyle.setProperty("--highlight2-hover", "#00d9d9");
    docStyle.setProperty("--background", "#004e98");
    docStyle.setProperty("--site-background", "#fffcf2");
    docStyle.setProperty("--text", "#ffffff");
  }
};

const Home: NextPage = () => {
  const categories: Category[] = data;
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

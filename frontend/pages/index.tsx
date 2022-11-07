import { useState } from "react";

import { DarkMode } from "@mui/icons-material";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/elements/Header";
import LightBox from "../components/elements/LightBox";
import { Category } from "../data/category";
import data from "../data/service.json";

import styles from "./index.module.scss";

const Home: NextPage = () => {
  const categories: Category[] = data;
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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
        <LightBox
          categories={categories}
          show={show}
          setShow={setShow}
          darkMode={darkMode}
        />
      </main>
    </>
  );
};

export default Home;

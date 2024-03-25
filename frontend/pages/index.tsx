import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import CategoryList from "../components/elements/Categorylist";
import Header from "../components/elements/Header";
import { Category } from "../data/category";
import data from "../data/service.json";

const switchMode = (darkMode: boolean) => {
  const doc = document.documentElement;
  if(darkMode) doc.classList.remove("Alternate-Theme");
  else doc.classList.add("Alternate-Theme");
};

const checkClientMode = () => {
  if (typeof window !== "undefined") {
    if (window.matchMedia?.("(prefers-color-scheme: light)").matches)
      return false;
  }
  return true;
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

      <div className={darkMode ? "darkMode" : "lightMode"}>
        <Header
          categories={categories}
          show={show}
          setShow={setShow}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main>
          {categories.map((service: Category) => (
            <CategoryList categories={service} key={service.category} />
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;

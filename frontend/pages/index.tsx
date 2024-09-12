import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import CategoryList from "../components/elements/Categorylist";
import Header from "../components/elements/Header";
import { Category } from "../data/category";
import data from "../data/service.json";

const Home: NextPage = () => {
  const categories: Category[] = data;
  const [show, setShow] = useState(false);
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

      <div className="backgroundcolor">
        <Header categories={categories} show={show} setShow={setShow} />
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

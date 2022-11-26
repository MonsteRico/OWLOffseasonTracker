import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import TeamLogo from "./TeamLogo";

import { trpc } from "../utils/trpc";
import { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>OWL Offseason Tracker</title>
        <meta name="description" content="Overwatch League Offseason Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="bg" className="flex h-full w-full flex-col overflow-hidden">
        <div
          style={{ height: "20vh" }}
          className="flex flex-col items-center justify-between bg-slate-800"
        >
          <h1 className="py-5 md:text-2xl lg:text-4xl xl:text-6xl">
            OWL Offseason Tracker
          </h1>
          <div className="flex w-full flex-row items-center justify-evenly pb-10">
            <a href="https://github.com/MonsteRico/OWLOffseasonTracker">
              GitHub
            </a>
            <a href="https://airtable.com/shrZ90oXQG1oaKdKV/tblTBdJ3mEboYEezE">
              Airtable
            </a>
          </div>
        </div>
        <div
          id="team-container"
          style={{
            height: "calc(100vh - 20vh)",
          }}
          className="grid w-full grid-cols-4 grid-rows-5 gap-0 md:grid-cols-10 md:grid-rows-2"
        >
          <TeamLogo team="GZC" />
          <TeamLogo team="CHD" />
          <TeamLogo team="TOR" />
          <TeamLogo team="DAL" />
          <TeamLogo team="FLM" />
          <TeamLogo team="BOS" />
          <TeamLogo team="LAG" />
          <TeamLogo team="LAV" />
          <TeamLogo team="HZS" />
          <TeamLogo team="SHD" />
          <TeamLogo team="HOU" />
          <TeamLogo team="WAS" />
          <TeamLogo team="LDN" />
          <TeamLogo team="NYX" />
          <TeamLogo team="PHI" />
          <TeamLogo team="PAR" />
          <TeamLogo team="SFS" />
          <TeamLogo team="SEO" />
          <TeamLogo team="ATL" />
          <TeamLogo team="VAN" />
        </div>
      </main>
    </>
  );
};

export default Home;

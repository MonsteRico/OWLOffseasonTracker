import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import autoAnimate from "@formkit/auto-animate";

import boston from "../logos/boston.png";
import charge from "../logos/charge.png";
import chengdu from "../logos/chengdu.png";
import dallas from "../logos/dallas.png";
import defiant from "../logos/defiant.png";
import dragons from "../logos/dragons.png";
import eternal from "../logos/eternal.png";
import florida from "../logos/floridaPLACEHOLDER.png";
import fusion from "../logos/fusion.png";
import gladiators from "../logos/gladiators.png";
import houston from "../logos/houston.png";
import justice from "../logos/justice.png";
import london from "../logos/london.png";
import nyxl from "../logos/nyxl.png";
import reign from "../logos/reign.png";
import seoul from "../logos/seoul.png";
import shock from "../logos/shockPLACEHOLDER.png";
import spark from "../logos/spark.png";
import titans from "../logos/titans.png";
import valiant from "../logos/valiantPLACEHOLDER.png";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  let activeTeam = "none";

  function removeTeamBGClasses() {
    document.getElementById("bg")?.classList.remove("bostonBG");
    document.getElementById("bg")?.classList.remove("chargeBG");
    document.getElementById("bg")?.classList.remove("chengduBG");
    document.getElementById("bg")?.classList.remove("dallasBG");
    document.getElementById("bg")?.classList.remove("defiantBG");
    document.getElementById("bg")?.classList.remove("dragonsBG");
    document.getElementById("bg")?.classList.remove("eternalBG");
    document.getElementById("bg")?.classList.remove("floridaBG");
    document.getElementById("bg")?.classList.remove("fusionBG");
    document.getElementById("bg")?.classList.remove("gladiatorsBG");
    document.getElementById("bg")?.classList.remove("houstonBG");
    document.getElementById("bg")?.classList.remove("justiceBG");
    document.getElementById("bg")?.classList.remove("londonBG");
    document.getElementById("bg")?.classList.remove("nyxlBG");
    document.getElementById("bg")?.classList.remove("reignBG");
    document.getElementById("bg")?.classList.remove("seoulBG");
    document.getElementById("bg")?.classList.remove("shockBG");
    document.getElementById("bg")?.classList.remove("sparkBG");
    document.getElementById("bg")?.classList.remove("titansBG");
    document.getElementById("bg")?.classList.remove("valiantBG");
  }

  function setActiveTeam(team: string) {
    activeTeam = team;
    console.log("active team is now " + activeTeam);
    removeTeamBGClasses();
    switch (activeTeam) {
      case "boston":
        document.getElementById("bg")?.classList.add("bostonBG");
        break;
      case "charge":
        document.getElementById("bg")?.classList.add("chargeBG");

        break;
      case "chengdu":
        document.getElementById("bg")?.classList.add("chengduBG");
        break;
      case "dallas":
        document.getElementById("bg")?.classList.add("dallasBG");

        break;
      case "defiant":
        document.getElementById("bg")?.classList.add("defiantBG");

        break;
      case "dragons":
        document.getElementById("bg")?.classList.add("dragonsBG");
        break;
      case "eternal":
        document.getElementById("bg")?.classList.add("eternalBG");
        break;
      case "florida":
        document.getElementById("bg")?.classList.add("floridaBG");
        break;
      case "fusion":
        document.getElementById("bg")?.classList.add("fusionBG");
        break;
      case "gladiators":
        document.getElementById("bg")?.classList.add("gladiatorsBG");
        break;
      case "houston":
        document.getElementById("bg")?.classList.add("houstonBG");
        break;
      case "justice":
        document.getElementById("bg")?.classList.add("justiceBG");
        break;
      case "london":
        document.getElementById("bg")?.classList.add("londonBG");
        break;
      case "nyxl":
        document.getElementById("bg")?.classList.add("nyxlBG");
        break;
      case "reign":
        document.getElementById("bg")?.classList.add("reignBG");
        break;
      case "seoul":
        document.getElementById("bg")?.classList.add("seoulBG");
        break;
      case "shock":
        document.getElementById("bg")?.classList.add("shockBG");
        break;
      case "spark":
        document.getElementById("bg")?.classList.add("sparkBG");
        break;
      case "titans":
        document.getElementById("bg")?.classList.add("titansBG");
        break;
      case "valiant":
        document.getElementById("bg")?.classList.add("valiantBG");
        break;
      default:
        break;
    }
    document.getElementById("team-container")?.classList.remove("block");
    document.getElementById("team-container")?.classList.add("hidden");
    document.getElementById("tables")?.classList.add("block");
    document.getElementById("tables")?.classList.remove("hidden");
  }

  return (
    <>
      <Head>
        <title>OWL Offseason Tracker</title>
        <meta name="description" content="Overwatch League Offseason Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="bg" className="flex h-full flex-col">
        <div
          style={{ height: "20vh" }}
          className="flex flex-col items-center justify-between"
        >
          <h1 className="py-5 text-7xl">OWL Offseason Tracker</h1>
          <div className="flex w-full flex-row items-center justify-evenly pb-10">
            <p>ahgposdigh</p>
            <p>ahgposdigh</p>
            <p>ahgposdigh</p>
          </div>
        </div>
        <div
          id="team-container"
          style={{ height: "calc(100vh - 20vh)" }}
          className="grid w-screen grid-cols-10 grid-rows-2 gap-0"
        >
          <div
            onClick={() => {
              setActiveTeam("boston");
            }}
            className="bostonBG cursor-pointer flex-col items-center justify-center py-24"
          >
            <Image
              alt="Boston Uprising"
              unoptimized
              src={boston}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("charge");
            }}
            className="chargeBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Guangzhou Charge"
              unoptimized
              src={charge}
              className=""
            />
            ``
          </div>

          <div
            onClick={() => {
              setActiveTeam("chengdu");
            }}
            className="chengduBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Chengdu Hunters"
              unoptimized
              src={chengdu}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("defiant");
            }}
            className="defiantBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Toronto Defiant"
              unoptimized
              src={defiant}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("dallas");
            }}
            className="dallasBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image alt="Dallas Fuel" unoptimized src={dallas} className="" />
          </div>

          <div
            onClick={() => {
              setActiveTeam("dragons");
            }}
            className="dragonsBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Shanghai Dragons"
              unoptimized
              src={dragons}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("eternal");
            }}
            className="eternalBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Las Vegas Eternal"
              unoptimized
              src={eternal}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("florida");
            }}
            className="floridaBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Florida Mayhem"
              unoptimized
              src={florida}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("gladiators");
            }}
            className="gladiatorsBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Los Angeles Gladiators"
              unoptimized
              src={gladiators}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("houston");
            }}
            className="houstonBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Houston Outlaws"
              unoptimized
              src={houston}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("london");
            }}
            className="londonBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="London Spitfire"
              unoptimized
              src={london}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("shock");
            }}
            className="shockBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="San Francisco Shock"
              unoptimized
              src={shock}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("nyxl");
            }}
            className="nyxlBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="New York Excelsior"
              unoptimized
              src={nyxl}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("fusion");
            }}
            className="fusionBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Philadelphia Fusion"
              unoptimized
              src={fusion}
              className=""
            />
          </div>

          <div
            onClick={() => {
              setActiveTeam("valiant");
            }}
            className="valiantBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Los Angeles Valiant"
              unoptimized
              src={valiant}
              className=""
            />
          </div>

          <div
            onClick={() => {
              setActiveTeam("seoul");
            }}
            className="seoulBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image alt="Seoul Dynasty" unoptimized src={seoul} className="" />
          </div>
          <div
            onClick={() => {
              setActiveTeam("reign");
            }}
            className="reignBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image alt="Atlanta Reign" unoptimized src={reign} className="" />
          </div>
          <div
            onClick={() => {
              setActiveTeam("justice");
            }}
            className="justiceBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Washington Justice"
              unoptimized
              src={justice}
              className=""
            />
          </div>
          <div
            onClick={() => {
              setActiveTeam("spark");
            }}
            className="sparkBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image alt="Hangzhou Spark" unoptimized src={spark} className="" />
          </div>
          <div
            onClick={() => {
              setActiveTeam("titans");
            }}
            className="titansBG flex cursor-pointer flex-col items-center justify-center"
          >
            <Image
              alt="Vancouver Titans"
              unoptimized
              src={titans}
              className=""
            />
          </div>
        </div>
        <div className="hidden" id="tables"></div>
      </main>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import getTeamName from "../utils/getTeamName";
import { trpc } from "../utils/trpc";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CoolButton from "./CoolButton";

const TeamPage: NextPage = () => {
  const router = useRouter();
  const { team } = router.query as { team: string };
  const [parent] = useAutoAnimate<HTMLTableSectionElement>();

  const [parent2] = useAutoAnimate<HTMLTableSectionElement>();

  const teamName = getTeamName(team);
  const currentRoster = trpc.team.getPlayers.useQuery(team);
  const previousPlayers = trpc.team.getPreviousPlayers.useQuery(team);
  const extraStyling = `h1 { color: ${
    teamName == "Atlanta Reign" || teamName == "Las Vegas Eternal"
      ? "black"
      : "white"
  }; }`;
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <style>{extraStyling}</style>
      </Head>

      <main
        className={team + "BG flex w-full flex-col items-center justify-center"}
      >
        <h1 className="m-8 text-6xl">{teamName}</h1>
        <CoolButton
          className={team + "Accent w-32 hover:scale-95 " + team + "Text mb-4"}
          onClick={() => {
            router.push("./");
          }}
        >
          Back
        </CoolButton>
        <div
          className="flex w-full flex-col items-center justify-center"
          id="tables"
        >
          <h1 className="text-4xl">Current Roster</h1>
          <table className={"m-8 flex table w-1/2 text-center md:w-3/4"}>
            <thead className={team + "Accent border-b " + team + "Text"}>
              <tr>
                <th className="p-2 text-center text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                  Name
                </th>
                <th className="p-2 text-center text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                  Role
                </th>
                <th className="p-2 text-center text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                  Previous Team
                </th>
              </tr>
            </thead>
            <tbody ref={parent} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              {currentRoster.data
                ? currentRoster.data.map((player) => (
                    <tr key={player.id} className="border-b">
                      <td className="p-4 text-sm md:text-base lg:text-lg xl:text-xl">
                        <a
                          href={
                            "https://liquipedia.net/overwatch/" + player.name
                          }
                        >
                          {player.name}
                        </a>
                      </td>
                      <td className="p-4 text-sm md:text-base lg:text-lg xl:text-xl">
                        {player.role}
                      </td>
                      <td className="p-4 text-sm md:text-base lg:text-lg xl:text-xl">
                        {player.previousTeam.length == 3 &&
                        player.previousTeam != player.team ? (
                          <a href={"./" + player.previousTeam}>
                            {getTeamName(player.previousTeam)}
                          </a>
                        ) : (
                          getTeamName(player.previousTeam)
                        )}
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <h1 className="text-4xl">2022 Roster</h1>
          <table className={"m-4 flex table w-1/2 text-center md:w-3/4"}>
            <thead className={team + "Accent border-b " + team + "Text"}>
              <tr>
                <th className="p-2 text-center text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                  Name
                </th>
                <th className="p-2 text-center text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                  Role
                </th>
                <th className="p-2 text-center text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                  New Team
                </th>
              </tr>
            </thead>
            <tbody ref={parent2} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              {previousPlayers.data
                ? previousPlayers.data.map((player) => (
                    <tr key={player.id} className="border-b">
                      <td className="p-4 text-sm md:text-base lg:text-lg xl:text-xl">
                        <a
                          href={
                            "https://liquipedia.net/overwatch/" + player.name
                          }
                        >
                          {player.name}
                        </a>
                      </td>
                      <td className="p-4 text-sm md:text-base lg:text-lg xl:text-xl">
                        {player.role}
                      </td>
                      <td className="p-4 text-sm md:text-base lg:text-lg xl:text-xl">
                        {player.team.length == 3 ? (
                          <a href={"./" + player.team}>
                            {getTeamName(player.team)}
                          </a>
                        ) : (
                          getTeamName(player.team)
                        )}
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default TeamPage;

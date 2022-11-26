import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import getTeamLogo from "../utils/getTeamLogo";
import getTeamName from "../utils/getTeamName";
interface TeamLogoProps {
  team: string;
}

function removeTeamBackgrounds() {
  // remove all classes that end with "BG" from the body
  const body = document.getElementsByTagName("body")[0];
  const classes = body?.classList;
  if (classes) {
    for (let i = 0; i < classes.length; i++) {
      if (classes[i]) {
        if (classes[i]?.endsWith("BG")) {
          body.classList.remove(classes[i] as string);
        }
      }
    }
  }
}

export default function TeamLogo({ team }: TeamLogoProps) {
  const teamName = getTeamName(team);
  const router = useRouter();
  return (
    <div
      className={
        team +
        "BG group flex cursor-pointer flex-col items-center justify-center"
      }
      onClick={() => {
        removeTeamBackgrounds();

        document.body.classList.add(team + "BG");
        router.push("./" + team);
      }}
    >
      <Image
        alt={getTeamName(team)}
        unoptimized
        src={getTeamLogo(team)}
        className="transition duration-300 ease-in-out group-hover:scale-110"
      />
      <h1 className="p-4 text-center sm:hidden md:block xl:block">
        {teamName}
      </h1>
    </div>
  );
}

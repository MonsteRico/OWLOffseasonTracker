import type { StaticImageData } from "next/image";
import BOS from "../logos/boston.png";
import GZC from "../logos/charge.png";
import CHD from "../logos/chengdu.png";
import DAL from "../logos/dallas.png";
import TOR from "../logos/defiant.png";
import SHD from "../logos/dragons.png";
import PAR from "../logos/eternal.png";
import FLM from "../logos/florida.png";
import SIN from "../logos/infernal.png";
import LAG from "../logos/gladiators.png";
import HOU from "../logos/houston.png";
import WAS from "../logos/justice.png";
import LDN from "../logos/london.png";
import NYX from "../logos/nyxl.png";
import ATL from "../logos/reign.png";
import SEO from "../logos/seoul.png";
import SFS from "../logos/shock.png";
import HZS from "../logos/spark.png";
import VAN from "../logos/titans.png";
import LAV from "../logos/valiant.png";
export default function getTeamLogo(team: string): StaticImageData {
  switch (team) {
    case "BOS":
      return BOS;

    case "GZC":
      return GZC;

    case "CHD":
      return CHD;

    case "TOR":
      return TOR;

    case "DAL":
      return DAL;

    case "SHD":
      return SHD;

    case "PAR":
      return PAR;

    case "FLM":
      return FLM;

    case "LAG":
      return LAG;

    case "HOU":
      return HOU;

    case "LDN":
      return LDN;

    case "SFS":
      return SFS;

    case "NYX":
      return NYX;

    case "SIN":
    case "PHI":
      return SIN;

    case "LAV":
      return LAV;

    case "SEO":
      return SEO;

    case "ATL":
      return ATL;

    case "WAS":
      return WAS;

    case "HZS":
      return HZS;

    case "VAN":
      return VAN;

    default:
      return VAN;
  }
}

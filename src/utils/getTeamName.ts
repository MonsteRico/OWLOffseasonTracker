export default function getTeamName(team: string): string {
  let teamName = "";
  switch (team) {
    case "BOS":
      teamName = "Boston Uprising";
      break;
    case "GZC":
      teamName = "Guangzhou Charge";
      break;
    case "CHD":
      teamName = "Chengdu Hunters";
      break;
    case "TOR":
      teamName = "Toronto Defiant";
      break;
    case "DAL":
      teamName = "Dallas Fuel";
      break;
    case "SHD":
      teamName = "Shanghai Dragons";
      break;
    case "LVE":
    case "PAR":
      teamName = "Las Vegas Eternal";
      break;
    case "FLM":
      teamName = "Florida Mayhem";
      break;
    case "LAG":
      teamName = "Los Angeles Gladiators";
      break;
    case "HOU":
      teamName = "Houston Outlaws";
      break;
    case "LDN":
      teamName = "London Spitfire";
      break;
    case "SFS":
      teamName = "San Francisco Shock";
      break;
    case "NYX":
      teamName = "New York Excelsior";
      break;
    case "SIN":
    case "PHI":
      teamName = "Seoul Infernal";
      break;
    case "LAV":
      teamName = "Los Angeles Valiant";
      break;
    case "SEO":
      teamName = "Seoul Dynasty";
      break;
    case "ATL":
      teamName = "Atlanta Reign";
      break;
    case "WAS":
      teamName = "Washington Justice";
      break;
    case "HZS":
      teamName = "Hangzhou Spark";
      break;
    case "VAN":
      teamName = "Vancouver Titans";
      break;
    case "Retired":
      teamName = "Retired";
      break;
    case "contenders":
      teamName = "From Contenders";
      break;
    case "Limited Free Agent":
      teamName = "Limited Free Agent";
      break;
    case "Free Agent":
      teamName = "Free Agent";
      break;
    case "Unconfirmed":
      teamName = "Unconfirmed";
      break;
    case "Outside":
      teamName = "Outside OWL";
      break;
    default:
      teamName = "Team Not Found";
  }
  return teamName;
}

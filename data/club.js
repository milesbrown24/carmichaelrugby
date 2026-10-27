// Edit club information here, then redeploy. No CMS or API keys required.
export const club = {
  name: "Carmichael Hawks Rugby Club",
  email: "carmichaelhawks@gmail.com",
  location: "Sacramento, California",
  siteUrl: "https://carmichaelrugby.com",
  registrationUrl:
    "https://myaccount.rugbyxplorer.com.au/choose-registration?name=Carmichael+Rugby",
  assistanceUrl: "https://forms.gle/aunNxSDdMt5mqZKs7",
  // 2027 season details supplied by the club on October 27, 2026.
  season: {
    label: "2027 season",
    announcement: "2027 Registration is now Open",
    message:
      "Youth and middle school start December 1, 2026. High school starts January 5, 2027.",
  },
};

export const teams = [
  {
    id: "youth",
    number: "01",
    name: "Youth rugby",
    ages: "U10 & U12",
    phrase: "An introduction to rugby.",
    description:
      "Learn the game, get moving and make friends. New players can start here, with coaching that builds skills one practice at a time.",
  },
  {
    id: "middle-school",
    number: "02",
    name: "Middle school",
    ages: "Middle school",
    phrase: "Skills, teamwork and match play.",
    description:
      "Develop your passing, tackling and teamwork. A place to keep learning, meet teammates and grow in confidence on the pitch.",
  },
  {
    id: "high-school",
    number: "03",
    name: "High school",
    ages: "JV & Varsity",
    phrase: "JV and varsity rugby.",
    description:
      "Competitive rugby, dedicated training and a team to grow with. Bring your experience from another sport, or start something completely new.",
  },
];

// Confirmed 2027 fixtures supplied by the club. Youth includes middle school.
export const upcomingFixtures = [
  {
    id: "y27-01",
    team: "youth",
    date: "2027-01-02",
    title: "@ Milpitas Mana",
    detail: "",
  },
  {
    id: "y27-02",
    team: "youth",
    date: "2027-01-09",
    title: "Host @ Rio, Gridley & Granite Bay",
    detail: "",
  },
  {
    id: "y27-03",
    team: "youth",
    date: "2027-01-16",
    title: "Bay Area Tournament @ SFGG",
    detail: "",
  },
  {
    id: "y27-04",
    team: "youth",
    date: "2027-01-23",
    title: "@ Gridley",
    detail: "",
  },
  {
    id: "y27-05",
    team: "youth",
    date: "2027-01-30",
    title: "Kick Off Tournament in Sacramento",
    detail: "",
  },
  {
    id: "y27-06",
    team: "youth",
    date: "2027-02-06",
    title: "Host @ Rio, Motherlode, Granite Bay, SOLO",
    detail: "",
  },
  {
    id: "y27-07",
    team: "youth",
    date: "2027-02-13",
    title: "CenCal Challenge @ Fresno",
    detail: "",
  },
  {
    id: "y27-08",
    team: "youth",
    date: "2027-02-20",
    title: "Bye",
    detail: "No fixture",
  },
  {
    id: "y27-09",
    team: "youth",
    date: "2027-02-27",
    title: "@ Kaji",
    detail: "",
  },
  {
    id: "y27-10",
    team: "youth",
    date: "2027-03-06",
    title: "End of Season Jamboree @ San Mateo",
    detail: "",
  },
  {
    id: "h27-01",
    team: "high-school",
    date: "2027-03-20",
    title: "Rugby Riot Showcase @ San Diego",
    detail: "",
  },
  {
    id: "h27-02",
    team: "high-school",
    date: "2027-03-27",
    title: "OPEN",
    detail: "Open date",
  },
  {
    id: "h27-03",
    team: "high-school",
    date: "2027-04-03",
    title: "@ Kaji, Sacramento",
    detail: "",
  },
  {
    id: "h27-04",
    team: "high-school",
    date: "2027-04-10",
    title: "@ SacAir, Sacramento",
    detail: "",
  },
  {
    id: "h27-05",
    team: "high-school",
    date: "2027-04-17",
    title: "@ Bronco, Concord",
    detail: "",
  },
  {
    id: "h27-06",
    team: "high-school",
    date: "2027-04-24",
    title: "Rugby Riot Showcase @ Charlotte",
    detail: "",
  },
  {
    id: "h27-07",
    team: "high-school",
    date: "2027-05-01",
    title: "Host @ Rio, East Palo Alto",
    detail: "",
  },
  {
    id: "h27-08",
    team: "high-school",
    date: "2027-05-08",
    title: "NorCal Championships",
    detail: "",
  },
  {
    id: "h27-09",
    team: "high-school",
    date: "2027-05-28",
    title: "National Championships @ Elkhart",
    detail: "May 28\u201330, 2027",
    endDate: "2027-05-30",
  },
];

export const practices = [
  {
    team: "U10, U12, Middle School",
    start: "2026-12-01",
    startLabel: "December 1, 2026",
    days: "",
  },
  {
    team: "High School (JV & Varsity)",
    start: "2027-01-05",
    startLabel: "January 5, 2027",
    days: "Tuesday–Thursday",
  },
];

// Historical source: https://carmichaelrugby.com/schedule/ (2026 season).
// Preserve published wording: supersite locations are not guaranteed opponents.
export const archiveFixtures = [
  [
    "y01",
    "youth",
    "2026-01-03",
    "Away @ Gidley w/ Kaji",
    "Time announced weekly",
  ],
  [
    "y02",
    "youth",
    "2026-01-10",
    "Home vs Chico + Land Park",
    "Time announced weekly",
  ],
  [
    "y03",
    "youth",
    "2026-01-17",
    "Away @ Chico w/ Land Park + Motherlode",
    "Time announced weekly",
  ],
  [
    "y04",
    "youth",
    "2026-01-24",
    "Sacramento Kickoff Tournament",
    "Cherry Island",
  ],
  [
    "y05",
    "youth",
    "2026-01-31",
    "Home vs Chico + TBD",
    "Time announced weekly",
  ],
  ["y06", "youth", "2026-02-07", "Cen Cal Challenge", "Clovis, CA"],
  ["y07", "youth", "2026-02-14", "BYE", "No fixture"],
  [
    "y08",
    "youth",
    "2026-02-21",
    "Away @ Motherlode w/ Danville + Land Park",
    "Time announced weekly",
  ],
  [
    "y09",
    "youth",
    "2026-02-28",
    "Away @ Sac Air w/ Kaji + Land Park",
    "Time announced weekly",
  ],
  ["y10", "youth", "2026-03-07", "End of Season Tournament", "Bay Area"],
  [
    "h01",
    "high-school",
    "2026-01-10",
    "@ Motherlode (Ponderosa)",
    "3:30 PM Var A · 5:00 PM Var B",
  ],
  ["h02", "high-school", "2026-02-21", "@ Rio vs Solo", "3:00 PM Var B"],
  [
    "h03",
    "high-school",
    "2026-03-21",
    "@ Rio vs Gridley",
    "11:00 AM Varsity · 1:00 PM Var B",
  ],
  [
    "h04",
    "high-school",
    "2026-03-28",
    "@ Rio vs SacAIR",
    "11:00 AM Varsity · 1:00 PM Var B",
  ],
  ["h05", "high-school", "2026-03-30", "SoCal Tour", "March 30 – April 3"],
  ["h06", "high-school", "2026-04-11", "@ Elsie Allen", "Santa Rosa"],
  [
    "h07",
    "high-school",
    "2026-04-18",
    "@ Rio vs Bronco",
    "11:00 AM Varsity · 1:00 PM Var B",
  ],
  ["h08", "high-school", "2026-04-25", "@ EPA", "East Palo Alto"],
  ["h09", "high-school", "2026-05-02", "Playoff", "Time not published"],
  ["h10", "high-school", "2026-05-09", "Championships", "St. Mary’s College"],
  ["h11", "high-school", "2026-05-23", "National Championships", "Elkhart, IN"],
].map(([id, team, date, title, detail]) => ({ id, team, date, title, detail }));

export const dues = [
  {
    team: "U10 & U12",
    amount: "$275",
    includes:
      "USA Rugby registration, insurance, jerseys, equipment and field fees.",
  },
  {
    team: "Middle school",
    amount: "$315",
    includes:
      "USA Rugby registration, insurance, jerseys, equipment and field fees.",
  },
  {
    team: "High school",
    amount: "$450",
    includes:
      "Game shorts and socks, a training top and travel shirt; USA Rugby registration, insurance, tournaments and field fees.",
  },
];

export const kit = [
  "Cleats (rugby or soccer style)",
  "Rugby shorts",
  "T-shirt or rugby jersey",
  "Mouthguard",
  "Water bottle",
  "Weather-appropriate layers",
];

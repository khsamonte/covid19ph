import range from "lodash/range";

// No. of Days + 1
const january = range(1, 32).map(val => `Jan ${val}`);
const february = range(1, 30).map(val => `Feb ${val}`);
const march = range(1, 32).map(val => `Mar ${val}`);

const confirmedCases = {
  january: january.map(val => (val !== "Jan 30" ? 0 : 1)),
  february: february.map(val =>
    val === "Feb 2" ? 1 : val === "Feb 5" ? 1 : 0
  ),
  march: [
    0,
    0,
    0,
    0,
    2,
    0,
    1,
    4,
    14,
    9,
    16,
    3,
    12,
    47,
    29,
    2,
    45,
    15,
    15,
    13,
    77
  ]
};
const deaths = {
  january: range(1, 32).map(val => 0),
  february: february.map(val => (val !== "Feb 2" ? 0 : 1)),
  march: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 3, 4, 0, 2, 3, 0, 1, 0]
};
const recoveries = {
  january: range(1, 32).map(val => 0),
  february: february.map(val =>
    val === "Feb 5" ? 1 : val === "Feb 10" ? 1 : 0
  ),
  march: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 0, 5]
};

const allDays = [...january.slice(29), ...february, ...march.slice(0, 21)];

const allConfirmed = [
  ...confirmedCases["january"].slice(29),
  ...confirmedCases["february"],
  ...confirmedCases["march"]
];
const allDeaths = [
  ...deaths["january"].slice(29),
  ...deaths["february"],
  ...deaths["march"]
];
const allRecoveries = [
  ...recoveries["january"].slice(29),
  ...recoveries["february"],
  ...recoveries["march"]
];

let totalC = 0;
const totalCases = allConfirmed.map((val, idx) => {
  totalC += val;
  if (idx !== 0) {
    return totalC;
  }
  return val;
});

let totalD = 0;
const totalDeaths = allDeaths.map((val, idx) => {
  totalD += val;
  if (idx !== 0) {
    return totalD;
  }
  return val;
});

let totalR = 0;
const totalRecoveries = allRecoveries.map((val, idx) => {
  totalR += val;
  if (idx !== 0) {
    return totalR;
  }
  return val;
});

export const covidData = [
  {
    month: "January",
    shortMonth: "Jan",
    days: january,
    confirmed: confirmedCases["january"],
    deaths: deaths["january"],
    recoveries: recoveries["january"],
    color: "#3A96FD",
    gradientColor: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(58,150,253, 0.3)"
        },
        {
          offset: 1,
          color: "rgba(58,150,253, 0)"
        }
      ]
    }
  },
  {
    month: "February",
    shortMonth: "Feb",
    days: february,
    confirmed: confirmedCases["february"],
    deaths: deaths["february"],
    recoveries: recoveries["february"],
    color: "#FFB5B5",
    gradientColor: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(1255,181,181, 0.3)"
        },
        {
          offset: 1,
          color: "rgba(255,181,181, 0)"
        }
      ]
    }
  },
  {
    month: "March",
    shortMonth: "Mar",
    days: march,
    confirmed: confirmedCases["march"],
    deaths: deaths["march"],
    recoveries: recoveries["march"],
    color: "#ffff32",
    gradientColor: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(255,255,50, 0.3)"
        },
        {
          offset: 1,
          color: "rgba(255,255,50, 0)"
        }
      ]
    }
  },
  {
    month: "All",
    shortMonth: "All",
    days: allDays,
    confirmed: allConfirmed,
    deaths: allDeaths,
    recoveries: allRecoveries,
    color: "#199F90",
    gradientColor: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(25,159,144, 0.3)"
        },
        {
          offset: 1,
          color: "rgba(25,159,144, 0)"
        }
      ]
    }
  },
  {
    month: "Total",
    shortMonth: "Total",
    days: allDays,
    confirmed: totalCases,
    deaths: totalDeaths,
    recoveries: totalRecoveries,
    color: "#F26964",
    gradientColor: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(242,105,100, 0.3)"
        },
        {
          offset: 1,
          color: "rgba(242,105,100, 0)"
        }
      ]
    }
  }
];

import type { Bank } from "./types";

const banks: Array<Bank> = [
  {
    name: "ABBEY MORTGAGE BANK",
    slug: "ABM",
    code: "801",
    ussd: {
      code: "*5103#",
    },
  },
  {
    name: "ABOVE ONLY MFB",
    slug: "AOM",
    code: "51204",
    ussd: {
      code: null,
    },
  },
  {
    name: "ACCESS BANK",
    slug: "ACC",
    code: "044",
    ussd: {
      code: "*901#",
    },
  },
  {
    name: "ACCESS BANK (DIAMOND)",
    slug: "DMB",
    code: "063",
    ussd: {
      code: "*710#",
    },
  },
  {
    name: "ALAT BY WEMA",
    slug: "ALAT-BY-WEMA",
    code: "035A",
    ussd: {
      code: "*945#",
    },
  },
  {
    name: "AMJU UNIQUE MFB",
    slug: "AMJU-MFB",
    code: "50926",
    ussd: {
      code: "*723*306#",
    },
  },
  {
    name: "ASO SAVINGS AND LOANS",
    slug: "ASOSAVINGS",
    code: "401",
    ussd: {
      code: null,
    },
  },
  {
    name: "BAINESCREDIT MFB",
    slug: "BAINESCREDIT-MFB",
    code: "51229",
    ussd: {
      code: null,
    },
  },
  {
    name: "BOWEN MICROFINANCE BANK",
    slug: "BOWEN-MFB",
    code: "50931",
    ussd: {
      code: "*614*314#",
    },
  },
  {
    name: "CARBON",
    slug: "CAB",
    code: "565",
    ussd: {
      code: "*1303#",
    },
  },
  {
    name: "CEMCS MICROFINANCE BANK",
    slug: "CEMCS-MFB",
    code: "50823",
    ussd: {
      code: null,
    },
  },
  {
    name: "CITIBANK NIGERIA",
    slug: "CTB",
    code: "023",
    ussd: {
      code: null,
    },
  },
  {
    name: "CORONATION MERCHANT BANK",
    slug: "COR",
    code: "559",
    ussd: {
      code: null,
    },
  },
  {
    name: "ECOBANK NIGERIA",
    slug: "EBN",
    code: "050",
    ussd: {
      code: "*326#",
    },
  },
  {
    name: "EKONDO MICROFINANCE BANK",
    slug: "EKONDO-MFB",
    code: "562",
    ussd: {
      code: "*614*178#",
    },
  },
  {
    name: "EYOWO",
    slug: "EYO",
    code: "50126",
    ussd: {
      code: "*4255#",
    },
  },
  {
    name: "FIDELITY BANK",
    slug: "FDB",
    code: "070",
    ussd: {
      code: "*770#",
    },
  },
  {
    name: "FIRMUS MFB",
    slug: "FIRMUS-MFB",
    code: "51314",
    ussd: {
      code: "*322*365#",
    },
  },
  {
    name: "FIRST BANK OF NIGERIA",
    slug: "FBN",
    code: "011",
    ussd: {
      code: "*894#",
    },
  },
  {
    name: "FIRST CITY MONUMENT BANK",
    slug: "FCMB",
    code: "214",
    ussd: {
      code: "*329#",
    },
  },
  {
    name: "FSDH MERCHANT BANK LIMITED",
    slug: "FSDH",
    code: "501",
    ussd: {
      code: null,
    },
  },
  {
    name: "GLOBUS BANK",
    slug: "GLB",
    code: "00103",
    ussd: {
      code: "*989#",
    },
  },
  {
    name: "GOMONEY",
    slug: "GOM",
    code: "100022",
    ussd: {
      code: null,
    },
  },
  {
    name: "GUARANTY TRUST BANK",
    slug: "GTB",
    code: "058",
    ussd: {
      code: "*737#",
    },
  },
  {
    name: "HACKMAN MICROFINANCE BANK",
    slug: "HACKMAN-MFB",
    code: "51251",
    ussd: {
      code: null,
    },
  },
  {
    name: "HASAL MICROFINANCE BANK",
    slug: "HASAL-MFB",
    code: "50383",
    ussd: {
      code: "*322#",
    },
  },
  {
    name: "HERITAGE BANK",
    slug: "HTB",
    code: "030",
    ussd: {
      code: "*745#",
    },
  },
  {
    name: "IBILE MICROFINANCE BANK",
    slug: "IBILE-MFB",
    code: "51244",
    ussd: {
      code: "*614*317#",
    },
  },
  {
    name: "INFINITY MFB",
    slug: "INFINITY-MFB",
    code: "50457",
    ussd: {
      code: null,
    },
  },
  {
    name: "JAIZ BANK",
    slug: "JAIZ-BANK",
    code: "301",
    ussd: {
      code: "*773#",
    },
  },
  {
    name: "KADPOLY MFB",
    slug: "KADPOLY-MFB",
    code: "50502",
    ussd: {
      code: null,
    },
  },
  {
    name: "KEYSTONE BANK",
    slug: "KSB",
    code: "082",
    ussd: {
      code: "*7111#",
    },
  },
  {
    name: "KREDI MONEY MFB LTD",
    slug: "KREDI-MFB",
    code: "50200",
    ussd: {
      code: null,
    },
  },
  {
    name: "KUDA BANK",
    slug: "KUD",
    code: "50211",
    ussd: {
      code: "*945#",
    },
  },
  {
    name: "LAGOS BUILDING INVESTMENT COMPANY PLC.",
    slug: "LBIC-PLC",
    code: "90052",
    ussd: {
      code: null,
    },
  },
  {
    name: "LINKS MFB",
    slug: "LINKS-MFB",
    code: "50549",
    ussd: {
      code: null,
    },
  },
  {
    name: "LOTUS BANK",
    slug: "LTS",
    code: "303",
    ussd: {
      code: "*5045#",
    },
  },
  {
    name: "MAYFAIR MFB",
    slug: "MYFAIR-MFB",
    code: "50563",
    ussd: {
      code: null,
    },
  },
  {
    name: "MINT MFB",
    slug: "MINT-MFB",
    code: "50304",
    ussd: {
      code: null,
    },
  },
  {
    name: "PAGA",
    slug: "PAGA",
    code: "100002",
    ussd: {
      code: "*242#",
    },
  },
  {
    name: "PALMPAY",
    slug: "PALMPAY",
    code: "999991",
    ussd: {
      code: null,
    },
  },
  {
    name: "PARALLEX BANK",
    slug: "PRX",
    code: "104",
    ussd: {
      code: null,
    },
  },
  {
    name: "PARKWAY - READYCASH",
    slug: "PRC",
    code: "311",
    ussd: {
      code: null,
    },
  },
  {
    name: "PAYCOM",
    slug: "PAYCOM",
    code: "999992",
    ussd: {
      code: null,
    },
  },
  {
    name: "PETRA MIRCOFINANCE BANK PLC",
    slug: "PETRA-MFB",
    code: "50746",
    ussd: {
      code: null,
    },
  },
  {
    name: "POLARIS BANK",
    slug: "PLB",
    code: "076",
    ussd: {
      code: "*833#",
    },
  },
  {
    name: "PROVIDUS BANK",
    slug: "PVB",
    code: "101",
    ussd: {
      code: null,
    },
  },
  {
    name: "QUICKFUND MFB",
    slug: "QUICKFUND-MFB",
    code: "51293",
    ussd: {
      code: null,
    },
  },
  {
    name: "RAND MERCHANT BANK",
    slug: "RAND-MERCHANT-BANK",
    code: "502",
    ussd: {
      code: null,
    },
  },
  {
    name: "RUBIES MFB",
    slug: "RUBIES-MFB",
    code: "125",
    ussd: {
      code: "*7797#",
    },
  },
  {
    name: "SPARKLE MICROFINANCE BANK",
    slug: "SPARKLE-MFB",
    code: "51310",
    ussd: {
      code: null,
    },
  },
  {
    name: "STANBIC IBTC BANK",
    slug: "SIB",
    code: "221",
    ussd: {
      code: "*909#",
    },
  },
  {
    name: "STANDARD CHARTERED BANK",
    slug: "SCB",
    code: "068",
    ussd: {
      code: "*977#",
    },
  },
  {
    name: "STERLING BANK",
    slug: "STB",
    code: "232",
    ussd: {
      code: "*822#",
    },
  },
  {
    name: "SUNTRUST BANK",
    slug: "SBN",
    code: "100",
    ussd: {
      code: "*5230#",
    },
  },
  {
    name: "TAJ BANK",
    slug: "TAJ-BANK",
    code: "302",
    ussd: {
      code: "*898#",
    },
  },
  {
    name: "TANGERINE MONEY",
    slug: "TANGERINE-MONEY",
    code: "51269",
    ussd: {
      code: null,
    },
  },
  {
    name: "TCF MFB",
    slug: "TCF-MFB",
    code: "51211",
    ussd: {
      code: "*908#",
    },
  },
  {
    name: "TITAN BANK",
    slug: "TITAN-BANK",
    code: "102",
    ussd: {
      code: "*922#",
    },
  },
  {
    name: "UNICAL MFB",
    slug: "UNICAL-MFB",
    code: "50871",
    ussd: {
      code: null,
    },
  },
  {
    name: "UNION BANK OF NIGERIA",
    slug: "UBN",
    code: "032",
    ussd: {
      code: "*826#",
    },
  },
  {
    name: "UNITED BANK FOR AFRICA",
    slug: "UBA",
    code: "033",
    ussd: {
      code: "*919#",
    },
  },
  {
    name: "UNITY BANK",
    slug: "UNB",
    code: "215",
    ussd: {
      code: "*7799#",
    },
  },
  {
    name: "VFD MICROFINANCE BANK LIMITED",
    slug: "VFD",
    code: "566",
    ussd: {
      code: "*5037#",
    },
  },
  {
    name: "WEMA BANK",
    slug: "WEM",
    code: "035",
    ussd: {
      code: "*945#",
    },
  },
  {
    name: "ZENITH BANK",
    slug: "ZENITH-BANK",
    code: "057",
    ussd: {
      code: "*966#",
    },
  },
];

export default banks;

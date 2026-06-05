// lib/university-data.ts

import {
    HelpCenter,
    Description,
    School,
    AddHomeWork,
    Explore
} from "@mui/icons-material";

export const DEFAULT_UNIVERSITY_LOGO = "/images/universities/default-university.png";

export const UNIVERSITY_LOGOS: Record<string, string> = {
    "University of Vienna (1365)": "/images/universities/univie.png",
    "TU Wien (1815)": "/images/universities/tuwien.png",
    "WU Wien (1898)": "/images/universities/wu.png",
    "Medical University of Vienna (2004)": "/images/universities/meduniwien.png",
    "BOKU University (1872)": "/images/universities/boku.png",
    "MODUL University Vienna (2007)": "/images/universities/modul.png",
    "Webster Vienna Private University (1981)": "/images/universities/webster.png",
    "Sigmund Freud University (2005)": "/images/universities/sfu.png",

    "University of Graz (1585)": "/images/universities/uni-graz.png",
    "Graz University of Technology (1811)": "/images/universities/tugraz.png",
    "Medical University of Graz (2004)": "/images/universities/medunigraz.png",

    "University of Innsbruck (1669)": "/images/universities/uibk.png",
    "MCI Innsbruck (1995)": "/images/universities/mci.png",
    "Medical University of Innsbruck (2004)": "/images/universities/meduniinnsbruck.png",

    "Paris Lodron University Salzburg (1622)": "/images/universities/plus.png",
    "Mozarteum University Salzburg (1841)": "/images/universities/mozarteum.png",
    "FH Salzburg University of Applied Sciences (1995)": "/images/universities/fh-salzburg.png",

    "Johannes Kepler University Linz (1966)": "/images/universities/jku.png",
    "University of Arts Linz (1973)": "/images/universities/ufg.png",
    "FH Oberösterreich – University of Applied Sciences (1994)": "/images/universities/fh-ooe.png",

    "Alpen-Adria University Klagenfurt (1970)": "/images/universities/aau.png",
    "FH Kärnten – University of Applied Sciences (1995)": "/images/universities/fh-kaernten.png",
    "AAU School of Management (2002)": "/images/universities/aau-som.png"
};

export const UNIVERSITY_CITIES = [
    "vienna",
    "graz",
    "innsbruck",
    "salzburg",
    "linz",
    "klagenfurt"
];

export const SECTIONS_DATA = [
    { id: "consultation-info", key: "consultation", icon: HelpCenter, color: "from-blue-600/10" },
    { id: "documents", key: "documents", icon: Description, color: "from-purple-600/10" },
    { id: "admission", key: "admission", icon: School, color: "from-red-600/10" },
    { id: "dormitory", key: "dormitory", icon: AddHomeWork, color: "from-amber-600/10" },
    { id: "adaptation", key: "adaptation", icon: Explore, color: "from-emerald-600/10" },
];

export const PRICING_PLANS = [
    {
        key: "basic",
        price: "€1350",
        featuresCount: 4,
        isPopular: false,
        hoverStyle: "hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
    },
    {
        key: "optimal",
        price: "€2200",
        featuresCount: 5,
        isPopular: true,
        hoverStyle: "border-red-600/50 dark:border-red-600/40 shadow-xl shadow-red-600/10 hover:border-red-600/70 hover:shadow-2xl hover:shadow-red-600/20"
    },
    {
        key: "premium",
        price: "€3000",
        featuresCount: 5,
        isPopular: false,
        hoverStyle: "hover:border-amber-500/40 dark:hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10"
    }
];
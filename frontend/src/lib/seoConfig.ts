export type SeoRouteConfig = {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
};

export const seoSiteConfig = {
    name: "Acclimation Sports Management",
    url: "https://www.acclimationsportsmanagement.com",
    description:
        "Acclimation Sports Management provides NBA representation, NIL strategy, salary cap analytics, and career management for elite basketball talent.",
    defaultImage: "/logo/AcclimationLogo-Horizontal.png",
    keywords: [
        "Acclimation Sports Management",
        "NBA agency",
        "basketball representation",
        "NIL strategy",
        "salary cap analytics",
        "sports management",
        "contract negotiation",
        "NBA draft preparation",
    ],
} as const;

export const seoRoutes: Record<string, SeoRouteConfig> = {
    "/": {
        title: "NBA Representation, NIL Strategy & Salary Cap Analytics",
        description:
            "Acclimation Sports Management helps NBA players, college prospects, and elite high-school talent with representation, NIL strategy, salary cap analysis, and long-term career planning.",
    },
    "/contact": {
        title: "Contact Us",
        description:
            "Connect with Joe Grekoski and the Acclimation team for elite NBA representation and data-driven career advocacy.",
    },
    "/get-started": {
        title: "Launch Your Professional NBA Career",
        description:
            "Take the first step toward your professional basketball career. Submit your player profile for exclusive valuation and draft strategy.",
    },
    "/contract-negotiation": {
        title: "Litigation-Grade Contract Negotiation",
        description:
            "Data-driven contract deals with proprietary in-house salary-cap models. Expert representation that maximizes guaranteed money, incentives, and long-term player security.",
    },
    "/personal-branding": {
        title: "Personal Brand Domination",
        description:
            "Transforming talent into a premium, monetizable economic asset through professional brand development and strategic marketing.",
    },
    "/salary-cap": {
        title: "Proprietary Salary Cap Analytics",
        description:
            "Proprietary analytical models and expert salary cap strategy to optimize every contract and maximize career earnings.",
    },
    "/marketing-endorsements": {
        title: "Elite Endorsements & Marketing",
        description:
            "Maximizing off-court income through shoe deals, NIL, and legacy partnerships for elite basketball talent.",
    },
    "/pre-draft": {
        title: "Elite Pre-Draft Mastery",
        description:
            "Elite draft preparation, Combine mastery, and expert strategy for top basketball prospects entering the NBA Draft.",
    },
    "/holistic-concierge": {
        title: "One-Stop Holistic Concierge",
        description:
            "Elite trainers, personal chefs, private jets, and wealth management support for the modern NBA athlete.",
    },
    "/high-school-talent": {
        title: "Elite High School NIL Strategy",
        description:
            "Multi-million dollar NIL deal strategy and professional career planning for top-ranked prep basketball prospects.",
    },
    "/nba-players": {
        title: "Active NBA Athlete Representation",
        description:
            "Veteran representation focused on wealth architecture, contract extensions, and post-career financial security for active NBA athletes.",
    },
    "/college-prospects": {
        title: "College to NBA Draft Pipeline",
        description:
            "Maximize NIL deals, develop a professional brand, and prepare for the NBA with elite off-court support for top college basketball prospects.",
    },
    "/wnba": {
        title: "WNBA Advocacy & Representation",
        description:
            "Capitalize on the historic new WNBA CBA. Expert negotiation and representation that maximizes earnings and brand value for WNBA athletes.",
    },
    "/two-way-contracts": {
        title: "Strategic Two-Way Advantage",
        description:
            "Maximize the strategic value and progression of Two-Way agreements. Expert negotiation for undrafted gems and rising prospects.",
    },
    "/g-league-elite": {
        title: "NBA G League Fast Track",
        description:
            "Rules, salaries, and the fast track from G League prospects to the NBA. Expert advocacy for athletes rising to the NBA stage.",
    },
};

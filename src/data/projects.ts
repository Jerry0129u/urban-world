export type ShotLayout = "wide" | "tall" | "square";

export type Shot = {
    src: string;
    alt: string;
    layout?: ShotLayout;
};

export type ProjectStat = {
    label: string;
    value: string;
};

export type BeforeAfter = {
    before: {
        image: string;
        title: string;
        detail: string;
    };
    after: {
        image: string;
        title: string;
        detail: string;
    };
};

export type Project = {
    id: string;
    title: string;
    location: string;
    description: string;
    cover: string;
    palette: string;
    stats: ProjectStat[];
    shots: Shot[];
    gallery: Shot[];
    beforeAfter?: BeforeAfter;
    highlight?: string;
};

export type ProjectCategory = {
    id: string;
    title: string;
    summary: string;
    projectIds: string[];
    accent?: string;
};

export const projects: Project[] = [
    {
        id: "penthouse",
        title: "Penthouse glow",
        location: "СБД, UB",
        description: "High-floor residence where we softened the daylight with layered sheers and graphite accents.",
        cover: "/apartment-2.jpg",
        palette: "from-amber-300/20 via-white/5 to-white/0",
        stats: [
            { label: "zone", value: "Residence" },
            { label: "scope", value: "Full fit-out" },
        ],
        shots: [
            { src: "/apartment-1.jpg", alt: "Penthouse lounge", layout: "wide" },
            { src: "/apartment-2.jpg", alt: "Dining glow", layout: "square" },
            { src: "/apartment-4.jpg", alt: "Bedroom niche", layout: "tall" },
            { src: "/hotel-1.jpg", alt: "Lobby inspiration", layout: "square" },
            { src: "/hotel-2.jpg", alt: "Lighting detail", layout: "square" },
        ],
        gallery: [
            { src: "/apartment-2.jpg", alt: "Lounge and dining overview" },
            { src: "/apartment-1.jpg", alt: "Layered sofa zone" },
            { src: "/apartment-4.jpg", alt: "Bedroom quiet corner" },
            { src: "/hotel-2.jpg", alt: "Ambient lighting detail" },
            { src: "/hotel-1.jpg", alt: "Lobby palette inspiration" },
            { src: "/apartment-1.jpg", alt: "Bar and seating vignette" },
        ],
        beforeAfter: {
            before: {
                image: "/before.jpg",
                title: "Shell before staging",
                detail: "bare walls + cold light",
            },
            after: {
                image: "/after.jpg",
                title: "Warm penthouse glow",
                detail: "layered sheers + sculptural light",
            },
        },
        highlight: "Sunrise sheers soften the horizon and wrap the dining edge.",
    },
    {
        id: "lobby",
        title: "Lobby immersion",
        location: "Downtown",
        description: "Reception loop built with polished stone, smoked glass, and kinetic lighting for brand arrivals.",
        cover: "/hotel-3.jpg",
        palette: "from-indigo-400/20 via-purple-200/10 to-transparent",
        stats: [
            { label: "zone", value: "Hospitality" },
            { label: "scope", value: "Lighting + styling" },
        ],
        shots: [
            { src: "/hotel-1.jpg", alt: "Lobby seating", layout: "wide" },
            { src: "/hotel-2.jpg", alt: "Ceiling detail", layout: "square" },
            { src: "/hotel-6.jpg", alt: "Bar vignette", layout: "tall" },
            { src: "/office-1.jpg", alt: "Back office", layout: "square" },
            { src: "/office-2.jpg", alt: "Conference glow", layout: "square" },
        ],
        gallery: [
            { src: "/hotel-3.jpg", alt: "Arrival portal" },
            { src: "/hotel-1.jpg", alt: "Lobby seating pocket" },
            { src: "/hotel-2.jpg", alt: "Ceiling rhythm" },
            { src: "/hotel-6.jpg", alt: "Bar and lounge vignette" },
            { src: "/office-2.jpg", alt: "Conference spillover" },
            { src: "/office-1.jpg", alt: "Reception back office" },
        ],
        beforeAfter: {
            before: {
                image: "/before.jpg",
                title: "Empty shell",
                detail: "flat light + blank floor",
            },
            after: {
                image: "/hotel-1.jpg",
                title: "Immersive welcome",
                detail: "linear glow + brand metals",
            },
        },
        highlight: "We sequenced light to guide arrivals around the bar and back office.",
    },
    {
        id: "studio",
        title: "Studio hush",
        location: "Creative hub",
        description: "Open office suite tuned for focus: ribbed glass, charcoal felt, and hidden linear light.",
        cover: "/office-4.jpg",
        palette: "from-cyan-300/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Workspace" },
            { label: "scope", value: "Prototype" },
        ],
        shots: [
            { src: "/office-3.jpg", alt: "Studio overview", layout: "wide" },
            { src: "/office-2.jpg", alt: "Meeting room", layout: "square" },
            { src: "/office-1.jpg", alt: "Detail bench", layout: "square" },
            { src: "/before.jpg", alt: "Before snapshot", layout: "tall" },
            { src: "/after.jpg", alt: "After snapshot", layout: "square" },
        ],
        gallery: [
            { src: "/office-4.jpg", alt: "Studio entry" },
            { src: "/office-3.jpg", alt: "Workspace overview" },
            { src: "/office-2.jpg", alt: "Meeting room glass" },
            { src: "/office-1.jpg", alt: "Bench detail" },
            { src: "/before.jpg", alt: "Before renovation" },
            { src: "/after.jpg", alt: "After lighting tune" },
        ],
        beforeAfter: {
            before: {
                image: "/before.jpg",
                title: "Raw office shell",
                detail: "concrete glare and exposed ceilings",
            },
            after: {
                image: "/after.jpg",
                title: "Soft studio hush",
                detail: "felt panels + concealed light",
            },
        },
        highlight: "A concealed linear spine keeps desks calm while the meeting room glows.",
    },
];

export const projectCategories: ProjectCategory[] = [
    {
        id: "residential",
        title: "Residential glow",
        summary: "Penthouses and homes tuned for calm living.",
        projectIds: ["penthouse"],
        accent: "from-amber-100 via-white to-white",
    },
    {
        id: "hospitality",
        title: "Hospitality arrival",
        summary: "Lobbies and lounges that choreograph a welcome.",
        projectIds: ["lobby"],
        accent: "from-violet-100 via-white to-white",
    },
    {
        id: "workspace",
        title: "Workspaces that focus",
        summary: "Studios and offices shaped for flow and quiet.",
        projectIds: ["studio"],
        accent: "from-cyan-100 via-white to-white",
    },
];

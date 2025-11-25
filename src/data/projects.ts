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
    completed?: {
        year: string;
        month: string;
    };
    description: string;
    cover: string;
    palette: string;
    stats: ProjectStat[];
    shots: Shot[];
    gallery: Shot[];
    beforeAfter?: BeforeAfter;
    highlight?: string;
    tags?: string[];
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
        completed: { year: "2024", month: "02" },
        description: "High-floor residence where we softened the daylight with layered sheers and graphite accents.",
        cover: "/apartment-2.jpg",
        palette: "from-amber-300/20 via-white/5 to-white/0",
        stats: [
            { label: "zone", value: "Residence" },
            { label: "scope", value: "Full fit-out" },
        ],
        tags: ["Interior painting", "Plaster performance"],
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
        completed: { year: "2023", month: "11" },
        description: "Reception loop built with polished stone, smoked glass, and kinetic lighting for brand arrivals.",
        cover: "/hotel-3.jpg",
        palette: "from-indigo-400/20 via-purple-200/10 to-transparent",
        stats: [
            { label: "zone", value: "Hospitality" },
            { label: "scope", value: "Lighting + styling" },
        ],
        tags: ["Interior painting"],
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
        completed: { year: "2024", month: "04" },
        description: "Open office suite tuned for focus: ribbed glass, charcoal felt, and hidden linear light.",
        cover: "/office-4.jpg",
        palette: "from-cyan-300/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Workspace" },
            { label: "scope", value: "Prototype" },
        ],
        tags: ["Plaster performance"],
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
    {
        id: "showflat",
        title: "Showflat sheen",
        location: "Ulaanbaatar",
        completed: { year: "2023", month: "09" },
        description: "Model unit with crisp paint lines and warm staging.",
        cover: "/apartment-1.jpg",
        palette: "from-amber-200/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Residential" },
            { label: "scope", value: "Staging" },
        ],
        tags: ["Interior painting"],
        shots: [
            { src: "/apartment-2.jpg", alt: "Living room staging", layout: "wide" },
            { src: "/apartment-1.jpg", alt: "Dining edge", layout: "square" },
            { src: "/apartment-4.jpg", alt: "Bed vignette", layout: "tall" },
        ],
        gallery: [
            { src: "/apartment-1.jpg", alt: "Model living overview" },
            { src: "/apartment-2.jpg", alt: "Paint transitions" },
            { src: "/apartment-4.jpg", alt: "Bedroom paint tone" },
        ],
        highlight: "Neutral paint palette layered with soft lighting.",
    },
    {
        id: "atrium",
        title: "Atrium glaze",
        location: "CBD",
        completed: { year: "2022", month: "12" },
        description: "Public lobby with plastered curves and reflective glazing.",
        cover: "/hotel-3.jpg",
        palette: "from-indigo-300/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Lobby" },
            { label: "scope", value: "Plaster finish" },
        ],
        tags: ["Plaster performance"],
        shots: [
            { src: "/hotel-1.jpg", alt: "Lobby curve", layout: "wide" },
            { src: "/hotel-2.jpg", alt: "Ceiling wash", layout: "square" },
            { src: "/hotel-3.jpg", alt: "Atrium glow", layout: "wide" },
        ],
        gallery: [
            { src: "/hotel-3.jpg", alt: "Atrium overview" },
            { src: "/hotel-1.jpg", alt: "Plaster detail" },
            { src: "/hotel-2.jpg", alt: "Lighting on plaster" },
        ],
        highlight: "Satin plaster wraps the entry volumes.",
    },
    {
        id: "studio-lite",
        title: "Studio lite",
        location: "Tech park",
        completed: { year: "2024", month: "01" },
        description: "Minimal office shell with crisp paint and floating light.",
        cover: "/office-1.jpg",
        palette: "from-cyan-200/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Workspace" },
            { label: "scope", value: "Paint + lighting" },
        ],
        tags: ["Interior painting"],
        shots: [
            { src: "/office-1.jpg", alt: "Desk run", layout: "square" },
            { src: "/office-2.jpg", alt: "Meeting paint line", layout: "square" },
            { src: "/office-3.jpg", alt: "Open plan", layout: "wide" },
        ],
        gallery: [
            { src: "/office-1.jpg", alt: "Bench detail" },
            { src: "/office-2.jpg", alt: "Conference wall" },
            { src: "/office-3.jpg", alt: "Studio view" },
        ],
        highlight: "Clean paint breaks keep the space airy.",
    },
    {
        id: "bar-lounge",
        title: "Bar lounge polish",
        location: "City center",
        completed: { year: "2023", month: "06" },
        description: "Hospitality bar with plaster soffits and moody paint.",
        cover: "/hotel-6.jpg",
        palette: "from-amber-200/15 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Hospitality" },
            { label: "scope", value: "Plaster + paint" },
        ],
        tags: ["Interior painting", "Plaster performance"],
        shots: [
            { src: "/hotel-6.jpg", alt: "Bar counter", layout: "wide" },
            { src: "/hotel-3.jpg", alt: "Bar entry", layout: "square" },
            { src: "/hotel-2.jpg", alt: "Ceiling plaster", layout: "square" },
        ],
        gallery: [
            { src: "/hotel-6.jpg", alt: "Bar hero" },
            { src: "/hotel-3.jpg", alt: "Entry lounge" },
            { src: "/hotel-2.jpg", alt: "Plaster ceiling" },
        ],
        highlight: "Plaster soffits meet deep paint for contrast.",
    },
    {
        id: "loft-wash",
        title: "Loft wash",
        location: "Warehouse district",
        completed: { year: "2023", month: "03" },
        description: "Artist loft with limewash walls and exposed structure.",
        cover: "/apartment-1.jpg",
        palette: "from-stone-200/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Loft" },
            { label: "scope", value: "Limewash" },
        ],
        tags: ["Plaster performance"],
        shots: [
            { src: "/apartment-1.jpg", alt: "Loft seating", layout: "wide" },
            { src: "/before.jpg", alt: "Before state", layout: "square" },
            { src: "/after.jpg", alt: "After limewash", layout: "square" },
        ],
        gallery: [
            { src: "/apartment-1.jpg", alt: "Loft seating" },
            { src: "/before.jpg", alt: "Before" },
            { src: "/after.jpg", alt: "After" },
        ],
        highlight: "Limewash softens the industrial shell.",
    },
    {
        id: "suite-quiet",
        title: "Suite quiet",
        location: "Luxury tower",
        completed: { year: "2022", month: "09" },
        description: "Guest suite with layered paint tones and plaster coves.",
        cover: "/hotel-2.jpg",
        palette: "from-slate-200/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Suite" },
            { label: "scope", value: "Paint + plaster" },
        ],
        tags: ["Interior painting", "Plaster performance"],
        shots: [
            { src: "/hotel-2.jpg", alt: "Suite ceiling", layout: "square" },
            { src: "/hotel-1.jpg", alt: "Seating cove", layout: "wide" },
            { src: "/hotel-5.jpg", alt: "Entry corridor", layout: "square" },
        ],
        gallery: [
            { src: "/hotel-2.jpg", alt: "Ceiling detail" },
            { src: "/hotel-1.jpg", alt: "Seating cove" },
            { src: "/hotel-3.jpg", alt: "Entry corridor" },
        ],
        highlight: "Quiet tones and plaster coves for calm light.",
    },
    {
        id: "cafe-soft",
        title: "Cafe soft walls",
        location: "Corner block",
        completed: { year: "2024", month: "03" },
        description: "Cafe refresh with creamy plaster and accent paint.",
        cover: "/hotel-6.jpg",
        palette: "from-amber-100/20 via-white/5 to-transparent",
        stats: [
            { label: "zone", value: "Cafe" },
            { label: "scope", value: "Refresh" },
        ],
        tags: ["Interior painting"],
        shots: [
            { src: "/hotel-6.jpg", alt: "Cafe seating", layout: "wide" },
            { src: "/hotel-3.jpg", alt: "Bar detail", layout: "square" },
            { src: "/hotel-6.jpg", alt: "Lighting mood", layout: "square" },
        ],
        gallery: [
            { src: "/hotel-6.jpg", alt: "Cafe seating" },
            { src: "/hotel-3.jpg", alt: "Bar detail" },
            { src: "/hotel-6.jpg", alt: "Lighting mood" },
        ],
        highlight: "Soft plaster keeps the cafe warm and bright.",
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

import { type Language } from "@/contexts/LanguageContext";

export type ShotLayout = "wide" | "tall" | "square";
export type LocalizedText = Record<Language, string>;

export type LocalizedShot = {
    src: string;
    alt: LocalizedText;
    layout?: ShotLayout;
};

export type ProjectStat = {
    label: LocalizedText;
    value: LocalizedText;
};

export type BeforeAfter = {
    before: {
        image: string;
        title: LocalizedText;
        detail: LocalizedText;
    };
    after: {
        image: string;
        title: LocalizedText;
        detail: LocalizedText;
    };
};

export type ProjectTag = "interior-painting" | "plaster-performance";

export type Project = {
    id: string;
    title: LocalizedText;
    location: LocalizedText;
    duration?: LocalizedText;
    description: LocalizedText;
    cover: string;
    palette: string;
    stats: ProjectStat[];
    shots: LocalizedShot[];
    gallery: LocalizedShot[];
    beforeAfter?: BeforeAfter;
    highlight?: LocalizedText;
    tags?: ProjectTag[];
};

export const projects: Project[] = [
    {
        id: "dragon-terminal",
        title: {
            en: "New Ulaanbaatar Dragon Terminal building",
            mn: "Шинэ Улаанбаатар Драгон терминал барилга",
        },
        location: { en: "Songinokhairkhan District", mn: "Сонгинохайрхан дүүрэг" },
        duration: { en: "Duration: 6 months", mn: "Гүйцэтгэсэн хугацаа: 6 сар" },
        description: {
            en: "Interior fit-out for the Dragon passenger terminal.",
            mn: "Драгон зорчигчийн терминалын дотоод засал.",
        },
        cover: "/projects/dragon.jpg",
        palette: "from-cyan-300/20 via-white/5 to-transparent",
        stats: [],
        tags: ["plaster-performance"],
        shots: [],
        gallery: [],
    },

    {
        id: "ic-tower",
        title: { en: "IC Tower interior 1–15F", mn: "IC Tower 1–15 давхар дотоод засал" },
        location: { en: "Sukhbaatar District", mn: "Сүхбаатар дүүрэг" },
        duration: { en: "Duration: 6 months", mn: "Гүйцэтгэсэн хугацаа: 6 сар" },
        description: {
            en: "Interior and fit-out for floors 1–15.",
            mn: "IC Tower-ын 1–15 давхарын дотоод засал.",
        },
        cover: "/projects/ic-tower.jpg",
        palette: "from-indigo-300/20 via-white/5 to-transparent",
        stats: [],
        tags: ["plaster-performance"],
        shots: [],
        gallery: [],
    },

    {
        id: "byd-showroom",
        title: { en: "BYD Auto showroom", mn: "BYD авто машины үзүүлэнгийн төв" },
        location: { en: "Bayanzurkh District", mn: "Баянзүрх дүүрэг" },
        description: {
            en: "Showroom interior of BYD electric vehicles.",
            mn: "BYD цахилгаан автомашины үзүүлэнгийн төвийн интерьер.",
        },
        cover: "/projects/byd.jpg",
        palette: "from-amber-300/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "misheel-genesis",
        title: { en: "Misheel office – Genesis Camp", mn: "Мишээл оффис – Genesis Camp" },
        location: { en: "Khan-Uul District", mn: "Хан-Уул дүүрэг" },
        duration: { en: "Duration: 3 months", mn: "Гүйцэтгэсэн хугацаа: 3 сар" },
        description: {
            en: "Office interior for Genesis Camp LLC.",
            mn: "Genesis Camp LLC-ийн оффисын дотоод засал.",
        },
        cover: "/projects/misheel-genesis.jpg",
        palette: "from-cyan-200/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "private-house-1",
        title: { en: "Private house interior", mn: "Хувийн хаус интерьер дизайн" },
        location: { en: "Khan-Uul District", mn: "Хан-Уул дүүрэг" },
        duration: { en: "Duration: 1 month", mn: "Гүйцэтгэсэн хугацаа: 1 сар" },
        description: {
            en: "Interior design for residential private house.",
            mn: "Хувийн хаусын интерьер дизайн.",
        },
        cover: "/projects/private-house.jpg",
        palette: "from-amber-200/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "emart",
        title: { en: "Emart hypermarket interior", mn: "Emart гипермаркет дотоод засал" },
        location: { en: "Songinokhairkhan District", mn: "Сонгинохайрхан дүүрэг" },
        duration: { en: "Duration: 6 months", mn: "Гүйцэтгэсэн хугацаа: 6 сар" },
        description: {
            en: "Interior fit-out for Emart hypermarket.",
            mn: "Emart гипермаркетын дотоод засал.",
        },
        cover: "/projects/emart.jpg",
        palette: "from-cyan-300/20 via-white/5 to-transparent",
        stats: [],
        tags: ["plaster-performance"],
        shots: [],
        gallery: [],
    },

    {
        id: "gong-cha",
        title: { en: "Gong Cha Mongolia", mn: "Gong Cha Mongolia интерьер" },
        location: { en: "Khan-Uul & Bayanzurkh", mn: "Хан-Уул, Баянзүрх дүүрэг" },
        duration: { en: "Duration: 6 months", mn: "Гүйцэтгэсэн хугацаа: 6 сар" },
        description: {
            en: "Interior design for multiple Gong Cha branches.",
            mn: "Gong Cha Mongolia олон салбарын интерьер шийдэл.",
        },
        cover: "/projects/gong-cha.jpg",
        palette: "from-amber-300/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "misheel-aaa",
        title: { en: "Misheel office – AAA&S LLC", mn: "Мишээл оффис – AAA&S LLC" },
        location: { en: "Khan-Uul District", mn: "Хан-Уул дүүрэг" },
        duration: { en: "Duration: 4 months", mn: "Гүйцэтгэсэн хугацаа: 4 сар" },
        description: {
            en: "Office interior design for AAA&S LLC.",
            mn: "AAA&S LLC-ийн оффисын дотоод засал.",
        },
        cover: "/projects/misheel-aaa.jpg",
        palette: "from-cyan-200/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "caff-cafe",
        title: { en: "CAFF café interior", mn: "CAFF кофе шоп интерьер" },
        location: { en: "Sukhbaatar District", mn: "Сүхбаатар дүүрэг" },
        duration: { en: "Duration: 1 month", mn: "Гүйцэтгэсэн хугацаа: 1 сар" },
        description: {
            en: "Cozy interior design for CAFF coffee shop.",
            mn: "CAFF кофе шопын интерьер, төлөвлөлт.",
        },
        cover: "/projects/caff.jpg",
        palette: "from-amber-200/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "moujonjon",
        title: { en: "Moujonjon kidswear shop", mn: "Moujonjon хүүхдийн хувцасны дэлгүүр" },
        location: { en: "Khan-Uul District", mn: "Хан-Уул дүүрэг" },
        duration: { en: "Duration: 3 months", mn: "Гүйцэтгэсэн хугацаа: 3 сар" },
        description: {
            en: "Kidswear retail interior.",
            mn: "Хүүхдийн хувцасны дэлгүүрийн интерьер.",
        },
        cover: "/projects/moujonjon.jpg",
        palette: "from-cyan-200/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "beijing-exhibition",
        title: {
            en: "Mongolia–China exhibition design",
            mn: "Монгол–Хятадын үзэсгэлэнгийн зураг төсөл",
        },
        location: { en: "Beijing, China", mn: "Бээжин хот, Хятад улс" },
        duration: { en: "Duration: 3 months", mn: "Гүйцэтгэсэн хугацаа: 3 сар" },
        description: {
            en: "Exhibition design for a joint pavilion.",
            mn: "Хамтарсан павильоны үзэсгэлэнгийн дизайн.",
        },
        cover: "/projects/beijing.jpg",
        palette: "from-indigo-300/20 via-white/5 to-transparent",
        stats: [],
        tags: ["plaster-performance"],
        shots: [],
        gallery: [],
    },

    {
        id: "misheel-akaru",
        title: { en: "Misheel office – Akaru LLC", mn: "Мишээл оффис – Akaru LLC" },
        location: { en: "Khan-Uul District", mn: "Хан-Уул дүүрэг" },
        duration: { en: "Duration: 3 months", mn: "Гүйцэтгэсэн хугацаа: 3 сар" },
        description: {
            en: "Office interior for Akaru LLC.",
            mn: "Akaru LLC-ийн оффисын интерьер.",
        },
        cover: "/projects/akaru.jpg",
        palette: "from-cyan-200/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "private-apt",
        title: { en: "Private apartment interior", mn: "Хувийн орон сууц интерьер" },
        location: { en: "Khan-Uul District", mn: "Хан-Уул дүүрэг" },
        duration: { en: "Duration: 3 months", mn: "Гүйцэтгэсэн хугацаа: 3 сар" },
        description: {
            en: "Interior design for private residence.",
            mn: "Хувийн орон сууцны интерьер дизайн.",
        },
        cover: "/projects/private-apt.jpg",
        palette: "from-amber-200/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "bread-cafe",
        title: { en: "Bread Café social project", mn: "Bread Café – нийгмийн төсөл" },
        location: { en: "Songinokhairkhan District", mn: "Сонгинохайрхан дүүрэг" },
        duration: { en: "Duration: 2 weeks", mn: "Гүйцэтгэсэн хугацаа: 2 долоо хоног" },
        description: {
            en: "Cafe interior supporting disabled community.",
            mn: "Хөгжлийн бэрхшээлтэй иргэдийг дэмжих төсөл.",
        },
        cover: "/projects/bread.jpg",
        palette: "from-amber-300/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },

    {
        id: "we-love-fruit",
        title: { en: "We Love Fruit store", mn: "We Love Fruit жимсний дэлгүүр" },
        location: { en: "Khan-Uul District", mn: "Хан-Уул дүүрэг" },
        duration: { en: "Duration: 2 weeks", mn: "Гүйцэтгэсэн хугацаа: 2 долоо хоног" },
        description: {
            en: "Bright fruit retail store interior.",
            mn: "Жимсний дэлгүүрийн интерьер.",
        },
        cover: "/projects/we-love-fruit.jpg",
        palette: "from-cyan-200/20 via-white/5 to-transparent",
        stats: [],
        tags: ["interior-painting"],
        shots: [],
        gallery: [],
    },
];
import { type Language } from "@/contexts/LanguageContext";

export type ShotLayout = "wide" | "tall" | "square";

export type LocalizedText = Record<Language, string>;

export type LocalizedShot = {
    src: string;
    alt: LocalizedText;
    layout?: ShotLayout;
    positionY?: string;
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

export type ComparisonPair = BeforeAfter & {
    id: string;
};

export type ProjectTag = "interior-painting" | "plaster-performance";

export type Project = {
    id: string;
    title: LocalizedText;
    location: LocalizedText;
    completed?: {
        year: string;
        month: string;
    };
    description: LocalizedText;
    cover: string;
    palette: string;
    stats: ProjectStat[];
    shots: LocalizedShot[];
    gallery: LocalizedShot[];
    beforeAfter?: BeforeAfter;
    comparisons?: ComparisonPair[];
    highlight?: LocalizedText;
    tags?: ProjectTag[];
};

export type ProjectCategory = {
    id: string;
    title: LocalizedText;
    summary: LocalizedText;
    projectIds: string[];
    accent?: string;
};

const makeShot = (
    src: string,
    en: string,
    mn: string,
    layout?: ShotLayout
): LocalizedShot => {
    const base: LocalizedShot = {
        src,
        alt: { en, mn },
    };

    if (layout) base.layout = layout;
    return base;
};

const comingSoonShot = makeShot("/coming-soon.svg", "Coming soon", "Тун удахгүй");
const comingSoonGallery = [comingSoonShot];

const unsortedProjects: Project[] = [
    {
        id: "dragon-terminal",
        title: {
            en: "Shine Ulaanbaatar Dragon Terminal",
            mn: "Шинэ Улаанбаатар Драгон терминал",
        },
        location: { en: "", mn: "" },
        description: {
            en: "New Dragon terminal fit-out coordinated across districts.",
            mn: "Драгон терминалын шинэчлэл, олон дүүрэг дамнасан гүйцэтгэл.",
        },
        cover: "/Dragon/15.jpg",
        palette: "from-amber-300/20 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/Dragon/17.jpg", "Terminal entry hall", "Терминалын орох танхим", "wide"),
            makeShot("/Dragon/16.jpg", "Glass corridor lighting", "Шилэн коридор, гэрэлтүүлэг", "square"),
            makeShot("/Dragon/22.jpg", "Passenger lounge seating", "Зорчигчдын хүлээлгийн суудал", "square"),
            makeShot("/Dragon/20.jpg", "Passenger lounge seating", "Зорчигчдын хүлээлгийн суудал", "square"),
            makeShot("/Dragon/21.jpg", "Passenger lounge seating", "Зорчигчдын хүлээлгийн суудал", "square"),
            makeShot("/Dragon/18.jpg", "Passenger lounge seating", "Зорчигчдын хүлээлгийн суудал", "square"),
            makeShot("/Dragon/19.png", "Passenger lounge seating", "Зорчигчдын хүлээлгийн суудал", "square"),
            makeShot("/Dragon/15.jpg", "Passenger lounge seating", "Зорчигчдын хүлээлгийн суудал", "square"),
        ],
        gallery: [],
        comparisons: [
            {
                id: "dragon-17-15",
                before: {
                    image: "/Dragon/15.jpg",
                    title: { mn: "№16", en: "#17" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/Dragon/16.jpg",
                    title: { mn: "№15", en: "#15" },
                    detail: { mn: "", en: "" },
                },
            },
            {
                id: "dragon-16-22",
                before: {
                    image: "/Dragon/17.jpg",
                    title: { mn: "№17", en: "#16" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/Dragon/18.jpg",
                    title: { mn: "№22", en: "#22" },
                    detail: { mn: "", en: "" },
                },
            },
            {
                id: "dragon-20-21",
                before: {
                    image: "/Dragon/19.png",
                    title: { mn: "№20", en: "#20" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/Dragon/20.jpg",
                    title: { mn: "№21", en: "#21" },
                    detail: { mn: "", en: "" },
                },
            },
            {
                id: "dragon-18-19",
                before: {
                    image: "/Dragon/21.jpg",
                    title: { mn: "№18", en: "#18" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/Dragon/22.jpg",
                    title: { mn: "№19", en: "#19" },
                    detail: { mn: "", en: "" },
                },
            },
        ],
    },
    {
        id: "ic-tower",
        title: {
            en: "IC Tower 1-15 floors interior",
            mn: "“IC Tower”-ын 1-15 давхарын дотоод засал",
        },
        location: { en: "", mn: "" },
        description: {
            en: "Full interior build-out across fifteen floors.",
            mn: "15 давхарын иж бүрэн дотоод засал.",
        },
        cover: "/ICtower/35.jpg",
        palette: "from-cyan-300/20 via-white/5 to-white/0",
        stats: [],
        shots: comingSoonGallery,
        gallery: [
            makeShot("/ICtower/30.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/ICtower/R6.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/ICtower/R8.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/ICtower/29.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/ICtower/R11.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/ICtower/R2.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
        ],
        comparisons: [
            {
                id: "28-29",
                before: {
                    image: "/ICtower/28.jpg",
                    title: { mn: "№28", en: "#28" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/ICtower/29.jpg",
                    title: { mn: "№29", en: "#29" },
                    detail: { mn: "", en: "" },
                },
            },
            {
                id: "30-31",
                before: {
                    image: "/ICtower/30.jpg",
                    title: { mn: "№30", en: "#30" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/ICtower/31.jpg",
                    title: { mn: "№31", en: "#31" },
                    detail: { mn: "", en: "" },
                },
            },
            {
                id: "32-33",
                before: {
                    image: "/ICtower/32.jpg",
                    title: { mn: "№32", en: "#32" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/ICtower/33.jpg",
                    title: { mn: "№33", en: "#33" },
                    detail: { mn: "", en: "" },
                },
            },
            {
                id: "34-35",
                before: {
                    image: "/ICtower/34.jpg",
                    title: { mn: "№34", en: "#34" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/ICtower/35.jpg",
                    title: { mn: "№35", en: "#35" },
                    detail: { mn: "", en: "" },
                },
            },
        ],
    },
    {
        id: "byd-showroom",
        title: { en: "BYD vehicle showroom", mn: "BYD авто машины үзүүлэнгийн танхим" },
        location: { en: "", mn: "" },
        description: {
            en: "Showroom interior tuned for EV display.",
            mn: "Электро машины үзүүлэнгийн танхимын интерьер.",
        },
        cover: comingSoonShot.src,
        palette: "from-indigo-300/20 via-white/5 to-white/0",
        stats: [],
        shots: [],
        gallery: [],
    },
    {
        id: "misheel-office-genesis",
        title: { en: "Misheel Office - Genesis camp", mn: "Мишээл Оффис - Genesis camp" },
        location: { en: "", mn: "" },
        description: {
            en: "Office interior for Genesis camp at Misheel center.",
            mn: "Мишээл төв дэх Genesis camp-ийн оффисын интерьер.",
        },
        cover: "/Genesis/Scene_4.JPG",
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/Genesis/Scene_4.JPG", "Open office overview", "Нээлттэй ажлын талбай", "wide"),
            makeShot("/Genesis/Scene_3.JPG", "Reception lounge", "Хүлээн авах хэсэг", "square"),
            makeShot("/Genesis/Scene_6.JPG", "Meeting room", "Хурлын өрөө", "square"),
        ],
        gallery: [
            makeShot("/Genesis/Scene_4.JPG", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/Genesis/Scene_3.JPG", "Reception lounge", "Хүлээн авах хэсэг"),
            makeShot("/Genesis/Scene_6.JPG", "Meeting room", "Хурлын өрөө"),
            makeShot("/Genesis/Scene_7.JPG", "Workspace row", "Ажлын ширээний эгнээ"),
            makeShot("/Genesis/Scene_8.JPG", "Breakout seating", "Амрах хэсгийн суудал"),
        ],
    },
    {
        id: "private-house-interior",
        title: { en: "House interior design", mn: "Хаусны интерьер дизайн" },
        location: { en: "", mn: "" },
        description: {
            en: "Tailored interior for house.",
            mn: "Хаусны захиалгат интерьер.",
        },
        cover: "/PersHous/1.png",
        palette: "from-amber-300/15 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/personal house/Enscape_2026-01-16-15-42-19.png", "Living room panorama", "Зочны өрөөний харагдац", "wide"),
            makeShot("/personal house/Enscape_2026-01-16-16-19-00.png", "Open living area", "Нээлттэй зочны хэсэг", "square"),
            makeShot("/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 6.png", "Dining and kitchen view", "Гал тогоо, зоогийн хэсэг", "square"),
        ],
        gallery: [
            makeShot("/PersHous/4.png", "Living room panorama", "Зочны өрөөний харагдац"),
            makeShot("/PersHous/2.png", "Open living area", "Нээлттэй зочны хэсэг"),
            {
                ...makeShot("/PersHous/14.png", "Dining and kitchen view", "Гал тогоо, зоогийн хэсэг"),
                positionY: "90%",
            },
            makeShot("/PersHous/3.png", "Entry perspective", "Орох хэсгийн харагдац"),
            makeShot("/PersHous/13.png", "Bedroom corner", "Унтлагын өрөөний булан"),
            makeShot("/PersHous/8.png", "Bedroom corner", "Унтлагын өрөөний булан"),
        ],
    },
    {
        id: "emart-hypermarket",
        title: { en: "Emart Hypermarket interior", mn: "Emart Hypermarket - Дотоод засал" },
        location: { en: "", mn: "" },
        description: {
            en: "Large-format retail interior refresh.",
            mn: "Том худалдааны талбайн шинэчлэл.",
        },
        cover: "/emart/24.png",
        palette: "from-indigo-200/20 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/emart/Screenshot 2025-12-19 at 15.55.33.png", "Hypermarket central aisle", "Хайпермаркетын төв коридор", "wide"),
            makeShot("/emart/27.jpg", "Ceiling lighting grid", "Таазны гэрэлтүүлгийн тор", "square"),
        ],
        gallery: [
            makeShot("/emart/25.jpg", "Hypermarket central aisle", "Хайпермаркетын төв коридор"),
            makeShot("/emart/26.jpg", "Checkout perspective", "Тооцооны хэсгийн харагдац"),
            makeShot("/emart/Screenshot 2025-12-19 at 15.55.19.png", "Checkout perspective", "Тооцооны хэсгийн харагдац"),
        ],
        comparisons: [
            {
                id: "emart-25-26",
                before: {
                    image: "/emart/24.png",
                    title: { mn: "№25", en: "#25" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/emart/Screenshot 2025-12-19 at 15.54.54.png",
                    title: { mn: "№26", en: "#26" },
                    detail: { mn: "", en: "" },
                },
            },
            {
                id: "emart-27-155519",
                before: {
                    image: "/emart/26.jpg",
                    title: { mn: "№27", en: "#27" },
                    detail: { mn: "", en: "" },
                },
                after: {
                    image: "/emart/Screenshot 2025-12-19 at 15.55.33.png",
                    title: { mn: "№2", en: "#2" },
                    detail: { mn: "", en: "" },
                },
            },
        ],
    },
    {
        id: "gong-cha",
        title: { en: "Gong cha Mongolia interior", mn: "Gong cha Mongolia – Интерьер дизайн" },
        location: { en: "", mn: "" },
        description: {
            en: "Tea brand cafe interior with warm palette.",
            mn: "Цайны брэндийн кафе интерьер, дулаан өнгөлгөөтэй.",
        },
        cover: "/Gongcha/enhanced-Enscape_2026-01-19-05-07-35.png",
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [],
        shots: comingSoonGallery,
        gallery: [
            makeShot("/Gongcha/enhanced-Enscape_2026-01-19-04-44-31.png", "Office overview", "Оффисын ерөнхий төлөв"),
            makeShot("/Gongcha/enhanced-Enscape_2026-01-19-04-55-45.png", "Reception lounge", "Хүлээн авах хэсэг"),
            makeShot("/Gongcha/enhanced-Enscape_2026-01-19-05-07-35.png", "Workstation row", "Ажлын ширээний эгнээ"),
            makeShot("/Gongcha/enhanced-Enscape_2026-01-19-05-20-37.png", "Meeting corner", "Хурал, уулзалтын булан"),
            makeShot("/Gongcha/enhanced-Enscape_2026-01-19-05-40-49.png", "Office overview", "Оффисын ерөнхий төлөв"),
        ],
    },
    {
        id: "misheel-office-aaa",
        title: { en: "Misheel Office - AAA & S LLC", mn: "Мишээл Оффис - AAA & S ХХК" },
        location: { en: "", mn: "" },
        description: {
            en: "Office build for AAA & S at Misheel complex.",
            mn: "Мишээл цогцолборт AAA & S компанийн оффисын гүйцэтгэл.",
        },
        cover: "/aaa%26c/SCENE_1.JPG",
        palette: "from-cyan-200/20 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/aaa%26c/SCENE_4.JPG", "Office overview", "Оффисын ерөнхий төлөв", "wide"),
            makeShot("/aaa%26c/SCENE_1.JPG", "Reception lounge", "Хүлээн авах хэсэг", "square"),
            makeShot("/aaa%26c/SCENE_6.JPG", "Workstation row", "Ажлын ширээний эгнээ", "square"),
        ],
        gallery: [
            makeShot("/aaa%26c/SCENE_4.JPG", "Office overview", "Оффисын ерөнхий төлөв"),
            makeShot("/aaa%26c/SCENE_1.JPG", "Reception lounge", "Хүлээн авах хэсэг"),
            makeShot("/aaa%26c/SCENE_6.JPG", "Workstation row", "Ажлын ширээний эгнээ"),
            makeShot("/aaa%26c/SCENE_3.JPG", "Meeting corner", "Хурал, уулзалтын булан"),
        ],
    },
    {
        id: "moujonjon",
        title: {
            en: "Moujonjon kids store interior",
            mn: "“Moujonjon” хүүхдийн хувцасны дэлгүүр - дотоод засал",
        },
        location: { en: "", mn: "" },
        description: {
            en: "Playful retail interior for a childrenswear brand.",
            mn: "Хүүхдийн хувцасны брэндийн хөгжилтэй интерьер.",
        },
        cover: "/moujonjon/IMG_2502.jpg",
        palette: "from-stone-200/20 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/moujonjon/23.png", "Kids store overview", "Хүүхдийн дэлгүүрийн харагдац", "wide"),
            makeShot("/moujonjon/Scene_5-3_UNGU-2.JPG", "Display wall", "Дисплей хана", "square"),
            makeShot("/moujonjon/Scene_6_UNGU-2.JPG", "Cash wrap and shelving", "Кассын хэсэг, тавиур", "square"),
        ],
        gallery: [
            makeShot("/moujonjon/23.png", "Kids store overview", "Хүүхдийн дэлгүүрийн харагдац"),
            makeShot("/moujonjon/13.jpg", "Display wall", "Дисплей хана"),
            makeShot("/moujonjon/14.jpg", "Cash wrap and shelving", "Кассын хэсэг, тавиур"),
            makeShot("/moujonjon/15.jpg", "Entrance arch", "Орох хэсгийн нум"),
            makeShot("/moujonjon/16.jpg", "Built store photo", "Дэлгүүрийн зураг"),
            makeShot("/moujonjon/17.jpg", "Built store photo", "Дэлгүүрийн зураг"),
            makeShot("/moujonjon/viber_image_2025-04-11_18-15-16-372.jpg", "Colorful shelving detail", "Өнгөлөг тавиурын деталь"),
        ],
    },
    {
        id: "mongol-china-expo",
        title: {
            en: "Mongol-China expo concept",
            mn: "“Монгол - Хятад”-ын үзэсгэлэнгийн зураг төсөл",
        },
        location: { en: "", mn: "" },
        description: {
            en: "Exhibition design bridging two cultures.",
            mn: "Хоёр орныг холбосон үзэсгэлэнгийн дизайн.",
        },
        cover: "/MCexpo/composed-Enscape_2026-01-29-11-32-55.jpg",
        palette: "from-indigo-200/20 via-white/5 to-white/0",
        stats: [],
        shots: comingSoonGallery,
        gallery: [
            makeShot("/MCexpo/composed-Enscape_2026-01-29-04-27-10.jpg", "Built photo 1", "Зураг 1"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-04-50-04.jpg", "Built photo 2", "Зураг 2"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-11-19-07.jpg", "Built photo 3", "Зураг 3"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-11-32-55.jpg", "Built photo 4", "Зураг 4"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-11-52-11.jpg", "Built photo 5", "Зураг 5"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-12-34-32.jpg", "Built photo 6", "Зураг 6"),
            makeShot("/MCexpo/enhanced-Enscape_2026-01-29-04-14-12.jpg", "Built photo 7", "Зураг 7"),
        ],
    },
];

const projectsWithPlaceholderComparison: Project[] = unsortedProjects.map((project) => ({
    ...project,
    beforeAfter:
        project.beforeAfter ??
        {
            before: {
                image: comingSoonShot.src,
                title: comingSoonShot.alt,
                detail: { en: "", mn: "" },
            },
            after: {
                image: comingSoonShot.src,
                title: comingSoonShot.alt,
                detail: { en: "", mn: "" },
            },
        },
}));

export const projects: Project[] = [...projectsWithPlaceholderComparison].sort((a, b) => {
    const aComingSoon = a.cover === comingSoonShot.src;
    const bComingSoon = b.cover === comingSoonShot.src;

    if (aComingSoon === bComingSoon) return 0;
    return aComingSoon ? 1 : -1;
});

export const projectCategories: ProjectCategory[] = [
    {
        id: "all-projects",
        title: { en: "All projects", mn: "Бүх төслүүд" },
        summary: {
            en: "Selection of completed interiors and fit-outs.",
            mn: "Хийгдсэн интерьер, гүйцэтгэлийн сонголт.",
        },
        projectIds: projects.map((p) => p.id),
        accent: "from-amber-100 via-white to-white",
    },
];
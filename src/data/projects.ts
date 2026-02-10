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

const makeShot = (src: string, en: string, mn: string, layout?: ShotLayout): LocalizedShot => {
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
        title: { en: "Shine Ulaanbaatar Dragon Terminal", mn: "Шинэ Улаанбаатар Драгон терминал" },
        location: { en: "", mn: "" },
        description: {
            en: "New Dragon terminal fit-out coordinated across districts.",
            mn: "Драгон терминалын шинэчлэл, олон дүүрэг дамнасан гүйцэтгэл.",
        },
        cover: "/new dragon/Screenshot 2025-12-19 at 16.11.57.png",
        palette: "from-amber-300/20 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/new dragon/484850189_634016686272365_2178969295659040394_n.jpg", "Terminal entry hall", "Терминалын орох танхим", "wide"),
            makeShot("/new dragon/Screenshot 2025-12-19 at 16.11.02.png", "Glass corridor lighting", "Шилэн коридор, гэрэлтүүлэг", "square"),
            makeShot("/new dragon/485741995_634016859605681_1354489228861073968_n.jpg", "Passenger lounge seating", "Зорчигчдын хүлээлгийн суудал", "square"),
        ],
        gallery: [

        ],
    },
    {
        id: "ic-tower",
        title: { en: "IC Tower 1-15 floors interior", mn: "“IC Tower”-ын 1-15 давхарын дотоод засал" },
        location: { en: "", mn: "" },
        description: {
            en: "Full interior build-out across fifteen floors.",
            mn: "15 давхарын иж бүрэн дотоод засал.",
        },
        cover: comingSoonShot.src,
        palette: "from-cyan-300/20 via-white/5 to-white/0",
        stats: [],
        shots: comingSoonGallery,
        gallery: [
            makeShot("/Genesis/SR1.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/Genesis/R2.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/Genesis/R6.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/Genesis/R8.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/Genesis/R9.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
            makeShot("/Genesis/r11.jpg", "Open office overview", "Нээлттэй ажлын талбай"),
        ]
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
        title: { en: "Private house interior design", mn: "Хувийн хаусны интерьер дизайн" },
        location: { en: "", mn: "" },
        description: {
            en: "Tailored interior for a private house.",
            mn: "Хувийн хаусны захиалгат интерьер.",
        },
        cover: "/personal house/Enscape_2026-01-30-18-16-34.png",
        palette: "from-amber-300/15 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/personal house/Enscape_2026-01-16-15-42-19.png", "Living room panorama", "Зочны өрөөний харагдац", "wide"),
            makeShot("/personal house/Enscape_2026-01-16-16-19-00.png", "Open living area", "Нээлттэй зочны хэсэг", "square"),
            makeShot("/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 6.png", "Dining and kitchen view", "Гал тогоо, зоогийн хэсэг", "square"),
        ],
        gallery: [
            makeShot("/personal house/Enscape_2026-01-30-18-16-34.png", "Living room panorama", "Зочны өрөөний харагдац"),
            makeShot("/personal house/Enscape_2026-02-03-11-42-12.png", "Open living area", "Нээлттэй зочны хэсэг"),
            makeShot("/personal house/Enscape_2026-02-02-17-50-59.png", "Dining and kitchen view", "Гал тогоо, зоогийн хэсэг"),
            makeShot("/personal house/Enscape_2026-02-03-18-34-30.png", "Entry perspective", "Орох хэсгийн харагдац"),
            makeShot("/personal house/Enscape_2026-02-04-17-19-40.png", "Bedroom corner", "Унтлагын өрөөний булан"),
            makeShot("/personal house/Enscape_2026-02-06-20-04-58.png", "Bedroom corner", "Унтлагын өрөөний булан"),
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
        cover: "/emart/Screenshot 2025-12-19 at 15.54.54.png",
        palette: "from-indigo-200/20 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/emart/Screenshot 2025-12-19 at 15.55.33.png", "Hypermarket central aisle", "Хайпермаркетын төв коридор", "wide"),
            makeShot("/emart/Screenshot 2025-12-19 at 15.54.54.png", "Checkout perspective", "Тооцооны хэсгийн харагдац", "square"),
            makeShot("/emart/Screenshot 2025-12-19 at 15.55.19.png", "Ceiling lighting grid", "Таазны гэрэлтүүлгийн тор", "square"),
        ],
        gallery: [
            makeShot("/emart/Screenshot 2025-12-19 at 15.55.33.png", "Hypermarket central aisle", "Хайпермаркетын төв коридор"),
            makeShot("/emart/Screenshot 2025-12-19 at 15.54.54.png", "Checkout perspective", "Тооцооны хэсгийн харагдац"),
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
            makeShot("/Gongcha/enhanced-Enscape_2026-01-19-05-40-49.png", "Office overview", "Оффисын ерөнхий төлөв")
        ]
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
        title: { en: "Moujonjon kids store interior", mn: "“Moujonjon” хүүхдийн хувцасны дэлгүүр - дотоод засал" },
        location: { en: "", mn: "" },
        description: {
            en: "Playful retail interior for a childrenswear brand.",
            mn: "Хүүхдийн хувцасны брэндийн хөгжилтэй интерьер.",
        },
        cover: "/moujonjon/IMG_2502.jpg",
        palette: "from-stone-200/20 via-white/5 to-white/0",
        stats: [],
        shots: [
            makeShot("/moujonjon/Scene_3_UNGU-2.JPG", "Kids store overview", "Хүүхдийн дэлгүүрийн харагдац", "wide"),
            makeShot("/moujonjon/Scene_5-3_UNGU-2.JPG", "Display wall", "Дисплей хана", "square"),
            makeShot("/moujonjon/Scene_6_UNGU-2.JPG", "Cash wrap and shelving", "Кассын хэсэг, тавиур", "square"),
        ],
        gallery: [
            makeShot("/moujonjon/IMG_2502.jpg", "Kids store overview", "Хүүхдийн дэлгүүрийн харагдац"),
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
        title: { en: "Mongol-China expo concept", mn: "“Монгол - Хятад”-ын үзэсгэлэнгийн зураг төсөл" },
        location: { en: "", mn: "" },
        description: {
            en: "Exhibition design bridging two cultures.",
            mn: "Хоёр орныг холбосон үзэсгэлэнгийн дизайн.",
        },
        cover: "/MCexpo/composed-Enscape_2026-01-29-11-32-55.jpg",
        palette: "from-indigo-200/20 via-white/5 to-white/0",
        stats: [],
        shots: comingSoonGallery,
        gallery:  [
            makeShot("/MCexpo/composed-Enscape_2026-01-29-04-27-10.jpg", "Built photo 1", "Зураг 1"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-04-50-04.jpg", "Built photo 2", "Зураг 2"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-11-19-07.jpg", "Built photo 3", "Зураг 3"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-11-32-55.jpg", "Built photo 4", "Зураг 4"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-11-52-11.jpg", "Built photo 5", "Зураг 5"),
            makeShot("/MCexpo/composed-Enscape_2026-01-29-12-34-32.jpg", "Built photo 6", "Зураг 6"),
            makeShot("/MCexpo/enhanced-Enscape_2026-01-29-04-14-12.jpg", "Built photo 7", "Зураг 7"),
        ]
    },
];

const projectsWithPlaceholderComparison: Project[] = unsortedProjects.map((project) => ({
    ...project,
    beforeAfter: {
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
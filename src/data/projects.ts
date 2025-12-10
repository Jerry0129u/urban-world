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

const baseGallery = [
    makeShot("/apartment-1.jpg", "Space overview", "Нийтлэг харагдац"),
    makeShot("/apartment-2.jpg", "Feature wall", "Онцлох хана"),
    makeShot("/apartment-4.jpg", "Lighting detail", "Гэрлийн деталь"),
    makeShot("/hotel-1.jpg", "Seating zone", "Суудлын хэсэг"),
    makeShot("/hotel-2.jpg", "Ceiling accent", "Таазны акцент"),
    makeShot("/hotel-6.jpg", "Warm vignette", "Дулаан хэсэг"),
];

const durationStat = (textEn: string, textMn: string): ProjectStat => ({
    label: { en: "Duration", mn: "Гүйцэтгэсэн хугацаа" },
    value: { en: textEn, mn: textMn },
});

export const projects: Project[] = [
    {
        id: "dragon-terminal",
        title: { en: "Shine Ulaanbaatar Dragon Terminal", mn: "Шинэ Улаанбаатар Драгон терминал" },
        location: { en: "Songinokhairkhan / Sukhbaatar", mn: "Сонгинохайрхан, Сүхбаатар" },
        completed: { year: "2024", month: "06" },
        description: {
            en: "New Dragon terminal fit-out coordinated across districts.",
            mn: "Драгон терминалын шинэчлэл, олон дүүрэг дамнасан гүйцэтгэл.",
        },
        cover: "/hotel-3.jpg",
        palette: "from-amber-300/20 via-white/5 to-white/0",
        stats: [durationStat("6 months", "6 сар")],
        shots: [
            makeShot("/hotel-3.jpg", "Terminal lobby", "Терминал лобби", "wide"),
            makeShot("/hotel-1.jpg", "Waiting zone", "Хүлээлгийн хэсэг", "square"),
            makeShot("/hotel-2.jpg", "Lighting spine", "Гэрлийн шугам", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "ic-tower",
        title: { en: "IC Tower 1-15 floors interior", mn: "“IC Tower”-ын 1-15 давхарын дотоод засал" },
        location: { en: "Bayanzurkh district", mn: "Баянзүрх дүүрэг" },
        completed: { year: "2024", month: "06" },
        description: {
            en: "Full interior build-out across fifteen floors.",
            mn: "15 давхарын иж бүрэн дотоод засал.",
        },
        cover: "/office-4.jpg",
        palette: "from-cyan-300/20 via-white/5 to-white/0",
        stats: [durationStat("6 months", "6 сар")],
        shots: [
            makeShot("/office-4.jpg", "Tower lobby", "Цамхгийн лобби", "wide"),
            makeShot("/office-2.jpg", "Conference", "Хурлын өрөө", "square"),
            makeShot("/office-3.jpg", "Open office", "Нээлттэй оффис", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "byd-showroom",
        title: { en: "BYD vehicle showroom", mn: "BYD авто машины үзүүлэнгийн танхим" },
        location: { en: "Khan-Uul district", mn: "Хан-Уул дүүрэг" },
        completed: { year: "2024", month: "01" },
        description: {
            en: "Showroom interior tuned for EV display.",
            mn: "Электро машины үзүүлэнгийн танхимын интерьер.",
        },
        cover: "/hotel-6.jpg",
        palette: "from-indigo-300/20 via-white/5 to-white/0",
        stats: [durationStat("1 month", "1 сар")],
        shots: [
            makeShot("/hotel-6.jpg", "Showroom front", "Үзүүлэнгийн урд тал", "wide"),
            makeShot("/hotel-1.jpg", "Lounge corner", "Лоунжийн булан", "square"),
            makeShot("/hotel-2.jpg", "Ceiling wash", "Таазны гэрэл", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "misheel-office-genesis",
        title: { en: "Misheel Office - Genesis camp", mn: "Мишээл Оффис - Genesis camp" },
        location: { en: "Khan-Uul district", mn: "Хан-Уул дүүрэг" },
        completed: { year: "2024", month: "03" },
        description: {
            en: "Office interior for Genesis camp at Misheel center.",
            mn: "Мишээл төв дэх Genesis camp-ийн оффисын интерьер.",
        },
        cover: "/office-3.jpg",
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: [
            makeShot("/office-3.jpg", "Workspace overview", "Ажлын хэсгийн харагдац", "wide"),
            makeShot("/office-2.jpg", "Meeting room", "Хурлын өрөө", "square"),
            makeShot("/office-1.jpg", "Bench detail", "Вандангийн деталь", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "private-house-interior",
        title: { en: "Private house interior design", mn: "Хувийн хаусны интерьер дизайн" },
        location: { en: "Songinokhairkhan district", mn: "Сонгинохайрхан дүүрэг" },
        completed: { year: "2024", month: "01" },
        description: {
            en: "Tailored interior for a private house.",
            mn: "Хувийн хаусны захиалгат интерьер.",
        },
        cover: "/apartment-2.jpg",
        palette: "from-amber-300/15 via-white/5 to-white/0",
        stats: [durationStat("1 month", "1 сар")],
        shots: [
            makeShot("/apartment-2.jpg", "Living room", "Зочны өрөө", "wide"),
            makeShot("/apartment-1.jpg", "Dining edge", "Зоогийн хэсэг", "square"),
            makeShot("/apartment-4.jpg", "Bedroom corner", "Унтлагын булан", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "emart-hypermarket",
        title: { en: "Emart Hypermarket interior", mn: "Emart Hypermarket - Дотоод засал" },
        location: { en: "Khan-Uul & Bayanzurkh", mn: "Хан-Уул, Баянзүрх дүүрэг" },
        completed: { year: "2024", month: "06" },
        description: {
            en: "Large-format retail interior refresh.",
            mn: "Том худалдааны талбайн шинэчлэл.",
        },
        cover: "/hotel-1.jpg",
        palette: "from-indigo-200/20 via-white/5 to-white/0",
        stats: [durationStat("6 months", "6 сар")],
        shots: [
            makeShot("/hotel-1.jpg", "Entry aisle", "Орох хэсэг", "wide"),
            makeShot("/hotel-2.jpg", "Lighting lane", "Гэрлийн эгнээ", "square"),
            makeShot("/hotel-6.jpg", "Checkout zone", "Тооцооны хэсэг", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "gong-cha",
        title: { en: "Gong cha Mongolia interior", mn: "Gong cha Mongolia – Интерьер дизайн" },
        location: { en: "Khan-Uul district", mn: "Хан-Уул дүүрэг" },
        completed: { year: "2024", month: "06" },
        description: {
            en: "Tea brand cafe interior with warm palette.",
            mn: "Цайны брэндийн кафе интерьер, дулаан өнгөлгөөтэй.",
        },
        cover: "/hotel-6.jpg",
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [durationStat("6 months", "6 сар")],
        shots: [
            makeShot("/hotel-6.jpg", "Cafe seating", "Кафены суудал", "wide"),
            makeShot("/hotel-3.jpg", "Bar detail", "Баарны деталь", "square"),
            makeShot("/hotel-2.jpg", "Ceiling mood", "Таазны уур", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "misheel-office-aaa",
        title: { en: "Misheel Office - AAA & S LLC", mn: "Мишээл Оффис - AAA & S ХХК" },
        location: { en: "Sukhbaatar district", mn: "Сүхбаатар дүүрэг" },
        completed: { year: "2024", month: "04" },
        description: {
            en: "Office build for AAA & S at Misheel complex.",
            mn: "Мишээл цогцолборт AAA & S компанийн оффисын гүйцэтгэл.",
        },
        cover: "/office-2.jpg",
        palette: "from-cyan-200/20 via-white/5 to-white/0",
        stats: [durationStat("4 months", "4 сар")],
        shots: [
            makeShot("/office-2.jpg", "Meeting zone", "Хурлын хэсэг", "square"),
            makeShot("/office-1.jpg", "Work desk line", "Ширээний эгнээ", "square"),
            makeShot("/office-3.jpg", "Reception", "Хүлээн авалт", "wide"),
        ],
        gallery: baseGallery,
    },
    {
        id: "caff-cafe",
        title: { en: "Caff cafe shop interior", mn: "Caff cafe shop – Интерьер дизайн" },
        location: { en: "Khan-Uul district", mn: "Хан-Уул дүүрэг" },
        completed: { year: "2024", month: "01" },
        description: {
            en: "Cozy cafe design for Caff shop.",
            mn: "Caff кафе шопын дулаан интерьер.",
        },
        cover: "/hotel-3.jpg",
        palette: "from-amber-100/20 via-white/5 to-white/0",
        stats: [durationStat("1 month", "1 сар")],
        shots: [
            makeShot("/hotel-3.jpg", "Cafe overview", "Кафены ерөнхий", "wide"),
            makeShot("/hotel-1.jpg", "Seating", "Суудал", "square"),
            makeShot("/hotel-2.jpg", "Lighting detail", "Гэрлийн деталь", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "moujonjon",
        title: {
            en: "Moujonjon kids store interior",
            mn: "“Moujonjon” хүүхдийн хувцасны дэлгүүр - дотоод засал",
        },
        location: { en: "Beijing, China", mn: "Хятад улс, Бээжин хот" },
        completed: { year: "2023", month: "03" },
        description: {
            en: "Playful retail interior for a childrenswear brand.",
            mn: "Хүүхдийн хувцасны брэндийн хөгжилтэй интерьер.",
        },
        cover: "/apartment-1.jpg",
        palette: "from-stone-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: [
            makeShot("/apartment-1.jpg", "Store entry", "Дэлгүүрийн орц", "wide"),
            makeShot("/apartment-2.jpg", "Display wall", "Дисплей хана", "square"),
            makeShot("/apartment-4.jpg", "Fitting corner", "Хувцас солих булан", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "mongol-china-expo",
        title: { en: "Mongol-China expo concept", mn: "“Монгол - Хятад”-ын үзэсгэлэнгийн зураг төсөл" },
        location: { en: "Khan-Uul district", mn: "Хан-Уул дүүрэг" },
        completed: { year: "2023", month: "03" },
        description: {
            en: "Exhibition design bridging two cultures.",
            mn: "Хоёр орныг холбосон үзэсгэлэнгийн дизайн.",
        },
        cover: "/hotel-2.jpg",
        palette: "from-indigo-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: [
            makeShot("/hotel-2.jpg", "Exhibit hall", "Үзэсгэлэнгийн танхим", "wide"),
            makeShot("/hotel-3.jpg", "Graphic wall", "График ханын хэсэг", "square"),
            makeShot("/hotel-6.jpg", "Lighting mood", "Гэрлийн уур", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "misheel-office-akaru",
        title: { en: "Misheel Office – Akaru LLC", mn: "Мишээл Оффис – “Akaru” ХХК" },
        location: { en: "Khan-Uul district", mn: "Хан-Уул дүүрэг" },
        completed: { year: "2023", month: "03" },
        description: {
            en: "Office interior for Akaru at Misheel complex.",
            mn: "Мишээл цогцолборт Akaru компанийн оффисын интерьер.",
        },
        cover: "/office-1.jpg",
        palette: "from-cyan-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: [
            makeShot("/office-1.jpg", "Workspace", "Ажлын хэсэг", "square"),
            makeShot("/office-2.jpg", "Meeting", "Хурлын өрөө", "square"),
            makeShot("/office-3.jpg", "Breakout", "Амралтын хэсэг", "wide"),
        ],
        gallery: baseGallery,
    },
    {
        id: "private-apartment-interior",
        title: { en: "Private apartment interior", mn: "Хувийн орон сууцны интерьер дизайн" },
        location: { en: "Songinokhairkhan district", mn: "Сонгинохайрхан дүүрэг" },
        completed: { year: "2023", month: "03" },
        description: {
            en: "Calm apartment interior tailored to the owner.",
            mn: "Эзэндээ тохируулсан тайван орон сууцны интерьер.",
        },
        cover: "/apartment-4.jpg",
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: [
            makeShot("/apartment-4.jpg", "Bedroom", "Унтлагын өрөө", "tall"),
            makeShot("/apartment-1.jpg", "Living area", "Зочны хэсэг", "wide"),
            makeShot("/apartment-2.jpg", "Dining", "Зоогийн хэсэг", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "bread-cafe",
        title: {
            en: "Bread café – social responsibility",
            mn: "Bread café – Нийгмийн хариуцлагын хүрээнд",
        },
        location: { en: "Khan-Uul district", mn: "Хан-Уул дүүрэг" },
        completed: { year: "2023", month: "02" },
        description: {
            en: "Inclusive cafe designed for accessibility.",
            mn: "Хөгжлийн бэрхшээлтэй иргэдэд хүртээмжтэй кафе.",
        },
        cover: "/hotel-6.jpg",
        palette: "from-amber-100/20 via-white/5 to-white/0",
        stats: [durationStat("2 weeks", "2 долоо хоног")],
        shots: [
            makeShot("/hotel-6.jpg", "Cafe interior", "Кафены интерьер", "wide"),
            makeShot("/hotel-1.jpg", "Seating", "Суудал", "square"),
            makeShot("/hotel-2.jpg", "Lighting", "Гэрэлтүүлэг", "square"),
        ],
        gallery: baseGallery,
    },
    {
        id: "we-love-fruit",
        title: { en: "We love fruit shop", mn: "“We love friut” жимсний дэлгүүр" },
        location: { en: "Ulaanbaatar", mn: "Улаанбаатар" },
        completed: { year: "2023", month: "02" },
        description: {
            en: "Fresh fruit store interior with bright accents.",
            mn: "Жимсний дэлгүүрийн интерьер, гэгээлэг өнгөлгөөтэй.",
        },
        cover: "/hotel-3.jpg",
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [durationStat("2 weeks", "2 долоо хоног")],
        shots: [
            makeShot("/hotel-3.jpg", "Storefront", "Дэлгүүрийн нүүр", "wide"),
            makeShot("/hotel-6.jpg", "Display tables", "Дисплей тавцан", "square"),
            makeShot("/hotel-2.jpg", "Ceiling accent", "Таазны акцент", "square"),
        ],
        gallery: baseGallery,
    },
];

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

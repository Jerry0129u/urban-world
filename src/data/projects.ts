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

const durationStat = (textEn: string, textMn: string): ProjectStat => ({
    label: { en: "Duration", mn: "Гүйцэтгэсэн хугацаа" },
    value: { en: textEn, mn: textMn },
});

const comingSoonShot = makeShot("/coming-soon.svg", "Coming soon", "Тун удахгүй");
const comingSoonGallery = [comingSoonShot];

const unsortedProjects: Project[] = [
    {
        id: "dragon-terminal",
        title: { en: "Shine Ulaanbaatar Dragon Terminal", mn: "Шинэ Улаанбаатар Драгон терминал" },
        location: { en: "Songinokhairkhan / Sukhbaatar", mn: "Сонгинохайрхан, Сүхбаатар" },
        completed: { year: "2024", month: "06" },
        description: {
            en: "New Dragon terminal fit-out coordinated across districts.",
            mn: "Драгон терминалын шинэчлэл, олон дүүрэг дамнасан гүйцэтгэл.",
        },
        cover: "/new dragon/T3.jpg",
        palette: "from-amber-300/20 via-white/5 to-white/0",
        stats: [durationStat("6 months", "6 сар")],
        shots: [
            makeShot("/new dragon/T3.jpg", "Terminal entry hall", "Терминалын орох танхим", "wide"),
            makeShot(
                "/new dragon/CORRIDOR.jpg",
                "Glass corridor lighting",
                "Шилэн коридор, гэрэлтүүлэг",
                "square",
            ),
            makeShot(
                "/new dragon/485741995_634016859605681_1354489228861073968_n.jpg",
                "Passenger lounge seating",
                "Зорчигчдын хүлээлгийн суудал",
                "square",
            ),
        ],
        gallery: [
            makeShot("/new dragon/T3.jpg", "Terminal entry hall", "Терминалын орох танхим"),
            makeShot("/new dragon/CORRIDOR.jpg", "Glass corridor lighting", "Шилэн коридор, гэрэлтүүлэг"),
            makeShot(
                "/new dragon/485741995_634016859605681_1354489228861073968_n.jpg",
                "Passenger lounge seating",
                "Зорчигчдын хүлээлгийн суудал",
            ),
            makeShot(
                "/new dragon/484850189_634016686272365_2178969295659040394_n.jpg",
                "Waiting lounge perspective",
                "Хүлээлгийн танхимын харагдац",
            ),
            makeShot(
                "/new dragon/Screenshot 2025-12-19 at 16.11.02.png",
                "Gate and ceiling detail",
                "Гарц ба таазны деталь",
            ),
            makeShot(
                "/new dragon/Screenshot 2025-12-19 at 16.11.57.png",
                "Ticketing perspective",
                "Тасалбарын хэсгийн харагдац",
            ),
        ],
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
        cover: comingSoonShot.src,
        palette: "from-cyan-300/20 via-white/5 to-white/0",
        stats: [durationStat("6 months", "6 сар")],
        shots: comingSoonGallery,
        gallery: comingSoonGallery,
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
        cover: "/BYD/F17.png",
        palette: "from-indigo-300/20 via-white/5 to-white/0",
        stats: [durationStat("1 month", "1 сар")],
        shots: [
            makeShot("/BYD/F17.png", "Showroom hero view", "Үзүүлэнгийн танхимын харагдац", "wide"),
            makeShot(
                "/BYD/Enscape_2025-06-12-12-03-46_12.png",
                "Vehicle display lane",
                "Машины үзүүлэнгийн эгнээ",
                "square",
            ),
            makeShot(
                "/BYD/Enscape_2025-06-12-12-06-42_6.png",
                "Reception and lounge",
                "Хүлээн авалт ба лоунж",
                "square",
            ),
        ],
        gallery: [
            makeShot("/BYD/F17.png", "Showroom hero view", "Үзүүлэнгийн танхимын харагдац"),
            makeShot(
                "/BYD/Enscape_2025-06-12-12-03-46_12.png",
                "Vehicle display lane",
                "Машины үзүүлэнгийн эгнээ",
            ),
            makeShot(
                "/BYD/Enscape_2025-06-12-12-06-42_6.png",
                "Reception and lounge",
                "Хүлээн авалт ба лоунж",
            ),
            makeShot(
                "/BYD/Enscape_2025-05-30-17-11-10_8.png",
                "Lighting over EV display",
                "Электро машины үзүүлэнгийн гэрэлтүүлэг",
            ),
        ],
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
        cover: "/Genesis/Scene_4.JPG",
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
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
        location: { en: "Songinokhairkhan district", mn: "Сонгинохайрхан дүүрэг" },
        completed: { year: "2024", month: "01" },
        description: {
            en: "Tailored interior for a private house.",
            mn: "Хувийн хаусны захиалгат интерьер.",
        },
        cover: "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 9.png",
        palette: "from-amber-300/15 via-white/5 to-white/0",
        stats: [durationStat("1 month", "1 сар")],
        shots: [
            makeShot(
                "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 9.png",
                "Living room panorama",
                "Зочны өрөөний харагдац",
                "wide",
            ),
            makeShot(
                "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 3.png",
                "Open living area",
                "Нээлттэй зочны хэсэг",
                "square",
            ),
            makeShot(
                "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 6.png",
                "Dining and kitchen view",
                "Гал тогоо, зоогийн хэсэг",
                "square",
            ),
        ],
        gallery: [
            makeShot(
                "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 9.png",
                "Living room panorama",
                "Зочны өрөөний харагдац",
            ),
            makeShot(
                "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 3.png",
                "Open living area",
                "Нээлттэй зочны хэсэг",
            ),
            makeShot(
                "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 6.png",
                "Dining and kitchen view",
                "Гал тогоо, зоогийн хэсэг",
            ),
            makeShot(
                "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 1.png",
                "Entry perspective",
                "Орох хэсгийн харагдац",
            ),
            makeShot(
                "/personal house/Enscape_2025-09-19-18-01-54_Enscape scene 8.png",
                "Bedroom corner",
                "Унтлагын өрөөний булан",
            ),
        ],
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
        cover: "/emart/Screenshot 2025-12-19 at 15.55.33.png",
        palette: "from-indigo-200/20 via-white/5 to-white/0",
        stats: [durationStat("6 months", "6 сар")],
        shots: [
            makeShot(
                "/emart/Screenshot 2025-12-19 at 15.55.33.png",
                "Hypermarket central aisle",
                "Хайпермаркетын төв коридор",
                "wide",
            ),
            makeShot(
                "/emart/Screenshot 2025-12-19 at 15.54.54.png",
                "Checkout perspective",
                "Тооцооны хэсгийн харагдац",
                "square",
            ),
            makeShot(
                "/emart/Screenshot 2025-12-19 at 15.55.19.png",
                "Ceiling lighting grid",
                "Таазны гэрэлтүүлгийн тор",
                "square",
            ),
        ],
        gallery: [
            makeShot(
                "/emart/Screenshot 2025-12-19 at 15.55.33.png",
                "Hypermarket central aisle",
                "Хайпермаркетын төв коридор",
            ),
            makeShot(
                "/emart/Screenshot 2025-12-19 at 15.54.54.png",
                "Checkout perspective",
                "Тооцооны хэсгийн харагдац",
            ),
            makeShot(
                "/emart/Screenshot 2025-12-19 at 15.55.19.png",
                "Ceiling lighting grid",
                "Таазны гэрэлтүүлгийн тор",
            ),
            makeShot(
                "/emart/Screenshot 2025-12-19 at 15.55.40.png",
                "Retail display run",
                "Барааны тавиурын эгнээ",
            ),
        ],
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
        cover: comingSoonShot.src,
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [durationStat("6 months", "6 сар")],
        shots: comingSoonGallery,
        gallery: comingSoonGallery,
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
        cover: "/aaa%26c/SCENE_4.JPG",
        palette: "from-cyan-200/20 via-white/5 to-white/0",
        stats: [durationStat("4 months", "4 сар")],
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
        id: "caff-cafe",
        title: { en: "Caff cafe shop interior", mn: "Caff cafe shop – Интерьер дизайн" },
        location: { en: "Khan-Uul district", mn: "Хан-Уул дүүрэг" },
        completed: { year: "2024", month: "01" },
        description: {
            en: "Cozy cafe design for Caff shop.",
            mn: "Caff кафе шопын дулаан интерьер.",
        },
        cover: "/caff cafe/viber_image_2025-10-23_17-33-16-963.jpg",
        palette: "from-amber-100/20 via-white/5 to-white/0",
        stats: [durationStat("1 month", "1 сар")],
        shots: [
            makeShot(
                "/caff cafe/viber_image_2025-10-23_17-33-16-963.jpg",
                "Cafe seating overview",
                "Кафены суудлын харагдац",
                "wide",
            ),
            makeShot(
                "/caff cafe/viber_image_2025-10-23_17-33-18-019.jpg",
                "Coffee bar view",
                "Кофены баарны харагдац",
                "square",
            ),
            makeShot(
                "/caff cafe/viber_image_2025-10-23_17-33-18-695.jpg",
                "Booth seating",
                "Лоунж суудал",
                "square",
            ),
        ],
        gallery: [
            makeShot(
                "/caff cafe/viber_image_2025-10-23_17-33-16-963.jpg",
                "Cafe seating overview",
                "Кафены суудлын харагдац",
            ),
            makeShot(
                "/caff cafe/viber_image_2025-10-23_17-33-18-019.jpg",
                "Coffee bar view",
                "Кофены баарны харагдац",
            ),
            makeShot(
                "/caff cafe/viber_image_2025-10-23_17-33-18-695.jpg",
                "Booth seating",
                "Лоунж суудал",
            ),
            makeShot(
                "/caff cafe/viber_image_2025-10-23_17-33-17-707.jpg",
                "Barista counter",
                "Баристагийн хэсэг",
            ),
            makeShot(
                "/caff cafe/viber_image_2025-10-23_17-34-14-271.jpg",
                "Front window seating",
                "Цонхны дагуух суудал",
            ),
        ],
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
        cover: "/moujonjon/Scene_3_UNGU-2.JPG",
        palette: "from-stone-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: [
            makeShot("/moujonjon/Scene_3_UNGU-2.JPG", "Kids store overview", "Хүүхдийн дэлгүүрийн харагдац", "wide"),
            makeShot("/moujonjon/Scene_5-3_UNGU-2.JPG", "Display wall", "Дисплей хана", "square"),
            makeShot("/moujonjon/Scene_6_UNGU-2.JPG", "Cash wrap and shelving", "Кассын хэсэг, тавиур", "square"),
        ],
        gallery: [
            makeShot("/moujonjon/Scene_3_UNGU-2.JPG", "Kids store overview", "Хүүхдийн дэлгүүрийн харагдац"),
            makeShot("/moujonjon/Scene_5-3_UNGU-2.JPG", "Display wall", "Дисплей хана"),
            makeShot("/moujonjon/Scene_6_UNGU-2.JPG", "Cash wrap and shelving", "Кассын хэсэг, тавиур"),
            makeShot("/moujonjon/Scene_2_UNGU-2.png", "Entrance arch", "Орох хэсгийн нум"),
            makeShot("/moujonjon/IMG_2502.jpg", "Built store photo", "Дэлгүүрийн зураг"),
            makeShot(
                "/moujonjon/viber_image_2025-04-11_18-15-16-372.jpg",
                "Colorful shelving detail",
                "Өнгөлөг тавиурын деталь",
            ),
        ],
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
        cover: comingSoonShot.src,
        palette: "from-indigo-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: comingSoonGallery,
        gallery: comingSoonGallery,
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
        cover: "/akura/viber_image_2025-04-11_17-52-03-809.jpg",
        palette: "from-cyan-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: [
            makeShot(
                "/akura/viber_image_2025-04-11_17-52-03-809.jpg",
                "Office lounge",
                "Оффисын лоунж",
                "wide",
            ),
            makeShot(
                "/akura/viber_image_2025-04-11_17-48-22-000.jpg",
                "Workspace perspective",
                "Ажлын хэсгийн харагдац",
                "square",
            ),
            makeShot(
                "/akura/viber_image_2025-04-11_17-52-04-358.jpg",
                "Reception and meeting nook",
                "Хүлээн авах, уулзалтын булан",
                "square",
            ),
        ],
        gallery: [
            makeShot("/akura/viber_image_2025-04-11_17-52-03-809.jpg", "Office lounge", "Оффисын лоунж"),
            makeShot(
                "/akura/viber_image_2025-04-11_17-48-22-000.jpg",
                "Workspace perspective",
                "Ажлын хэсгийн харагдац",
            ),
            makeShot(
                "/akura/viber_image_2025-04-11_17-52-04-358.jpg",
                "Reception and meeting nook",
                "Хүлээн авах, уулзалтын булан",
            ),
            makeShot(
                "/akura/viber_image_2025-04-11_18-08-20-912.jpg",
                "Breakout seating",
                "Амрах, уулзалтын суудал",
            ),
        ],
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
        cover: "/personal apartment/4.jpg",
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [durationStat("3 months", "3 сар")],
        shots: [
            makeShot("/personal apartment/4.jpg", "Living room focus", "Зочны өрөөний деталь", "wide"),
            makeShot("/personal apartment/11.png", "Kitchen and dining", "Гал тогоо, зоогийн хэсэг", "square"),
            makeShot("/personal apartment/18.png", "Bedroom perspective", "Унтлагын өрөөний харагдац", "square"),
        ],
        gallery: [
            makeShot("/personal apartment/4.jpg", "Living room focus", "Зочны өрөөний деталь"),
            makeShot("/personal apartment/11.png", "Kitchen and dining", "Гал тогоо, зоогийн хэсэг"),
            makeShot("/personal apartment/18.png", "Bedroom perspective", "Унтлагын өрөөний харагдац"),
            makeShot("/personal apartment/1.png", "Entry view", "Орох хэсгийн харагдац"),
            makeShot("/personal apartment/3.jpg", "Open plan overview", "Нээлттэй зохион байгуулалт"),
            makeShot("/personal apartment/20.png", "Accent lighting", "Гэрэлтүүлгийн деталь"),
        ],
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
        cover: comingSoonShot.src,
        palette: "from-amber-100/20 via-white/5 to-white/0",
        stats: [durationStat("2 weeks", "2 долоо хоног")],
        shots: comingSoonGallery,
        gallery: comingSoonGallery,
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
        cover: comingSoonShot.src,
        palette: "from-amber-200/20 via-white/5 to-white/0",
        stats: [durationStat("2 weeks", "2 долоо хоног")],
        shots: comingSoonGallery,
        gallery: comingSoonGallery,
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

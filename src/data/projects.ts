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

export const projects: Project[] = [
    {
        id: "penthouse",
        title: { en: "Penthouse glow", mn: "Пентхаус гэрэл" },
        location: { en: "Sukhbaatar, Ulaanbaatar", mn: "СБД, Улаанбаатар" },
        completed: { year: "2024", month: "02" },
        description: {
            en: "High-floor residence where we softened the daylight with layered sheers and graphite accents.",
            mn: "Өндөр давхарт байрлах орон сууцанд олон давхар тюль, графит акцентээр өдрийн гэрлийг зөөлрүүлэв.",
        },
        cover: "/apartment-2.jpg",
        palette: "from-amber-300/20 via-white/5 to-white/0",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Residence", mn: "Орон сууц" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Full fit-out", mn: "Бүрэн гүйцэтгэл" } },
        ],
        tags: ["interior-painting", "plaster-performance"],
        shots: [
            makeShot("/apartment-1.jpg", "Penthouse lounge", "Пентхаус зочны өрөө", "wide"),
            makeShot("/apartment-2.jpg", "Dining glow", "Зоогийн хэсгийн гэрэл", "square"),
            makeShot("/apartment-4.jpg", "Bedroom niche", "Унтлагын өрөөний булан", "tall"),
            makeShot("/hotel-1.jpg", "Lobby inspiration", "Лоббиноос сэдэвлэсэн деталь", "square"),
            makeShot("/hotel-2.jpg", "Lighting detail", "Гэрэлтүүлгийн деталь", "square"),
        ],
        gallery: [
            makeShot("/apartment-2.jpg", "Lounge and dining overview", "Зочны, зоогийн хэсгийн харагдац"),
            makeShot("/apartment-1.jpg", "Layered sofa zone", "Олон давхарласан буйдангийн хэсэг"),
            makeShot("/apartment-4.jpg", "Bedroom quiet corner", "Унтлагын тайван булан"),
            makeShot("/hotel-2.jpg", "Ambient lighting detail", "Орчны гэрлийн деталь"),
            makeShot("/hotel-1.jpg", "Lobby palette inspiration", "Лоббиноос сэдэвлэсэн өнгө"),
            makeShot("/apartment-1.jpg", "Bar and seating vignette", "Баар ба суудлын жижиг хэсэг"),
        ],
        beforeAfter: {
            before: {
                image: "/before.jpg",
                title: { en: "Shell before staging", mn: "Тавилга байрлуулахаас өмнөх байдал" },
                detail: { en: "bare walls + cold light", mn: "хоосон хананууд, хүйтэн гэрэл" },
            },
            after: {
                image: "/after.jpg",
                title: { en: "Warm penthouse glow", mn: "Дулаан пентхаус гэрэлтүүлэг" },
                detail: { en: "layered sheers + sculptural light", mn: "олон давхар тюль, уран хэлбэртэй гэрэл" },
            },
        },
        highlight: {
            en: "Sunrise sheers soften the horizon and wrap the dining edge.",
            mn: "Нар мандах тюль үзэгдэх орчинг зөөллөж, зоогийн хэсгийг тэвэрч өгдөг.",
        },
    },
    {
        id: "lobby",
        title: { en: "Lobby immersion", mn: "Лоббины уур амьсгал" },
        location: { en: "Downtown", mn: "Хотын төв" },
        completed: { year: "2023", month: "11" },
        description: {
            en: "Reception loop built with polished stone, smoked glass, and kinetic lighting for brand arrivals.",
            mn: "Гялтгануур чулуу, утаат шил, хөдөлгөөнт гэрэлтүүлгээр брэндийн хүлээн авалтыг бүтээсэн лобби.",
        },
        cover: "/hotel-3.jpg",
        palette: "from-indigo-400/20 via-purple-200/10 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Hospitality", mn: "Үйлчилгээ" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Lighting + styling", mn: "Гэрэлтүүлэг, хэв маяг" } },
        ],
        tags: ["interior-painting"],
        shots: [
            makeShot("/hotel-1.jpg", "Lobby seating", "Лобби суудал", "wide"),
            makeShot("/hotel-2.jpg", "Ceiling detail", "Таазны деталь", "square"),
            makeShot("/hotel-6.jpg", "Bar vignette", "Баарны уур", "tall"),
            makeShot("/office-1.jpg", "Back office", "Арын өрөө", "square"),
            makeShot("/office-2.jpg", "Conference glow", "Хурлын өрөөний гэрэл", "square"),
        ],
        gallery: [
            makeShot("/hotel-3.jpg", "Arrival portal", "Ирэлтийн хэсэг"),
            makeShot("/hotel-1.jpg", "Lobby seating pocket", "Лобби суудлын булан"),
            makeShot("/hotel-2.jpg", "Ceiling rhythm", "Таазны хэмнэл"),
            makeShot("/hotel-6.jpg", "Bar and lounge vignette", "Баар, лоунжийн хэсэг"),
            makeShot("/office-2.jpg", "Conference spillover", "Хурлын өрөөний дагавар хэсэг"),
            makeShot("/office-1.jpg", "Reception back office", "Хүлээн авалтын арын өрөө"),
        ],
        beforeAfter: {
            before: {
                image: "/before.jpg",
                title: { en: "Empty shell", mn: "Хоосон талбай" },
                detail: { en: "flat light + blank floor", mn: "жигд гэрэл, хоосон шал" },
            },
            after: {
                image: "/hotel-1.jpg",
                title: { en: "Immersive welcome", mn: "Урин дулаан лобби" },
                detail: { en: "linear glow + brand metals", mn: "шугаман гэрэл, брэндийн металл" },
            },
        },
        highlight: {
            en: "We sequenced light to guide arrivals around the bar and back office.",
            mn: "Гэрлийн дарааллыг ашиглаж, ирэгсдийг баар болон арын өрөөгөөр чиглүүлэв.",
        },
    },
    {
        id: "studio",
        title: { en: "Studio hush", mn: "Студийн нам гүм" },
        location: { en: "Creative hub", mn: "Бүтээлч төв" },
        completed: { year: "2024", month: "04" },
        description: {
            en: "Open office suite tuned for focus: ribbed glass, charcoal felt, and hidden linear light.",
            mn: "Анхаарал төвлөрөхөөр тохируулсан нээлттэй оффис: судалтай шил, нүүрсэн саарал эсгий, далд шугаман гэрэл.",
        },
        cover: "/office-4.jpg",
        palette: "from-cyan-300/20 via-white/5 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Workspace", mn: "Ажлын орчин" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Prototype", mn: "Туршилтын шийдэл" } },
        ],
        tags: ["plaster-performance"],
        shots: [
            makeShot("/office-3.jpg", "Studio overview", "Студийн ерөнхий харагдац", "wide"),
            makeShot("/office-2.jpg", "Meeting room", "Хурлын өрөө", "square"),
            makeShot("/office-1.jpg", "Detail bench", "Деталь вандан", "square"),
            makeShot("/before.jpg", "Before snapshot", "Өмнөх байдал", "tall"),
            makeShot("/after.jpg", "After snapshot", "Дараах байдал", "square"),
        ],
        gallery: [
            makeShot("/office-4.jpg", "Studio entry", "Студийн орох хэсэг"),
            makeShot("/office-3.jpg", "Workspace overview", "Ажлын хэсгийн харагдац"),
            makeShot("/office-2.jpg", "Meeting room glass", "Хурлын өрөөний шилэн хана"),
            makeShot("/office-1.jpg", "Bench detail", "Вандангийн деталь"),
            makeShot("/before.jpg", "Before renovation", "Засахаас өмнө"),
            makeShot("/after.jpg", "After lighting tune", "Гэрлийг тохируулсны дараа"),
        ],
        beforeAfter: {
            before: {
                image: "/before.jpg",
                title: { en: "Raw office shell", mn: "Түүхий оффисын талбай" },
                detail: { en: "concrete glare and exposed ceilings", mn: "бетон гялбаа, ил тааз" },
            },
            after: {
                image: "/after.jpg",
                title: { en: "Soft studio hush", mn: "Зөөлөн студийн тайвшрал" },
                detail: { en: "felt panels + concealed light", mn: "эсгий хавтан, далд гэрэл" },
            },
        },
        highlight: {
            en: "A concealed linear spine keeps desks calm while the meeting room glows.",
            mn: "Далд шугаман гэрэл ширээг тайван байлгаж, хурлын өрөөг онцолно.",
        },
    },
    {
        id: "showflat",
        title: { en: "Showflat sheen", mn: "Загвар байрны гялбаа" },
        location: { en: "Ulaanbaatar", mn: "Улаанбаатар" },
        completed: { year: "2023", month: "09" },
        description: {
            en: "Model unit with crisp paint lines and warm staging.",
            mn: "Цэвэрхэн будгийн шугам, дулаан тавилгатай загвар байр.",
        },
        cover: "/apartment-1.jpg",
        palette: "from-amber-200/20 via-white/5 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Residential", mn: "Орон сууц" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Staging", mn: "Тавилга, тайз засалт" } },
        ],
        tags: ["interior-painting"],
        shots: [
            makeShot("/apartment-2.jpg", "Living room staging", "Зочны өрөөний тавилгалах", "wide"),
            makeShot("/apartment-1.jpg", "Dining edge", "Зоогийн хэсгийн шугам", "square"),
            makeShot("/apartment-4.jpg", "Bed vignette", "Унтлагын өрөөний деталь", "tall"),
        ],
        gallery: [
            makeShot("/apartment-1.jpg", "Model living overview", "Загвар зочны өрөөний харагдац"),
            makeShot("/apartment-2.jpg", "Paint transitions", "Будгийн шилжилт"),
            makeShot("/apartment-4.jpg", "Bedroom paint tone", "Унтлагын будгийн өнгө"),
        ],
        highlight: {
            en: "Neutral paint palette layered with soft lighting.",
            mn: "Дөнгөж мэдэгдэхүйц будгийн өнгө зөөлөн гэрэлтэй давхарласан.",
        },
    },
    {
        id: "atrium",
        title: { en: "Atrium glaze", mn: "Атриумын гялбаа" },
        location: { en: "CBD", mn: "Бизнесийн дүүрэг" },
        completed: { year: "2022", month: "12" },
        description: {
            en: "Public lobby with plastered curves and reflective glazing.",
            mn: "Шавардлагатай муруй, толин шилтэй нийтийн лобби.",
        },
        cover: "/hotel-3.jpg",
        palette: "from-indigo-300/20 via-white/5 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Lobby", mn: "Лобби" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Plaster finish", mn: "Шавардлагын өнгөлгөө" } },
        ],
        tags: ["plaster-performance"],
        shots: [
            makeShot("/hotel-1.jpg", "Lobby curve", "Лоббины муруй", "wide"),
            makeShot("/hotel-2.jpg", "Ceiling wash", "Таазны гэрэл", "square"),
            makeShot("/hotel-3.jpg", "Atrium glow", "Атриумын гэрэл", "wide"),
        ],
        gallery: [
            makeShot("/hotel-3.jpg", "Atrium overview", "Атриумын харагдац"),
            makeShot("/hotel-1.jpg", "Plaster detail", "Шавардлагын деталь"),
            makeShot("/hotel-2.jpg", "Lighting on plaster", "Шавардлагад туссан гэрэл"),
        ],
        highlight: {
            en: "Satin plaster wraps the entry volumes.",
            mn: "Сатин шавардлага орцны эзлэхүүнийг бүрхэнэ.",
        },
    },
    {
        id: "studio-lite",
        title: { en: "Studio lite", mn: "Хөнгөн студи" },
        location: { en: "Tech park", mn: "Тех парк" },
        completed: { year: "2024", month: "01" },
        description: {
            en: "Minimal office shell with crisp paint and floating light.",
            mn: "Минимал оффисын талбайд цэвэрхэн будаг, хөвөх гэрэл.",
        },
        cover: "/office-1.jpg",
        palette: "from-cyan-200/20 via-white/5 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Workspace", mn: "Ажлын орчин" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Paint + lighting", mn: "Будаг, гэрэлтүүлэг" } },
        ],
        tags: ["interior-painting"],
        shots: [
            makeShot("/office-1.jpg", "Desk run", "Ширээний эгнээ", "square"),
            makeShot("/office-2.jpg", "Meeting paint line", "Хурлын өрөөний будгийн шугам", "square"),
            makeShot("/office-3.jpg", "Open plan", "Нээлттэй төлөвлөлт", "wide"),
        ],
        gallery: [
            makeShot("/office-1.jpg", "Bench detail", "Вандангийн деталь"),
            makeShot("/office-2.jpg", "Conference wall", "Хурлын ханын хэсэг"),
            makeShot("/office-3.jpg", "Studio view", "Студийн харагдац"),
        ],
        highlight: {
            en: "Clean paint breaks keep the space airy.",
            mn: "Цэвэрхэн будгийн хуваалт орчинг агаарлаг байлгана.",
        },
    },
    {
        id: "bar-lounge",
        title: { en: "Bar lounge polish", mn: "Баар лоунжийн өнгөлгөө" },
        location: { en: "City center", mn: "Хотын төв" },
        completed: { year: "2023", month: "06" },
        description: {
            en: "Hospitality bar with plaster soffits and moody paint.",
            mn: "Шавардлагатай тааз, гүн өнгийн будгаар чимэглэсэн баар лоунж.",
        },
        cover: "/hotel-6.jpg",
        palette: "from-amber-200/15 via-white/5 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Hospitality", mn: "Үйлчилгээ" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Plaster + paint", mn: "Шавардлага, будаг" } },
        ],
        tags: ["interior-painting", "plaster-performance"],
        shots: [
            makeShot("/hotel-6.jpg", "Bar counter", "Баарны лангуу", "wide"),
            makeShot("/hotel-3.jpg", "Bar entry", "Баарны орох хэсэг", "square"),
            makeShot("/hotel-2.jpg", "Ceiling plaster", "Таазны шавардлага", "square"),
        ],
        gallery: [
            makeShot("/hotel-6.jpg", "Bar hero", "Баарны үндсэн зураг"),
            makeShot("/hotel-3.jpg", "Entry lounge", "Орох лоунж"),
            makeShot("/hotel-2.jpg", "Plaster ceiling", "Шавардлагатай тааз"),
        ],
        highlight: {
            en: "Plaster soffits meet deep paint for contrast.",
            mn: "Шавардлагатай тааз гүн будгийн хамт контраст үүсгэнэ.",
        },
    },
    {
        id: "loft-wash",
        title: { en: "Loft wash", mn: "Лофт лаймвош" },
        location: { en: "Warehouse district", mn: "Агуулахын бүс" },
        completed: { year: "2023", month: "03" },
        description: {
            en: "Artist loft with limewash walls and exposed structure.",
            mn: "Урлагийн лофт — лаймвош ханатай, ил бүтэцтэй.",
        },
        cover: "/apartment-1.jpg",
        palette: "from-stone-200/20 via-white/5 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Loft", mn: "Лофт" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Limewash", mn: "Лаймвош" } },
        ],
        tags: ["plaster-performance"],
        shots: [
            makeShot("/apartment-1.jpg", "Loft seating", "Лофт суудал", "wide"),
            makeShot("/before.jpg", "Before state", "Өмнөх төлөв", "square"),
            makeShot("/after.jpg", "After limewash", "Лаймвош хийсний дараа", "square"),
        ],
        gallery: [
            makeShot("/apartment-1.jpg", "Loft seating", "Лофт суудал"),
            makeShot("/before.jpg", "Before", "Өмнө"),
            makeShot("/after.jpg", "After", "Дараа"),
        ],
        highlight: {
            en: "Limewash softens the industrial shell.",
            mn: "Лаймвош аж үйлдвэрийн орчныг зөөлрүүлэв.",
        },
    },
    {
        id: "suite-quiet",
        title: { en: "Suite quiet", mn: "Нам гүм сьют" },
        location: { en: "Luxury tower", mn: "Тансаг цамхаг" },
        completed: { year: "2022", month: "09" },
        description: {
            en: "Guest suite with layered paint tones and plaster coves.",
            mn: "Олон давхар будгийн өнгө, шавардлагатай карнизтай зочны сьют.",
        },
        cover: "/hotel-2.jpg",
        palette: "from-slate-200/20 via-white/5 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Suite", mn: "Сьют" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Paint + plaster", mn: "Будаг, шавардлага" } },
        ],
        tags: ["interior-painting", "plaster-performance"],
        shots: [
            makeShot("/hotel-2.jpg", "Suite ceiling", "Сьютийн тааз", "square"),
            makeShot("/hotel-1.jpg", "Seating cove", "Суудлын булан", "wide"),
            makeShot("/hotel-5.jpg", "Entry corridor", "Орох коридор", "square"),
        ],
        gallery: [
            makeShot("/hotel-2.jpg", "Ceiling detail", "Таазны деталь"),
            makeShot("/hotel-1.jpg", "Seating cove", "Суудлын булан"),
            makeShot("/hotel-3.jpg", "Entry corridor", "Орох коридор"),
        ],
        highlight: {
            en: "Quiet tones and plaster coves for calm light.",
            mn: "Дуугүй өнгө, шавардлагатай карниз нь тайван гэрэл бүрдүүлнэ.",
        },
    },
    {
        id: "cafe-soft",
        title: { en: "Cafe soft walls", mn: "Кафены зөөлөн хананууд" },
        location: { en: "Corner block", mn: "Булангийн байршил" },
        completed: { year: "2024", month: "03" },
        description: {
            en: "Cafe refresh with creamy plaster and accent paint.",
            mn: "Кафены шинэчлэл — зөөлөн шавардлага, акцент будгаар.",
        },
        cover: "/hotel-6.jpg",
        palette: "from-amber-100/20 via-white/5 to-transparent",
        stats: [
            { label: { en: "zone", mn: "Ашиглалт" }, value: { en: "Cafe", mn: "Кафе" } },
            { label: { en: "scope", mn: "Хүрээ" }, value: { en: "Refresh", mn: "Шинэчлэл" } },
        ],
        tags: ["interior-painting"],
        shots: [
            makeShot("/hotel-6.jpg", "Cafe seating", "Кафены суудал", "wide"),
            makeShot("/hotel-3.jpg", "Bar detail", "Баарны деталь", "square"),
            makeShot("/hotel-6.jpg", "Lighting mood", "Гэрлийн уур амьсгал", "square"),
        ],
        gallery: [
            makeShot("/hotel-6.jpg", "Cafe seating", "Кафены суудал"),
            makeShot("/hotel-3.jpg", "Bar detail", "Баарны деталь"),
            makeShot("/hotel-6.jpg", "Lighting mood", "Гэрлийн уур амьсгал"),
        ],
        highlight: {
            en: "Soft plaster keeps the cafe warm and bright.",
            mn: "Зөөлөн шавардлага кафег дулаан, гэгээтэй болгодог.",
        },
    },
];

export const projectCategories: ProjectCategory[] = [
    {
        id: "residential",
        title: { en: "Residential glow", mn: "Орон сууцны гэрэл" },
        summary: {
            en: "Penthouses and homes tuned for calm living.",
            mn: "Амгалан амьдрахад тохируулсан пентхаус, орон сууц.",
        },
        projectIds: ["penthouse"],
        accent: "from-amber-100 via-white to-white",
    },
    {
        id: "hospitality",
        title: { en: "Hospitality arrival", mn: "Үйлчилгээний угталт" },
        summary: {
            en: "Lobbies and lounges that choreograph a welcome.",
            mn: "Урин дулаан угтах лобби, лоунжийн шийдлүүд.",
        },
        projectIds: ["lobby"],
        accent: "from-violet-100 via-white to-white",
    },
    {
        id: "workspace",
        title: { en: "Workspaces that focus", mn: "Анхаарал төвлөрөх ажлын орчин" },
        summary: {
            en: "Studios and offices shaped for flow and quiet.",
            mn: "Урсгал, нам гүмийг эрхэмлэсэн студи, оффисууд.",
        },
        projectIds: ["studio"],
        accent: "from-cyan-100 via-white to-white",
    },
];

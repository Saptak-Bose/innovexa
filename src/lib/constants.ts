export const clients = [...new Array(24)].map((c, i) => ({
  href: `/${i + 1}.svg`,
}));

export const pArray1 = [...new Array(5)].map((p, i) => ({
  key: i + 1,
  title: "MarX",
  link: "https://innovexa-ecru.vercel.app/products/MarX",
  thumbnail: "/p1.png",
}));

export const pArray2 = [...new Array(5)].map((p, i) => ({
  key: i + 6,
  title: "MarX",
  link: "https://innovexa-ecru.vercel.app/products/MarX",
  thumbnail: "/p2.png",
}));

export const pArray3 = [...new Array(5)].map((p, i) => ({
  key: i + 11,
  title: "MarX",
  link: "https://innovexa-ecru.vercel.app/products/MarX",
  thumbnail: "/p3.png",
}));

export const products = [...pArray1, ...pArray2, ...pArray3];

export const plans = [
  {
    title: "Ignite",
    imp: false,
    price: "₹0",
    description:
      "A zero-cost entry to Inno𝒱exa — perfect for newcomers who want to build, save, and experiment without commitment.",
    features: [
      "Create one-press macros and basic chained workflows with the online customizer (save up to 2 profiles).",
      "Cloud backup & one-click restore so your layouts travel with you.",
      "Community Labs — discover, import, and share ready-made MarX layouts.",
      "Getting started guides and business-hours email support to help you ship faster.",
    ],
  },
  {
    title: "Catalyst",
    imp: true,
    price: "₹499",
    description:
      "Powerful tools and premium perks for creators who need speed, variety, and smarter automation.",
    features: [
      "AI-Assisted Macro Builder — describe a task and get a ready-to-use, editable macro chain that runs as a single press.",
      "Smart Sync & Versioning — unlimited cloud profiles, device-aware sync, and instant rollback to any version.",
      "Priority access to Creator Drops, MarX accessory bundles, and early firmware betas.",
      "Priority workflow help via live chat — optimization, macro tuning, and rapid troubleshooting.",
    ],
  },
  {
    title: "Nova",
    imp: false,
    price: "₹999",
    description:
      "A full-service plan that blends hardware priority, bespoke help, and advanced automation for teams and pro builders.",
    features: [
      "Predictive Workflow Engine — MarX learns frequent actions and suggests one-tap automations and templates.",
      "ProLab Hardware Credits — monthly credit for premium case materials, custom keycaps, or expedited builds.",
      "Quarterly 1:1 workflow consultation with an Inno𝒱exa engineer to architect high-efficiency setups.",
      "Enterprise-grade priority: fast-track manufacturing, expedited RMA and live production/shipping updates.",
    ],
  },
];

export const aboutQns = [
  {
    id: 1,
    qn: "What is Inno𝒱exa?",
    main: "Inno𝒱exa is a product studio that builds physical shortcuts for modern work.",
    desc: "We design and ship hardware + software that turns repetitive sequences into a single, elegant action — tactile devices, smart firmware, and cloud-backed profiles that make daily workflows feel frictionless. At our core we’re makers: industrial designers, firmware engineers and UX thinkers who obsess over form, feel and the tiny details that make tools delightful. Our first flagship product, MarX, is a handcrafted macropad built for creators and professionals — but Inno𝒱exa is the studio, the design language, and the evolving ecosystem behind it.",
  },
  {
    id: 2,
    qn: "Why did we create Inno𝒱exa?",
    main: "Because time is the most valuable resource — and we wanted to give it back.",
    desc: "We watched skilled people waste minutes (then hours) on repeated clicks, menu dives and keystroke tangles. The result felt avoidable: better tooling, not just better software. So we asked: what if the most common, repetitive actions lived under your fingers as a satisfying, single press? Inno𝒱exa was born from that question. We aim to translate thoughtful hardware design and simple, powerful software into everyday efficiency — designing products that respect craft, speed and delight. We build tools for people who care about doing the work well, not wrestling with their tools.",
  },
  {
    id: 3,
    qn: "What will Inno𝒱exa produce next?",
    main: "MarX is only the beginning — Inno𝒱exa will become a family of focused tools that reclaim time across creative and technical workflows.",
    desc: "Expect more devices that solve specific pain points: compact controllers for editors, programmable surfaces for designers, tactile stream decks for producers, and modular accessories that snap into existing setups. Each product will share the same DNA — premium materials, low-latency firmware, cloud profile sync, and membership-driven benefits (exclusive drops, AI-assisted macros, and priority support). Alongside hardware, we’ll expand the software platform: smarter macro suggestions, cross-device profile orchestration, and an open marketplace where creators can share and remix workflows. In short: one thoughtful product at a time, Inno𝒱exa will build an ecosystem that turns repetitive work into single, beautiful interactions.",
  },
];

export const team = [
  {
    name: "Himanshu Roy",
    role: ["Founder •", "CEO •", "Product Builder"],
    bio: [
      "Founder and CEO — leads product strategy, manufacturing relationships, marketing and operations.",
      "Himanshu drives the vision for Inno𝒱exa and coordinates production for MarX and future hardware.",
    ],
    img: "/himanshu.jpg",
    insta: "https://www.instagram.com/_hr._.18/",
    iId: "@_hr._.18",
  },
  {
    name: "Saptak Bose",
    role: ["Co-founder •", "CTO •", "Code Artist"],
    bio: [
      "CTO and technical lead — builds the website, firmware, cloud sync, and the product code that powers MarX.",
      "Saptak ships features, writes tests, and continuously iterates on product and platform engineering.",
    ],
    img: "/saptak.jpg",
    insta: "https://www.instagram.com/saptak_2_smooth/",
    iId: "@saptak_2_smooth",
    github: "https://github.com/Saptak-Bose/",
    gId: "Saptak-Bose",
  },
  {
    name: "Kingsuk Dutta",
    role: ["Co-founder •", "CDO •", "Pro Designer"],
    bio: [
      "Chief Design Officer — visual & product designer, logo creator, and lead editor.",
      "Kingsuk defines the visual language across MarX, packaging, video, and brand identity.",
    ],
    img: "/kingsuk.jpg",
    insta: "https://www.instagram.com/kingsuk_ofc/",
    iId: "@kingsuk_ofc",
  },
];

export const navTabs = [
  {
    tab: "Home",
    href: "/",
  },
  {
    tab: "Products",
    href: "/products",
  },
  {
    tab: "Pricing",
    href: "/#pricing",
  },
  {
    tab: "About",
    href: "/about",
  },
  {
    tab: "Privacy Policy",
    href: "/privacy",
  },
  {
    tab: "IP-Enterprise",
    href: "/enterprise",
  },
];

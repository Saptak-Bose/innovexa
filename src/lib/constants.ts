export const clients = [...new Array(24)].map((c, i) => ({
  href: `/${i + 1}.svg`,
}));

export const products = [...new Array(15)].map((p, i) => ({
  key: i,
  title: "MarX",
  link: "https://innovexa-ecru.vercel.app/products/marx",
  thumbnail: "/p1.png",
}));

// export const products = [
//   {
//     title: "Moonbeam",
//     link: "https://gomoonbeam.com",
//     thumbnail: "/p1.png",
//   },
//   {
//     title: "Cursor",
//     link: "https://cursor.so",
//     thumbnail: "/p2.png",
//   },
//   {
//     title: "Rogue",
//     link: "https://userogue.com",
//     thumbnail: "/p3.png",
//   },

//   {
//     title: "Editorially",
//     link: "https://editorially.org",
//     thumbnail: "/p4.png",
//   },
//   {
//     title: "Editrix AI",
//     link: "https://editrix.ai",
//     thumbnail: "/p5.png",
//   },
//   {
//     title: "Pixel Perfect",
//     link: "https://app.pixelperfect.quest",
//     thumbnail: "/p6.png",
//   },

//   {
//     title: "Algochurn",
//     link: "https://algochurn.com",
//     thumbnail: "/p1.png",
//   },
//   {
//     title: "Aceternity UI",
//     link: "https://ui.aceternity.com",
//     thumbnail: "/p2.png",
//   },
//   {
//     title: "Tailwind Master Kit",
//     link: "https://tailwindmasterkit.com",
//     thumbnail: "/p3.png",
//   },
//   {
//     title: "SmartBridge",
//     link: "https://smartbridgetech.com",
//     thumbnail: "/p4.png",
//   },
//   {
//     title: "Renderwork Studio",
//     link: "https://renderwork.studio",
//     thumbnail: "/p5.png",
//   },

//   {
//     title: "Creme Digital",
//     link: "https://cremedigital.com",
//     thumbnail: "/p6.png",
//   },
//   {
//     title: "Golden Bells Academy",
//     link: "https://goldenbellsacademy.com",
//     thumbnail: "/p1.png",
//   },
//   {
//     title: "Invoker Labs",
//     link: "https://invoker.lol",
//     thumbnail: "/p2.png",
//   },
//   {
//     title: "E Free Invoice",
//     link: "https://efreeinvoice.com",
//     thumbnail: "/p3.png",
//   },
// ];

export const plans = [
  {
    title: "Ignite",
    imp: false,
    price: "₹0",
    description:
      "A zero-cost entry to Innovexa — perfect for newcomers who want to build, save, and experiment without commitment.",
    features: [
      "Create one-press macros and basic chained workflows with the online customizer (save up to 2 profiles).",
      "Cloud backup & one-click restore so your layouts travel with you.",
      "Community Labs — discover, import, and share ready-made Marx layouts.",
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
      "Priority access to Creator Drops, Marx accessory bundles, and early firmware betas.",
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
      "Predictive Workflow Engine — Marx learns frequent actions and suggests one-tap automations and templates.",
      "ProLab Hardware Credits — monthly credit for premium case materials, custom keycaps, or expedited builds.",
      "Quarterly 1:1 workflow consultation with an Innovexa engineer to architect high-efficiency setups.",
      "Enterprise-grade priority: fast-track manufacturing, expedited RMA and live production/shipping updates.",
    ],
  },
];

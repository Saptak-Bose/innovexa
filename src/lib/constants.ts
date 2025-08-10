export const clients = [...new Array(10)].map((c, i) => ({
  href: `/${i + 1}.png`,
}));

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
];

export const plans = [
  {
    title: "Ignite",
    imp: false,
    price: "₹0",
    description:
      "A zero-cost entry to Innovexa — perfect for newcomers who want to build, save, and experiment without commitment.",
    features: [
      "Limited access to the online Macropad customizer (save up to 2 device profiles).",
      "Auto-backup of your layouts so you never lose a favorite setup.",
      "Access the public forum and shared profile marketplace.",
      "Help within business hours (ticket queue).",
    ],
  },
  {
    title: "Catalyst",
    imp: true,
    price: "₹499",
    description:
      "Powerful tools and premium perks for creators who need speed, variety, and smarter automation.",
    features: [
      "Describe a task and get a ready-to-use macro or macro-chain (edit and fine-tune).",
      "Instantly sync profiles across devices with version history and one-click rollback.",
      "Early access and discounts on Creator keycap sets and switch bundles and full access to the online Macropad customizer.",
      "Faster response window and workflow troubleshooting via live chat.",
    ],
  },
  {
    title: "Nova",
    imp: false,
    price: "₹999",
    description:
      "A full-service plan that blends hardware priority, bespoke help, and advanced automation for teams and pro builders.",
    features: [
      "Device learns frequent actions and suggests macro templates and optimization hints (save time with suggested maps).",
      "Monthly credit to use toward premium case materials, custom keycaps, or an annual free accessory.",
      "Quarterly 1:1 sessions with an Innovexa engineer to optimize layouts and automation (remote session).",
      "Fast-track manufacturing and repairs; reduced turnaround and live status updates.",
    ],
  },
];

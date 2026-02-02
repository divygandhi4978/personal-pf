import securehold from "../images/securehold.png";
import urlshortner from "../images/urlshortner.png";
import portfolio from "../images/portfolio.png";
import newsletter from "../images/newsletter.png";
import DGMonitor from "../images/water.png";
import webcrawler from "../images/webcrawler.png";
import vapro from "../images/vaproshine.gif";
import vapro_powerbi from "../images/vapro_powerbi.gif";

const list = [
  {
    head: "VaproShine",
    data: "A premium mobile steam cleaning SaaS platform with an automated booking engine, real-time service tracking, and a dedicated data analytics dashboard built for the business owner to monitor revenue, customer behavior, service efficiency, and operational KPIs.",
    preview: "https://pro-steam.vercel.app/", // use real link
    source: "https://github.com/divygandhi4978", // use real repo
    img: vapro,
    skills: [
      "Next.js",
      "Power BI / Data Analytics",
      "Business Intelligence",
      "Razorpay Payments",
      "Admin & Owner Dashboards",
      "Operational KPI Design",
    ],
  },
  {
    head: "VaproShine Admin Dashboard",
    data: "A 5-page Power BI admin dashboard for a service-based business, designed for decision-making, not vanity metrics. Tracks revenue conversion, customer retention, coupon impact, service ratings, and automation health with business-driven KPIs and defensive DAX.",
    preview: "https://github.com/divygandhi4978/PowerBI_Showcase",
    source: "https://github.com/divygandhi4978/PowerBI_Showcase",
    img: vapro_powerbi,
    skills: [
      "Power BI",
      "Data Analytics",
      "Business Intelligence",
      "DAX & Dashboard Automation",
    ],
  },
  {
    head: "Personal portfolio",
    data: "Project display with personal info including tech stack",
    preview: "https://personal-pf-alpha.vercel.app/",
    source: "https://github.com/divygandhi4978/personal-pf",
    img: portfolio,
    skills: ["NextJs", "NodeMailer"],
  },
  {
    head: "Money Moves",
    data: "Articles about product , Marketing and Finance. [ Currently dummy data displayed.]",
    preview: "https://moneymoves1.netlify.app/",
    source: "https://github.com/divygandhi4978/personal-pf",
    img: newsletter,
    skills: ["MERN", "API use for Frontend"],
  },
  {
    head: "DGMonitor",
    data: "Tracks Vishwamitri water levels with custom alerts.",
    preview: "https://thriving-pasca-979f1d.netlify.app/",
    source: "#",
    img: DGMonitor,
    skills: ["MERN", "Cron", "WebScraping"],
  },
  {
    head: "SecureHold",
    data: "Synchronize your passwords across multiple devices and explore additional security features.",
    preview: "https://secure-hold-1.onrender.com/",
    source: "https://github.com/divygandhi4978/secure-hold",
    img: securehold,
    skills: ["MERN", "JWT"],
  },
  {
    head: "WebCrawler",
    data: "Visualize how pages connect across the web",
    preview: "https://webscrawler16.netlify.app/",
    source: "https://github.com/divygandhi4978/WebCrawler",
    img: webcrawler,
    skills: ["ReactJs", "NodeJs", "Express", "Crawling"],
  },
  {
    head: "URLShortner",
    data: "Shorten your urls with custom alias and expiration with QR Code.",
    preview: "https://urlshortner1-0gcr.onrender.com/",
    source: "https://github.com/divygandhi4978/urlShortner",
    img: urlshortner,
    skills: ["ReactJs", "NodeJs", "Express"],
  },
];

export default list;

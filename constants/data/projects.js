import securehold from "../images/securehold.png";
import urlshortner from "../images/urlshortner.png";
import portfolio from "../images/portfolio.png";
import newsletter from "../images/newsletter.png";
import DGMonitor from "../images/water.png";
import webcrawler from "../images/webcrawler.png";
import vapro from "../images/vaproshine.gif";
import vapro_powerbi from "../images/vapro_powerbi.gif";
import finsight from "../images/finsight.jpg";

const list = [
  {
    head: "VaproShine",
    data: "A mobile steam-cleaning booking platform with live job tracking and a business dashboard to monitor revenue, customers, and service performance.",
    preview: "https://pro-steam.vercel.app/",
    source: "https://github.com/divygandhi4978",
    img: vapro,
    skills: [
      "Next.js",
      "Power BI / Data Analytics",
      "Business Intelligence",
      "Razorpay Payments",
      "Admin & Owner Dashboards",
      "Operational KPI Design",
    ],

    caseStudy: {
      context:
        "I worked with a live service business that had steady bookings but relied heavily on intuition for decisions. While activity looked strong, there was no clear visibility on actual revenue realization, repeat customers, or operational leakage.",

      problems: [
        "High booking numbers masked payment failures and revenue leakage",
        "No visibility into repeat vs one-time customers",
        "Discounts were used without knowing their real revenue impact",
        "Operational issues were identified only after customer complaints",
      ],

      solution: [
        "Built an executive view focused on paid revenue and conversion gaps",
        "Tracked service-level and pricing performance instead of raw volume",
        "Introduced customer retention and repeat behavior tracking",
        "Mapped the full lead → booking → payment funnel",
        "Added feedback and ops monitoring for early issue detection",
      ],

      insights: [
        "Bookings alone are misleading; paid and repeat bookings matter",
        "Some discounts increased volume but reduced average order value",
        "Retention was a bigger growth lever than acquiring new leads",
      ],

      tradeoffs: [
        "Limited the dashboard to five pages to avoid information overload",
        "Avoided predictive models that didn’t improve daily decisions",
      ],

      mistake:
        "Initially focused too much on booking volume as a success metric.",

      correction:
        "Shifted the system to prioritize paid revenue, leakage, and repeat usage.",

      whyMBA:
        "The project showed me that data highlights problems, but strategic and financial judgment drives outcomes. I want an MBA to build that decision-making capability.",
    },
  },
  {
    head: "VaproShine - PowerBI Dashboard",
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
    head: "Finsight – Equity Analysis Framework",
    data: "A sector-agnostic equity analysis framework built around universal financial and decision-making layers rather than industry-specific metrics.",
    preview: null,
    source: null,
    img: finsight,
    skills: [
      "Equity Research",
      "Valuation Logic",
      "Financial Statement Analysis",
      "Decision Modeling",
    ],

    caseStudy: {
      context:
        "Conceptual framework to evaluate public companies across sectors using common financial and risk signals.",

      problems: [
        "Sector-specific metrics limit cross-industry comparison",
        "Analysis breaks when operational data is unavailable",
        "Asset-heavy indicators distract from core financial reality",
      ],

      solution: [
        "Standardized decision layers applicable to all companies",
        "Focused on valuation, financial health, growth quality, and risk",
        "Designed to remain usable even with incomplete disclosures",
      ],

      insights: [
        "Financial statements enable stronger cross-sector comparability",
        "Risk signals can be identified without industry-specific assets",
        "Framework quality matters more than feature depth",
      ],

      tradeoffs: [
        "Chose framework depth over product execution",
        "Avoided dashboards and UI to prevent premature build-out",
      ],

      mistake:
        "Considered building a full product before validating the framework rigor.",

      correction:
        "Paused execution to refine decision logic and prioritize live business work.",

      whyMBA:
        "Highlighted the need for strategic judgment to apply analytical frameworks effectively; an MBA is required to scale this thinking into real investment and business decisions.",
    },
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

import securehold from "../images/securehold.png";
import urlshortner from "../images/urlshortner.png";
import portfolio from "../images/portfolio.png";
import newsletter from "../images/newsletter.png";

const list = [
  {
    head: "Money Moves",
    data: "Articles about product , Marketing and Finance.",
    preview: "https://moneymoves1.netlify.app/",
    source: "https://github.com/divygandhi4978/personal-pf",
    img: newsletter,
    skills: ["MERN", "API use for Frontend"],
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
    head: "SecureHold",
    data: "Synchronize your passwords across multiple devices and explore additional security features.",
    preview: "https://secure-hold-1.onrender.com/",
    source: "https://github.com/divygandhi4978/secure-hold",
    img: securehold,
    skills: ["MERN", "JWT"],
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

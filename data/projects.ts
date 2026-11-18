export type Project = {
  slug: string; name: string; kind: "Company site" | "Personal project" | "Client project";
  blurb: string; features: string[]; highlight?: string; live: string; code?: string;
};

// Replace screenshots by dropping public/projects/<slug>.png
export const projects: Project[] = [
  { slug: "evsetu", name: "EvSetu", kind: "Personal project", live: "https://evsetu.vercel.app/",
    code: "https://github.com/avinashkumar002",
    blurb: "EV charging marketplace connecting drivers with verified private chargers and letting hosts earn by listing theirs. Sign-up is role-based, with a dedicated dashboard for each role.",
    features: ["Live charger map", "Hour-based slot booking", "Host listings with photos, availability and hourly rates", "Role-based authentication", "Cancellation policies", "Help, safety and report-concern pages"],
    highlight: "Leaflet, RTK Query, React Hook Form, Zod and ImageKit" },
  { slug: "oodles", name: "oodles.com", kind: "Company site", live: "https://oodles.com/",
    blurb: "Revamped the homepage for Oodles' AI-powered engineering platform, guiding visitors through the Oodles Dashboard with animated product demos.",
    features: ["AI WBS and sprint demos", "Code review and quality analytics demos", "Timesheet and billing views", "IP protection and audit trail", "Expertise and industry mega-menu", "Specialist directory", "Client testimonials", "FAQ"],
    highlight: "Rebuilt the design system and improved PageSpeed score from 50 to 80" },
  { slug: "oodlesstudio", name: "oodlesstudio.com", kind: "Company site", live: "https://www.oodlesstudio.com/",
    blurb: "Design agency site with 16 service pages, a filterable portfolio and industry-specific sections. Built animated, Figma-accurate service pages.",
    features: ["GSAP scroll animations", "Filterable portfolio", "Industry tabs for fintech, healthtech, edtech, e-commerce and fitness", "Methodology section", "Testimonials", "Contact form with file upload"],
    highlight: "Improved SEO by 30%" },
  { slug: "venues", name: "venues.me", kind: "Client project", live: "https://venues.me/",
    blurb: "Hotel-venue booking platform for Kuwait and the Gulf. Send one inquiry to several hotels and compare their proposals.",
    features: ["Search by city, attendance and seating setup", "Browse by occasion", "Multi-hotel inquiry", "Proposal comparison", "Arabic and English versions", "Favorites and a “my requests” account area", "Hotel partner registration"],
    highlight: "Built solo in 45 days with OAuth and dynamic filters" },
  { slug: "parkly", name: "Parkly", kind: "Client project", live: "https://parkly-web.vercel.app/",
    blurb: "Verified private parking near stadiums and event venues, where drivers book and hosts list driveways and garage spots.",
    features: ["Real-time map", "Host and driver sign-up flows", "Event-based parking discovery", "Waitlist form", "FAQ and policy pages"],
    highlight: "Owned the frontend and production deployment" },
  { slug: "clay", name: "Clay Consulting", kind: "Client project", live: "https://clay-consulting.netlify.app/",
    blurb: "Website for a federal healthcare services company serving veterans, reservists and federal employees across occupational health, disability exams and audiology.",
    features: ["Services", "About", "Testimonials", "Careers and referrals", "Service cards", "Benefits and stats sections", "Contact page with location map links"],
  },
  { slug: "digitalproton", name: "Digital Proton", kind: "Client project", live: "https://digitalproton.com/",
    blurb: "Website for a Microsoft Partner firm focused on secure, identity-first cloud work with Microsoft 365, Entra ID and Zero Trust.",
    features: ["CxO Digital Counsel, Tech Mercenary and Tech Reinforcement service lines", "Industry use cases", "Blog with sharing options", "Contact form for India and US offices"],
  },
];

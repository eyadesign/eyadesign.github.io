import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "carhive",
    slug: "carhive",
    number: "01",
    title: "CarHive",
    category: "Product Design / UX / UI",
    year: "2024",
    role: "Product Designer",
    timeline: "4 months",
    team: "1 designer, 2 engineers, 1 PM",
    summary: "Redesigning the car rental experience around clarity, confidence and ease.",
    indexNote: "Car Rental Experience",
    heroImage: { aspect: "full-bleed", label: "CarHive — Hero" },

    overview:
      "[CASE STUDY INTRODUCTION — REPLACE LATER] CarHive is a car rental platform connecting renters with independent fleet owners. The product needed a redesign that made booking a car feel as simple as booking a ride.",
    challenge:
      "[PROBLEM STATEMENT — REPLACE LATER] Renters were dropping off mid-booking, unsure about pricing, availability and vehicle condition. The existing flow buried trust-building information behind too many steps.",
    context:
      "[CONTEXT — REPLACE LATER] The product serves two audiences at once — renters searching for a vehicle and owners managing a fleet — and both needed to feel considered without the interface serving neither well.",
    research:
      "[RESEARCH DETAILS — REPLACE LATER] Research combined usability sessions with existing renters, a competitive review of regional and global rental platforms, and a teardown of the current funnel to locate drop-off points.",
    insights: [
      "[INSIGHT — REPLACE LATER] Renters wanted price certainty before entering their details.",
      "[INSIGHT — REPLACE LATER] Vehicle trust signals (condition, owner rating) were the top driver of booking confidence.",
      "[INSIGHT — REPLACE LATER] The multi-step booking flow was abandoned most often at document upload.",
    ],
    userFlows: { aspect: "landscape", label: "CarHive — Booking Flow" },
    wireframes: { aspect: "landscape", label: "CarHive — Early Wireframes" },
    designDecisions: [
      {
        heading: "Price transparency, upfront",
        body: "[DESIGN DECISION — REPLACE LATER] Total price with all fees moved to the first screen, before any commitment from the user.",
      },
      {
        heading: "Trust before transaction",
        body: "[DESIGN DECISION — REPLACE LATER] Vehicle condition photos and owner ratings were surfaced earlier in the flow, ahead of payment details.",
      },
      {
        heading: "Progressive documentation",
        body: "[DESIGN DECISION — REPLACE LATER] Document upload was split into an optional early step and a required late step, reducing perceived friction.",
      },
    ],
    visualDesign: {
      heading: "A calmer visual language",
      body: "[DESIGN DECISION — REPLACE LATER] The interface moved to a restrained palette and a stronger type system so vehicle photography could carry more visual weight.",
      image: { aspect: "portrait", label: "CarHive — Visual System" },
    },
    designSystem: {
      heading: "A system built to scale",
      body: "[DESIGN DECISION — REPLACE LATER] Components were rebuilt as a token-driven system shared between the renter and owner surfaces.",
      image: { aspect: "landscape", label: "CarHive — Design System" },
    },
    finalSolution:
      "[FINAL SOLUTION — REPLACE LATER] The redesigned flow surfaces price, trust signals and availability within the first two screens, with document upload reorganised around user momentum rather than internal process order.",
    gallery: [
      { aspect: "landscape", label: "CarHive — Search" },
      { aspect: "portrait", label: "CarHive — Vehicle Detail" },
      { aspect: "landscape", label: "CarHive — Checkout" },
      { aspect: "square", label: "CarHive — Owner Dashboard" },
    ],
    impact: [
      "[IMPACT METRIC — TO BE PROVIDED]",
      "[IMPACT METRIC — TO BE PROVIDED]",
    ],
    reflection:
      "[REFLECTION — REPLACE LATER] The project reinforced how much booking confidence depends on sequencing — the same information, reordered, changed how the whole flow felt.",
  },
  {
    id: "pex",
    slug: "palestinian-stock-exchange",
    number: "02",
    title: "Palestinian Stock Exchange",
    category: "Product Design / UX / UI",
    year: "2024",
    role: "Product Designer",
    timeline: "3 months",
    team: "1 designer, 3 engineers",
    summary: "Bringing clarity to real-time market data across desktop and mobile.",
    indexNote: "Financial Product Experience — Desktop + Mobile",
    heroImage: { aspect: "full-bleed", label: "PEX — Hero" },
    overview:
      "[CASE STUDY INTRODUCTION — REPLACE LATER] The Palestinian Stock Exchange (PEX) platform gives investors and analysts access to live market data, company filings and trading history across desktop and mobile.",
    challenge:
      "[PROBLEM STATEMENT — REPLACE LATER] Dense financial data needed to remain scannable at a glance while staying precise enough for professional analysis.",
    designDecisions: [
      {
        heading: "One data hierarchy, two densities",
        body: "[DESIGN DECISION — REPLACE LATER] Desktop and mobile share the same underlying hierarchy, with density — not structure — adapted per surface.",
      },
    ],
    gallery: [
      { aspect: "landscape", label: "PEX — Market Overview" },
      { aspect: "portrait", label: "PEX — Mobile Watchlist" },
    ],
    impact: ["[IMPACT METRIC — TO BE PROVIDED]"],
  },
  {
    id: "maintenance-tracker",
    slug: "maintenance-tracker",
    number: "03",
    title: "Maintenance Tracker",
    category: "Product Design / UX / UI",
    year: "2024",
    role: "Product Designer",
    summary: "A B2B SaaS platform for tracking equipment maintenance across sites.",
    indexNote: "B2B SaaS",
    heroImage: { aspect: "full-bleed", label: "Maintenance Tracker — Hero" },
    overview:
      "[CASE STUDY INTRODUCTION — REPLACE LATER] A scheduling and reporting tool built for maintenance teams managing equipment across multiple facilities.",
    challenge:
      "[PROBLEM STATEMENT — REPLACE LATER] Field technicians and office planners needed the same data presented in very different ways — one on mobile, in the field, one on desktop, in review.",
    gallery: [{ aspect: "landscape", label: "Maintenance Tracker — Dashboard" }],
    impact: ["[IMPACT METRIC — TO BE PROVIDED]"],
  },
  {
    id: "gaith",
    slug: "gaith",
    number: "04",
    title: "Gaith",
    category: "UX / UI",
    year: "2023",
    role: "UX/UI Designer",
    summary: "A digital media experience designed for engagement and discovery.",
    indexNote: "Digital Media Experience",
    heroImage: { aspect: "full-bleed", label: "Gaith — Hero" },
    overview:
      "[CASE STUDY INTRODUCTION — REPLACE LATER] Gaith is a digital media experience focused on content discovery and audience engagement.",
    gallery: [{ aspect: "portrait", label: "Gaith — Content Feed" }],
    impact: ["[IMPACT METRIC — TO BE PROVIDED]"],
  },
  {
    id: "environmental-impact-dashboard",
    slug: "environmental-impact-dashboard",
    number: "05",
    title: "Environmental Impact Dashboard",
    category: "Data Visualization / Product Design",
    year: "2023",
    role: "Product Designer",
    summary: "Making complex environmental data legible for non-specialist decision makers.",
    indexNote: "Data Visualization",
    heroImage: { aspect: "full-bleed", label: "Environmental Impact Dashboard — Hero" },
    overview:
      "[CASE STUDY INTRODUCTION — REPLACE LATER] A dashboard translating environmental monitoring data into clear, decision-ready visualisations.",
    gallery: [{ aspect: "landscape", label: "Dashboard — Overview" }],
    impact: ["[IMPACT METRIC — TO BE PROVIDED]"],
  },
  {
    id: "schoola",
    slug: "schoola",
    number: "06",
    title: "Schoola",
    category: "UX / UI",
    year: "2023",
    role: "UX/UI Designer",
    summary: "An education platform connecting students, teachers and parents.",
    indexNote: "Education Platform",
    heroImage: { aspect: "full-bleed", label: "Schoola — Hero" },
    overview:
      "[CASE STUDY INTRODUCTION — REPLACE LATER] Schoola is an education platform built to keep students, teachers and parents aligned on progress and schedules.",
    gallery: [{ aspect: "landscape", label: "Schoola — Class Overview" }],
    impact: ["[IMPACT METRIC — TO BE PROVIDED]"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}

export const ndaWork = {
  note: "A selection of product work cannot be shown publicly due to confidentiality. Detailed case studies are available during the interview process.",
  entries: [
    { client: "Pfizer", category: "Mobile Application" },
    { client: "eloola", category: "B2B SaaS" },
    { client: "Egyptian Ministries", category: "Tablet & Mobile Application" },
    { client: "Zero Emission Industries", category: "Hydrogen Vessel Monitoring System" },
    { client: "Telgani", category: "Mobile Application" },
    { client: "Pelcro", category: "B2B SaaS" },
  ],
};

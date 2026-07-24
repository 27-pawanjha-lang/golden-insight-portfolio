import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Download, Mail, Phone, MapPin, Linkedin, Send, ArrowUp,
  Briefcase, GraduationCap, Award, TrendingUp, Users, Target, LineChart,
  BarChart3, PieChart, Sparkles, Trophy, ShieldCheck, Menu, X,
  Building2, Calendar, CheckCircle2, Star, Quote,
} from "lucide-react";
import pawanAsset from "@/assets/pawan.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Pawan Kumar Jha | Marketing & Wealth Management Professional" },
      {
        name: "description",
        content:
          "PGDM student specializing in Marketing and Wealth Management with experience in client handling, investment advisory, market research, digital marketing, and business analysis.",
      },
      { property: "og:title", content: "Pawan Kumar Jha | Marketing & Wealth Management Professional" },
      { property: "og:description", content: "PGDM student specializing in Marketing and Wealth Management with experience in client handling, investment advisory, market research, digital marketing, and business analysis." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* ---------------- Hooks ---------------- */

function useCounter(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return val;
}

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ---------------- Data ---------------- */

const NAV = [
  ["Home", "home"], ["About", "about"], ["Experience", "experience"],
  ["Skills", "skills"], ["Projects", "projects"], ["Certifications", "certifications"],
  ["Leadership", "leadership"], ["Contact", "contact"],
] as const;

const STATS = [
  { value: 50, suffix: "+", label: "Prospective Clients Engaged" },
  { value: 15, suffix: "+", label: "Client Portfolios Managed" },
  { value: 3, suffix: "+", label: "Professional Internships" },
  { value: 3, suffix: "+", label: "Professional Certifications" },
  { value: 20, suffix: "%", label: "Advisor Meeting Conversions" },
  { value: 25, suffix: "%", label: "Peer Learning Improvement" },
];

const EXPERIENCE = [
  {
    role: "Wealth Management Intern",
    company: "Prognosis Financial Pvt. Ltd.",
    location: "New Delhi",
    period: "April 2026 – June 2026",
    points: [
      "Reached out to 50+ prospective clients through lead generation and follow-up calls, converting 10+ into active wealth management consultations.",
      "Explained mutual funds, SIPs, insurance and investment products to 30+ clients alongside senior advisors.",
      "Supported a 20% increase in advisor meeting conversions.",
      "Analyzed client financial profiles and market trends to recommend suitable investment options.",
      "Improved proposal turnaround time by 15%.",
      "Maintained records for 50+ client accounts and reduced follow-up errors.",
    ],
  },
  {
    role: "Social Media & Teaching Volunteer",
    company: "Pehchaan: The Street School NGO",
    location: "New Delhi",
    period: "January 2026",
    points: [
      "Created and managed social media content for NGO outreach across 3 platforms.",
      "Taught and mentored 20+ underprivileged children.",
      "Designed awareness activities that improved session participation by 25%.",
    ],
  },
  {
    role: "Client Handling Intern",
    company: "NJ Wealth Group",
    location: "Muzaffarpur, Bihar",
    period: "May 2025 – June 2025",
    points: [
      "Managed and analyzed 15+ client portfolios.",
      "Used financial statement analysis to support mutual fund investment decisions.",
      "Delivered investment insights and recommendations to clients.",
      "Researched financial products and market trends.",
      "Prepared 5+ research briefs used by advisors.",
    ],
  },
];

const SKILLS = [
  { title: "Marketing", icon: Target, items: ["Brand Management", "Marketing Strategy", "Consumer Insights", "Digital Marketing", "Email Marketing"] },
  { title: "Finance & Wealth Management", icon: LineChart, items: ["Mutual Funds", "SIPs", "Investment Products", "Client Portfolio Analysis", "Financial Statement Analysis", "Market Research"] },
  { title: "Business & Data Analytics", icon: BarChart3, items: ["Data Analysis", "Power BI", "SPSS", "Advanced Excel", "MS Office 365"] },
  { title: "Professional Skills", icon: Users, items: ["Client Handling", "Communication", "Team Leadership", "Relationship Management", "Presentation", "Problem Solving"] },
];

const CERTS = [
  { title: "HubSpot Email Marketing", issuer: "HubSpot Academy" },
  { title: "PMI Brand Strategy", issuer: "Project Management Institute" },
  { title: "Advanced Diploma in Digital Marketing", issuer: "Certified Program" },
  { title: "Advanced Excel", issuer: "Professional Certification" },
  { title: "Power BI Fundamentals", issuer: "Microsoft" },
];

const PROJECTS = [
  { title: "Financial Statement Analysis", desc: "Deep-dive analysis of company balance sheets, income statements and cash flows to guide mutual fund recommendations.", skills: ["Ratio Analysis", "Valuation", "Reporting"], tools: ["Excel", "Power BI"] },
  { title: "Mutual Fund & Investment Research", desc: "Comparative research across equity, debt and hybrid funds with risk-adjusted return insights for advisors.", skills: ["Market Research", "Portfolio Analysis"], tools: ["Excel", "Bloomberg-style datasets"] },
  { title: "Market Research & Consumer Insights", desc: "Primary and secondary research decoding consumer decision journeys and translating findings into actionable strategy.", skills: ["Survey Design", "SPSS", "Insight Reporting"], tools: ["SPSS", "Google Forms"] },
  { title: "Digital Marketing & Brand Strategy", desc: "Campaign strategy across email, social and content — mapped to brand positioning frameworks and KPIs.", skills: ["Brand Strategy", "Email", "SEO Basics"], tools: ["HubSpot", "Canva"] },
  { title: "Client Portfolio Analysis", desc: "Structured review of 15+ client portfolios with rebalancing recommendations and goal-based allocation.", skills: ["Portfolio Review", "Client Advisory"], tools: ["Excel", "CRM"] },
];

const LEADERSHIP = [
  { title: "Internship Coordinator", org: "NJ Wealth Group", icon: Briefcase },
  { title: "Client Engagement Lead", org: "Prognosis Financial", icon: Users },
  { title: "Project Team Lead", org: "FIIB, New Delhi", icon: Target },
  { title: "Campus Event Volunteer", org: "FIIB, New Delhi", icon: Star },
];

const ACHIEVEMENTS = [
  "Improved peer learning outcomes by 25% by simplifying mutual fund and financial concepts for 15+ teammates.",
  "Earned 3 professional certifications while managing academic and internship responsibilities.",
  "Recognized for client trust-building during wealth management internship.",
  "Contributed to a 20% rise in advisor-client engagement.",
];

/* ---------------- Components ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-charcoal/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button onClick={() => jump("home")} className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-primary-foreground font-display font-bold shadow-[0_0_20px_-4px_var(--gold)]">
            P
          </span>
          <span className="font-display font-semibold tracking-tight text-ivory hidden sm:block">
            Pawan <span className="text-gold-gradient">Kumar Jha</span>
          </span>
        </button>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(([label, id]) => (
            <button
              key={id}
              onClick={() => jump(id)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-gold transition-colors relative group"
            >
              {label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </button>
          ))}
        </nav>
        <button
          onClick={() => jump("contact")}
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 transition"
        >
          Hire Me <ArrowRight className="h-4 w-4" />
        </button>
        <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-ivory p-2">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-panel border-t border-border">
          <div className="flex flex-col p-4">
            {NAV.map(([label, id]) => (
              <button
                key={id}
                onClick={() => jump(id)}
                className="text-left py-3 px-2 text-ivory hover:text-gold border-b border-border/40 last:border-0"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setP(scrolled * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div className="h-full bg-gold-gradient transition-[width] duration-150" style={{ width: `${p}%` }} />
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 transition animate-pulse-gold"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full gold-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
        <Sparkles className="h-3 w-3" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-ivory">
        {title.split("|").map((t, i) => (
          <span key={i}>{i === 1 ? <span className="text-gold-gradient">{t}</span> : t}</span>
        ))}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ---------------- Sections ---------------- */

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-10">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full gold-border px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Available for Opportunities
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-ivory">
            Pawan Kumar<br />
            <span className="text-gold-gradient">Jha</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ivory/80 max-w-2xl font-medium">
            Marketing &amp; Wealth Management Professional · Business Analyst · Client Relationship &amp; Data-Driven Strategy
          </p>
          <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
            PGDM student specializing in Marketing and Wealth Management, with hands-on experience in
            client portfolio management, investment advisory support, market research, client
            relationship management, digital marketing, and data-driven decision-making.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 transition">
              View My Experience <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 rounded-full gold-border bg-charcoal/40 px-6 py-3 text-sm font-semibold text-ivory hover:bg-charcoal/70 transition">
              Connect With Me
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-gold hover:text-gold-soft transition">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-gold" /> FIIB, New Delhi</div>
            <div className="hidden sm:flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> New Delhi, India</div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gold-gradient blur-3xl opacity-30" />
            <div className="absolute inset-0 rounded-full animate-pulse-gold" />
            <div className="relative h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full p-[3px] bg-gold-gradient shadow-[var(--shadow-gold)]">
              <div className="h-full w-full rounded-full bg-charcoal p-2">
                <img
                  src={pawanAsset.url}
                  alt="Pawan Kumar Jha — Marketing & Wealth Management Professional"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-primary-foreground"><TrendingUp className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Advisor Conversions</div>
                <div className="text-sm font-semibold text-ivory">+20% Uplift</div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 glass-panel rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-primary-foreground"><Users className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Clients Engaged</div>
                <div className="text-sm font-semibold text-ivory">50+ Prospects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCounter(value, active);
  return (
    <div className="glass-panel rounded-2xl p-6 hover-lift">
      <div className="font-display text-4xl sm:text-5xl font-bold text-gold-gradient">
        {n}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const strengths = [
    "Client-centric communication", "Financial & market research", "Marketing strategy",
    "Consumer insights", "Business analysis", "Data-driven decision-making",
    "Relationship management", "Team leadership",
  ];
  return (
    <section id="about" className="relative py-28 px-6 lg:px-10">
      <div ref={ref} className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About Me" title="A future-focused | professional" subtitle="Bridging marketing insight with financial acumen to build lasting client value." />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="glass-panel rounded-3xl p-8 lg:p-10">
            <p className="text-ivory/90 text-lg leading-relaxed">
              I'm a PGDM student at <span className="text-gold font-semibold">Fortune Institute of International Business, New Delhi</span>,
              specializing in Marketing and Wealth Management.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I combine knowledge of marketing strategy, consumer insights, financial products,
              client relationship management, and data analysis. Practically, I've worked with prospective clients,
              managed client portfolios, supported investment advisory, researched financial products, and created
              data-driven insights that move decisions.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-2">
              {strengths.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-ivory/85">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> {s}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 lg:px-10 bg-[oklch(0.14_0.006_60)]">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Experience" title="Professional | Journey" subtitle="Client-facing roles across wealth management, advisory support, and social impact." />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.role} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6">
                  <div className="grid h-4 w-4 place-items-center rounded-full bg-gold-gradient ring-4 ring-charcoal">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                  </div>
                </div>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}>
                  <div className="glass-panel rounded-2xl p-6 lg:p-7 hover-lift">
                    <div className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-gold ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="h-3 w-3" /> {exp.period}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-ivory">{exp.role}</h3>
                    <div className={`mt-1 flex items-center gap-2 text-sm text-muted-foreground ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Building2 className="h-4 w-4 text-gold" /> {exp.company} · {exp.location}
                    </div>
                    <ul className={`mt-5 space-y-2.5 text-sm text-ivory/80 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.points.map((p) => (
                        <li key={p} className={`flex gap-2 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Capabilities" title="Skills & | Expertise" subtitle="A cross-disciplinary toolkit — from brand strategy to portfolio analytics." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map(({ title, icon: Icon, items }) => (
            <div key={title} className="glass-panel rounded-2xl p-6 hover-lift group">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-primary-foreground shadow-[var(--shadow-gold)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ivory">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it} className="text-xs rounded-full gold-border px-3 py-1.5 text-ivory/85 bg-charcoal/40 hover:bg-gold/10 hover:text-gold transition">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 lg:px-10 bg-[oklch(0.14_0.006_60)]">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Portfolio" title="Featured Projects & | Business Work" subtitle="Selected work spanning financial research, analytics and brand strategy." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="glass-panel rounded-2xl p-7 hover-lift flex flex-col">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gold-gradient text-primary-foreground font-display font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <PieChart className="h-5 w-5 text-gold/60" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ivory">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-5 space-y-3 text-xs">
                <div>
                  <div className="text-gold uppercase tracking-widest mb-1.5">Skills</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.skills.map((s) => <span key={s} className="rounded-full bg-charcoal/60 border border-border px-2.5 py-1 text-ivory/80">{s}</span>)}
                  </div>
                </div>
                <div>
                  <div className="text-gold uppercase tracking-widest mb-1.5">Tools</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tools.map((s) => <span key={s} className="rounded-full bg-charcoal/60 border border-border px-2.5 py-1 text-ivory/80">{s}</span>)}
                  </div>
                </div>
              </div>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-soft">
                View Details <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Credentials" title="Professional | Certifications" subtitle="Continuously levelling up across marketing, finance and analytics." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => (
            <div key={c.title} className="relative glass-panel rounded-2xl p-6 hover-lift overflow-hidden">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gold-gradient text-primary-foreground shadow-[var(--shadow-gold)]">
                  <Award className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-gold">Certified</div>
                  <h3 className="mt-1 text-lg font-bold text-ivory truncate">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-soft">
                Verify Credential <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="relative py-28 px-6 lg:px-10 bg-[oklch(0.14_0.006_60)]">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Leadership" title="Roles & | Responsibility" subtitle="Leading teams, engaging clients and executing projects with accountability." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map(({ title, org, icon: Icon }) => (
            <div key={title} className="glass-panel rounded-2xl p-6 hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ivory">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{org}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <SectionTitle eyebrow="Achievements" title="Recognition & | Impact" />
          <div className="grid gap-5 md:grid-cols-2">
            {ACHIEVEMENTS.map((a) => (
              <div key={a} className="glass-panel rounded-2xl p-6 hover-lift flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-gradient text-primary-foreground">
                  <Trophy className="h-5 w-5" />
                </div>
                <p className="text-ivory/85 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Get in touch" title="Let's build | something meaningful" subtitle="Open to full-time roles, internships and collaborations in marketing, wealth management, and business analytics." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "27-pawan.jha@fiib.edu.in", href: "mailto:27-pawan.jha@fiib.edu.in" },
              { icon: Phone, label: "Phone", value: "+91 6299188309", href: "tel:+916299188309" },
              { icon: MapPin, label: "Location", value: "New Delhi, India" },
              { icon: Linkedin, label: "LinkedIn", value: "Add your LinkedIn URL", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => {
              const Wrapper: any = href ? "a" : "div";
              return (
                <Wrapper key={label} href={href} className="glass-panel rounded-2xl p-5 flex items-center gap-4 hover-lift">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-primary-foreground shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-gold">{label}</div>
                    <div className="text-ivory truncate">{value}</div>
                  </div>
                </Wrapper>
              );
            })}
            <div className="glass-panel rounded-2xl p-6">
              <Quote className="h-6 w-6 text-gold" />
              <p className="mt-3 text-ivory/85 italic leading-relaxed">
                "Trust is the true currency of wealth management — earned by clarity, delivered through discipline."
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
            className="glass-panel rounded-3xl p-7 lg:p-9 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What is this about?" />
            <div>
              <label className="text-xs uppercase tracking-widest text-gold">Message</label>
              <textarea required rows={5} name="message" placeholder="Tell me a bit about the opportunity…"
                className="mt-2 w-full rounded-xl gold-border bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-muted-foreground/60 outline-none focus:border-gold transition" />
            </div>
            <button type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 transition">
              {sent ? <>Sent <CheckCircle2 className="h-4 w-4" /></> : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Your details are kept confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-gold">{label}</label>
      <input required name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full rounded-xl gold-border bg-charcoal/50 px-4 py-3 text-ivory placeholder:text-muted-foreground/60 outline-none focus:border-gold transition" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-14 lg:px-10 bg-[oklch(0.12_0.005_60)]">
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-primary-foreground font-display font-bold">P</span>
            <span className="font-display text-lg font-semibold text-ivory">Pawan Kumar Jha</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm italic">
            "Building meaningful impact through marketing, financial insight, client relationships, and data-driven decisions."
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-3">Explore</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-muted-foreground hover:text-gold transition">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-3">Connect</div>
          <div className="space-y-2 text-sm">
            <a href="mailto:27-pawan.jha@fiib.edu.in" className="flex items-center gap-2 text-ivory/85 hover:text-gold transition"><Mail className="h-4 w-4" /> 27-pawan.jha@fiib.edu.in</a>
            <a href="tel:+916299188309" className="flex items-center gap-2 text-ivory/85 hover:text-gold transition"><Phone className="h-4 w-4" /> +91 6299188309</a>
            <a href="#" className="flex items-center gap-2 text-ivory/85 hover:text-gold transition"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© 2026 Pawan Kumar Jha. All rights reserved.</div>
        <div>Crafted with precision · Premium Executive Portfolio</div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */

function Portfolio() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { projects } from "@/data/projects";

const Galaxy = dynamic(() => import("@/components/Galaxy"), { ssr: false });

const skills = ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Zustand", "TanStack Query",
  "Tailwind CSS", "GSAP", "Zod", "REST APIs", "Python", "FastAPI", "Figma", "Lighthouse"];

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // context + revert keeps React strict-mode double runs from leaving text hidden
    const ctx = gsap.context(() => {
      if (calm) return;
      gsap.fromTo(".hero-line", { yPercent: 110 }, { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.12, delay: 0.2 });
      gsap.utils.toArray<HTMLElement>(".shot").forEach((el) =>
        gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, {
          clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" }
        }));
    });
    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Galaxy />

      <header className="top">
        <a href="#top" className="brand">Avinash Kumar Singh</a>
        <nav><a href="#work">Work</a><a href="#now">Resume</a><a href="#contact">Contact</a></nav>
      </header>

      <section className="hero" id="top">
        <h1>
          <span className="mask"><span className="hero-line grad">Hi, I'm Avinash Kumar Singh</span></span>
        </h1>
        <p className="mask"><span className="hero-line sub">Frontend Developer | React.js | Next.js | TypeScript</span></p>
        <p className="hint">Scroll to fly through</p>
      </section>

      <section className="block">
        <h2>About</h2>
        <p className="lead">
          I build fast, scalable, and user-focused web applications that turn complex ideas into seamless digital experiences.
          With 2 years of experience in frontend development, I specialize in React.js, Next.js, and TypeScript, with a strong focus on reusable component architecture, performance optimization, and pixel-perfect UI implementation.
          From independently building client-facing applications to revamping production platforms, I enjoy taking ownership of features end to end — from understanding requirements and translating Figma designs into responsive interfaces to API integration, debugging, and deployment.
          I believe great frontend development goes beyond making things look good. It's about building experiences that are reliable, accessible, performant, and easy to maintain.
        </p>
        <ul className="chips">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
      </section>

      <section className="block wide" id="work">
        <h2>Work</h2>
        {projects.map((p, i) => (
          <article key={p.slug} className={`row ${i % 2 ? "flip" : ""}`}>
            <a className="shot" href={p.live} target="_blank" rel="noreferrer"
              style={{ backgroundImage: `url(/projects/${p.slug}.png), linear-gradient(135deg, var(--c${(i % 4) + 1}), var(--c${((i + 1) % 4) + 1}))` }}
              aria-label={`Open ${p.name}`}>
              <span className="open">Open live site</span>
            </a>
            <div className="info">
              <span className="kind">{p.kind}</span>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <span className="feature-label">Features</span>
              <ul className="chips project-features">
                {p.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              {p.highlight && <p className="project-highlight"><strong></strong> {p.highlight}</p>}
              <div className="links">
                <a href={p.live} target="_blank" rel="noreferrer">Visit site</a>
                {p.code && <a href={p.code} target="_blank" rel="noreferrer">View code</a>}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="block">
        <h2>What people say</h2>
        <blockquote>
          A notable example of his ownership was the Parkly project, where he independently managed the
          front-end development and successfully handled the production deployment.
          <cite>Shruti Yadav, Product Design &amp; Development Head, Oodles Technologies</cite>
        </blockquote>
      </section>

      <section className="block end" id="contact">
        <h2>Let&apos;s build something</h2>
        <p className="lead">Open to frontend roles. Email is the fastest way to reach me.</p>
        <div className="links big">
          <a href="mailto:avinashsingh30oct@gmail.com">Email me</a>
          <a href="https://linkedin.com/in/avinash0454" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/avinashkumar002" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <section className="now-section" id="now">
        <div className="now-heading">
          <h2>Resume</h2>
          <a href="/projects/avinash-kumar-singh.pdf" target="_blank" rel="noreferrer">
            Open document
          </a>
        </div>
        <iframe
          className="now-document"
          src="/projects/avinash-kumar-singh.pdf"
          title="Avinash Kumar Singh document"
        />
      </section>
    </main>
  );
}

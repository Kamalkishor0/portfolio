import Image from "next/image";

const fullStackProjects = [
  {
    number: "01",
    name: "DeSocial",
    type: "Full-stack social platform",
    description:
      "A quieter alternative to the infinite feed: meaningful connections, cursor-based discovery, and a real-time chat layer built for returning users.",
    stack: ["Next.js", "Express", "PostgreSQL", "Prisma", "Redis"],
    result: "90ms -> 18ms API response",
    href: "https://github.com/Kamalkishor0/desocio",
    live: null,
  },
  {
    number: "02",
    name: "Knight",
    type: "Real-time multiplayer chess",
    description:
      "Production-minded multiplayer chess with server-side move validation, queue matchmaking, reconnect handling, and a self-managed Stockfish opponent.",
    stack: ["Next.js", "Node.js", "Socket.IO", "PostgreSQL", "Stockfish"],
    result: "Live matches, end to end",
    href: "https://github.com/Kamalkishor0/knight",
    live: "https://knightt.vercel.app",
  },
  {
    number: "03",
    name: "Recruitizer",
    type: "AI recruitment platform",
    description:
      "A complete recruiter and candidate workflow: job discovery, resume parsing, embedding-based recommendations, and AI-assisted interview evaluation.",
    stack: ["Next.js", "Express", "MongoDB", "FastAPI", "Gemini"],
    result: "One product, three services",
    href: "https://github.com/Kamalkishor0/recruitizer",
    live: "https://recruitizer-client.vercel.app",
  },
];

const mlProjects = [
  {
    name: "ANN from scratch",
    description:
      "A from-first-principles artificial neural network implementation, built without PyTorch or TensorFlow to make the mechanics visible.",
    stack: "Python / Neural networks / Fundamentals",
    href: "https://github.com/Kamalkishor0/ANN-from-scratch",
  },
  {
    name: "Sentiment analysis",
    description:
      "A notebook-based exploration of how language can be turned into a signal, with the full process visible from data preparation to prediction.",
    stack: "Python / NLP / Jupyter",
    href: "https://github.com/Kamalkishor0/sentiment_analysis_v2",
  },
  {
    name: "Movie recommendation system",
    description:
      "A practical recommendation project exploring how user taste can become a useful signal for discovery.",
    stack: "Python / Jupyter / Recommendation systems",
    href: "https://github.com/Kamalkishor0/movie-recommendation-system",
  },
];

const skills = [
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Socket.IO",
  "Python",
  "Embeddings",
];

export default function Home() {
  return (
    <main>
      <nav className="topbar shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Kamalkishor home">
          Kamalkishor Singh<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#ml">ML lab</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:kamalkishorsingh999@gmail.com">
          <span className="status-dot" /> open to build
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> engineer / builder / student</p>
          <h1>
            I build the part
            <br />
            <em>people feel.</em>
          </h1>
          <p className="hero-lede">
            Kamalkishor Singh builds full-stack products with real-time behavior,
            durable backend systems, and interfaces that stay out of the way.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See selected work <span>-&gt;</span></a>
            <a className="button button-quiet" href="/resume.pdf" target="_blank" rel="noreferrer">Read resume <span>+</span></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Quick facts">
          <Image
            className="profile-photo"
            src="/Untitled.png"
            alt="Kamalkishor Singh"
            width={640}
            height={853}
            priority
          />
          <p className="aside-label">Currently studying</p>
          <p className="aside-value">B.Tech in AI &amp; ML<br /><span>2023 - 2027</span></p>
          <div className="aside-rule" />
          <p className="aside-label">Based in</p>
          <p className="aside-value">Uttar Pradesh, India<br /><span>working across the stack</span></p>
        </div>
      </section>

      <section className="signal-strip">
        <div className="shell signal-grid">
          <div><strong>700+</strong><span>LeetCode problems</span></div>
          <div><strong>1970+</strong><span>contest rating / Knight</span></div>
          <div><strong>80%</strong><span>measured API reduction</span></div>
          <div><strong>03</strong><span>systems worth a closer look</span></div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> selected systems</p>
          <h2>Full-stack, with the<br /><em>hard parts included.</em></h2>
          <p className="section-intro">I care about what makes a product hold together: state, latency, failure modes, and the decisions users never have to think about.</p>
        </div>
        <div className="project-list">
          {fullStackProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-main">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-side">
                  <p className="result-label">What changed</p>
                  <p className="result">{project.result}</p>
                  <div className="project-actions">
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Repository <span>-&gt;</span></a>
                    {project.live && <a className="project-link project-live" href={project.live} target="_blank" rel="noreferrer">Live site <span>-&gt;</span></a>}
                  </div>
                </div>
              </div>
              <div className="stack-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="ml-section" id="ml">
        <div className="shell ml-layout">
          <div className="ml-intro">
            <p className="eyebrow"><span>03</span> the ml lab</p>
            <h2>Curiosity,<br /><em>shipped.</em></h2>
            <p>ML is a tool in my stack, not a personality. I reach for it when it makes a workflow sharper, and I still like understanding what is happening underneath.</p>
            <a className="text-link" href="https://github.com/Kamalkishor0" target="_blank" rel="noreferrer">See all on GitHub <span>-&gt;</span></a>
          </div>
          <div className="ml-list">
            {mlProjects.map((project, index) => (
              <a className="ml-item" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                <span className="ml-index">0{index + 1}</span>
                <div><h3>{project.name}</h3><p>{project.description}</p><span className="ml-stack">{project.stack}</span></div>
                <span className="ml-arrow">-&gt;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section shell">
        <div className="about-label"><p className="eyebrow"><span>04</span> the toolkit</p><p className="label-note">A practical mix for<br />shipping the whole thing.</p></div>
        <div className="toolkit-content"><h2>Good systems have<br /><em>quiet foundations.</em></h2><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      </section>

      <footer className="footer shell" id="contact">
        <div><p className="eyebrow"><span>05</span> next up</p><h2>Have a product<br /><em>worth building?</em></h2></div>
        <div className="footer-contact"><a className="email-link" href="mailto:kamalkishorsingh999@gmail.com">kamalkishorsingh999@gmail.com <span>-&gt;</span></a><div className="socials"><a href="https://github.com/Kamalkishor0" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/kamalkishor-singh/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://x.com/kamalkishor_45" target="_blank" rel="noreferrer">X / Twitter</a><a href="https://leetcode.com/kamalkishor_45/" target="_blank" rel="noreferrer">LeetCode</a></div></div>
      </footer>
      <div className="shell footer-bottom"><span>Kamalkishor Singh / 2026</span><span>Designed &amp; built in Next.js</span></div>
    </main>
  );
}

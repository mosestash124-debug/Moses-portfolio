import { useState, useRef, useEffect } from "react";
import "./App.css";

const bootLines = [
  "POWER ON  |  MOSESOS PORTFOLIO ENVIRONMENT",
  "CHECK  |  BROWSER RUNTIME INITIALIZED",
  "MOUNT  |  LOADING PORTFOLIO INTERFACE",
  "PROFILE  |  MOSES GITAU",
  "MODULE  |  PROJECT INDEX READY",
  "ASSET  |  CV DOCUMENT AVAILABLE",
  "LINK  |  GITHUB PROFILE CONFIGURED",
  "SERVICE  |  INTERACTIVE TERMINAL READY",
  "START  |  WELCOME TO THE PORTFOLIO",
];

function TypingText({ text, speed = 16, className = "", cursorClassName = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className={`typing-cursor ${cursorClassName}`} aria-hidden="true" />
      )}
    </span>
  );
}

function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [typedIntro, setTypedIntro] = useState("");
  const [bootSequence, setBootSequence] = useState([]);
  const [bootExiting, setBootExiting] = useState(false);
  const [bootComplete, setBootComplete] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const terminalRef = useRef(null);
  const introText =
    "Hi, I'm Moses Gitau — a Mathematics & Computer Science student and developer.";

  const projects = [
    {
      name: "MajiShwari",
      description:
        "Climate finance verification platform designed to improve transparency and community-level project verification.",
      tech: ["React", "Supabase", "Twilio", "Polygon"],
      live: "https://maji-shwari-blue.vercel.app/",
    },
    {
      name: "Bioacoustic AI",
      description:
        "AI-powered audio classification project exploring bee and wasp sound recognition using audio processing and machine learning.",
      tech: ["Python", "Machine Learning", "Audio Processing"],
    },
    {
      name: "Ujenzi",
      description:
        "Development project monitoring concept using maps, photos and verification to improve visibility of public projects.",
      tech: ["Maps", "Verification", "Data"],
    },
    {
      name: "Farm Milk Buddy",
      description:
        "Smart agriculture platform concept focused on helping farmers manage milk production and farm information.",
      tech: ["Web", "Data", "Agriculture"],
      github:
        "https://github.com/mosestash124-debug/farm-milk-buddy",
    },
  ];

  const commands = {
    whoami: `
MOSES GITAU

Mathematics & Computer Science student
Developer • AI enthusiast • Builder

Based in Kenya 🇰🇪

I learn by building practical technology
and exploring AI, cybersecurity and software.
`,

    ls: `
about       projects
skills      education
contact     resume
github      linkedin
`,

    neofetch: `
        ██████╗  ██████╗
        ██╔══██╗██╔═══██╗
        ██████╔╝██║   ██║
        ██╔══██╗██║   ██║
        ██║  ██║╚██████╔╝
        ╚═╝  ╚═╝ ╚═════╝

OS:        MosesOS
Role:      Developer / Student
Location:  Kenya 🇰🇪
Focus:     AI • Software • Cybersecurity
Editor:    VS Code
Terminal:  Moses Terminal
`,

    help: `
Available commands:

  about       About Moses
  projects    View my projects
  skills      Technical skills
  education   Education
  github      Open GitHub
  linkedin    Open LinkedIn
  resume      View my CV
  contact     Contact Moses
  whoami      About me
  ls          List available sections
  neofetch    System information
  clear       Clear terminal

Project commands:

  project maji
  project bioacoustic
  project ujenzi
  project milk

You can also ask me questions about Moses.
`,

    about: `
╭──────────────── ABOUT MOSES ────────────────╮

  I'm MOSES GITAU.

  Mathematics & Computer Science student
  Developer • Student • Builder

  I'm interested in:
  → Artificial Intelligence
  → Cybersecurity
  → Software Engineering
  → Data Science
  → Linux

  I learn by building.

╰─────────────────────────────────────────────╯
`,

    projects: `
╔══════════════════════════════════════════════╗
║                  PROJECTS                    ║
╠══════════════════════════════════════════════╣
║                                              ║
║  01  MajiShwari                              ║
║      Climate Finance Verification Platform   ║
║                                              ║
║  02  Bioacoustic AI                          ║
║      AI-powered audio classification         ║
║                                              ║
║  03  Ujenzi                                  ║
║      Development Project Monitoring          ║
║                                              ║
║  04  Farm Milk Buddy                         ║
║      Smart farm & milk management platform   ║
║                                              ║
╚══════════════════════════════════════════════╝

Type:

  project maji
  project bioacoustic
  project ujenzi
  project milk
`,

    "project maji": `
MAJISHWARI
────────────────────────────────────

Climate Finance Verification Platform

A platform designed to improve transparency
and verification of climate-finance projects.

Tech:
React • Supabase • Twilio • Polygon

Live:
https://maji-shwari-blue.vercel.app/
`,

    "project bioacoustic": `
BIOACOUSTIC AI
────────────────────────────────────

AI-powered audio classification project
focused on identifying sounds such as
bee and wasp recordings.

Tech:
Python • Machine Learning • Audio Processing

Focus:
Mel Spectrograms • Signal Processing • AI
`,

    "project ujenzi": `
UJENZI
────────────────────────────────────

Development Project Monitoring Platform

Designed to help communities track
government development projects using
maps, photos and verification.

Focus:
Maps • Verification • Transparency • Data
`,

    "project milk": `
FARM MILK BUDDY
────────────────────────────────────

A smart agriculture platform concept focused
on helping farmers manage milk production
and farm-related information.

Focus:
Agriculture • Software • Data
`,

    skills: `
╭───────────────── SKILLS ────────────────────╮

  Programming
  → C++
  → Python
  → JavaScript

  Web
  → React
  → HTML / CSS
  → Vite
  → Git / GitHub
  → Vercel

  AI / Data
  → Machine Learning
  → Audio Processing
  → Data Visualization
  → Mel Spectrograms

  Tools
  → Linux
  → Kali Linux
  → Docker
  → VS Code
  → Unity

╰─────────────────────────────────────────────╯
`,

    education: `
╭────────────── EDUCATION ────────────────────╮

  BSc Mathematics & Computer Science

  Murang'a University of Technology
  Kenya

  Currently studying and building projects
  around software, AI, data and cybersecurity.

╰─────────────────────────────────────────────╯
`,

    contact: `
╭──────────────── CONTACT ────────────────────╮

  GitHub:
  github.com/mosestash124-debug

  Email:
  mosestash124@gmail.com

  LinkedIn:
  linkedin.com/in/moses-gitau-246244363

  Let's build something.

╰─────────────────────────────────────────────╯
`,
  };

  const availableCommands = Object.keys(commands).concat([
    "clear",
    "github",
    "linkedin",
    "resume",
  ]);

  const executeCommand = (command) => {
    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "github") {
      window.open(
        "https://github.com/mosestash124-debug",
        "_blank"
      );

      setHistory((prev) => [
        ...prev,
        {
          command,
          output: "Opening GitHub...",
        },
      ]);

      return;
    }

    if (cmd === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/moses-gitau-246244363/",
        "_blank"
      );

      setHistory((prev) => [
        ...prev,
        {
          command,
          output: "Opening LinkedIn...",
        },
      ]);

      return;
    }
if (cmd === "resume") {
  window.open("/Moses-Gitau-CV.pdf", "_blank");

  setHistory((prev) => [
    ...prev,
    {
      command,
      output: "Opening Moses Gitau CV...",
    },
  ]);

  return;
    }

    const output =
      commands[cmd] ||
      `Command not found: ${cmd}

Type "help" to see available commands.`;

    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    executeCommand(input);
    setInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (commandHistory.length === 0) return;
      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (e.key === "Tab") {
      e.preventDefault();

      const currentInput = input.trim().toLowerCase();

      if (!currentInput) return;

      const matches = availableCommands.filter((command) =>
        command.startsWith(currentInput)
      );

      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  useEffect(() => {
    let frame;
    if (!typedIntro && introText) {
      let index = 0;
      frame = setInterval(() => {
        index += 1;
        setTypedIntro(introText.slice(0, index));

        if (index >= introText.length) {
          clearInterval(frame);
        }
      }, 22);
    }

    return () => clearInterval(frame);
  }, [typedIntro]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const timers = [];

    bootLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setBootSequence((prev) => [...prev, line]);
      }, index * 320 + 120);
      timers.push(timer);
    });

    const exitTimer = setTimeout(() => {
      setBootExiting(true);
    }, bootLines.length * 320 + 350);
    timers.push(exitTimer);

    const finishTimer = setTimeout(() => {
      setBootComplete(true);
    }, bootLines.length * 320 + 850);
    timers.push(finishTimer);

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealTargets = document.querySelectorAll(".reveal-on-scroll");
    revealTargets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [history]);

  const getOutputTone = (command) => {
    if (["github", "linkedin", "resume"].includes(command)) return "success";
    if (["clear"].includes(command)) return "neutral";
    if (["help", "whoami", "about", "contact"].includes(command)) return "info";
    return "warning";
  };

  return (
    <main className="terminal-page">
      <div className="terminal-container">

        {!bootComplete && (
          <div
            className={`boot-screen${bootExiting ? " exiting" : ""}`}
            aria-live="polite"
            aria-label="Simulated portfolio startup sequence"
          >
            <div className="boot-window">
              <div className="boot-window-bar">
                <span className="boot-lights" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>MOSESOS // LOCAL STARTUP</span>
                <span className="boot-version">v1.0</span>
              </div>
              <div className="boot-content">
                <div className="boot-header">SYSTEM INITIALIZATION</div>
                <div className="boot-log">
                  {bootSequence.map((line, index) => (
                    <div className="boot-line" key={line}>
                      <span className="boot-timestamp">
                        [{(index * 0.32).toFixed(2)}s]
                      </span>
                      <span className={index === bootSequence.length - 1 ? "boot-current" : ""}>
                        {line}
                      </span>
                      <span className="boot-ok">[ OK ]</span>
                    </div>
                  ))}
                  {!bootExiting && <span className="boot-caret" aria-hidden="true" />}
                </div>
                <div
                  className="boot-progress"
                  role="progressbar"
                  aria-label="Portfolio startup progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={Math.round(
                    (bootSequence.length / bootLines.length) * 100
                  )}
                >
                  <span
                    style={{
                      width: `${(bootSequence.length / bootLines.length) * 100}%`,
                    }}
                  />
                </div>
                <div className="boot-status">
                  <span>
                    {bootExiting ? "HANDING OFF TO PORTFOLIO" : "STARTING UP"}
                  </span>
                  <span>
                    {Math.round((bootSequence.length / bootLines.length) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="featured">
          Featured on GitHub ↗
        </div>

        <div className="banner-strip reveal-on-scroll">
          <span className="green">[ READY ]</span> SYSTEM ONLINE • MOSES GITAU • PORTFOLIO TERMINAL
        </div>

        <header className="hero reveal-on-scroll">
          <h1>Moses Gitau</h1>
          <p>Mathematics &amp; Computer Science</p>
        </header>

        <section className="terminal reveal-on-scroll">

          <div className="welcome">

            <div className="prompt">
              <span className="blue">
                moses@portfolio:~$
              </span>{" "}
              <span className="green">welcome</span>
            </div>

            <div className="message typed-message" aria-live="polite">
              {typedIntro}
              <span className="typing-cursor" aria-hidden="true" />
            </div>
            <div className="resume-section">
  <a
    href="/Moses-Gitau-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-button"
  >
    View My CV ↗
  </a>
</div>

            <div className="message">
              Welcome to my interactive portfolio terminal!
              <br />
              Type{" "}
              <span className="green">'help'</span>{" "}
              to see available commands or ask something
              about me.
            </div>

          </div>

          <div className="history">

            {history.map((item, index) => (
              <div
                className="command-block"
                key={`${item.command}-${index}`}
              >
                <div className="prompt">
                  <span className="blue">
                    moses@portfolio:~$
                  </span>{" "}
                  <TypingText
                    text={item.command}
                    speed={18}
                    className="command-text"
                    cursorClassName="command-cursor"
                  />
                </div>

                <pre className={`output-shell ${getOutputTone(item.command)}`}>
                  <TypingText
                    text={item.output}
                    speed={10}
                    className="output-text"
                    cursorClassName="output-cursor"
                  />
                </pre>
              </div>
            ))}

          </div>

          <form
            onSubmit={handleSubmit}
            className="command-form"
          >

            <span className="blue">
              moses@portfolio:~$
            </span>

            <div className="input-shell">
              <input
                autoFocus
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setHistoryIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                aria-label="Terminal command"
                autoComplete="off"
                spellCheck="false"
              />
              <span className="input-cursor" aria-hidden="true" />
            </div>

          </form>

          <div ref={terminalRef} />

        </section>

        {/* PROJECT CARDS */}

        <section className="projects-section reveal-on-scroll">

          <div className="section-title">
            <span className="green">01.</span>{" "}
            SELECTED PROJECTS
          </div>

          <div className="project-grid">

            {projects.map((project, index) => (
              <article
                className="project-card reveal-on-scroll"
                key={project.name}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <h2>{project.name}</h2>

                <p>
                  {project.description}
                </p>

                <div className="tech-stack">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-links">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                </div>

              </article>
            ))}

          </div>

        </section>

        <footer className="reveal-on-scroll">

          <span>
            © {new Date().getFullYear()} Moses Gitau
          </span>

          <span>
            Built with React
          </span>

        </footer>

      </div>
    </main>
  );
}

export default App;
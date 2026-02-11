import { useState, useRef } from "react";
import htmlIcon from "../assets/html.png";
import ReactIcon from "../assets/rct.png";
import JavaScriptIcon from "../assets/js.png";
import FigmaIcon from "../assets/fg.png";
import NodeJSIcon from "../assets/njs.png";
import MongoDBIcon from "../assets/mdb.png";
import CSSIcon from "../assets/css.png";
import UIUXIcon from "../assets/ix.png";
import GitHubIcon from "../assets/gh.png";
import GitIcon from "../assets/git.png";
import PhotoshopIcon from "../assets/ps.png";
import IllustratorIcon from "../assets/ai.png";

export default function Skills() {
  const skills = [
    { name: "HTML5", level: 95, icon: htmlIcon },
    { name: "CSS3", level: 92, icon: CSSIcon },
    { name: "JavaScript", level: 30, icon: JavaScriptIcon },
    { name: "React", level: 88, icon: ReactIcon },
    { name: "Node.js", level: 55, icon: NodeJSIcon },
    { name: "Express", level: 42, icon: htmlIcon },
    { name: "MongoDB", level: 80, icon: MongoDBIcon },
    { name: "GitHub", level: 50, icon: GitHubIcon },
    { name: "Git", level: 35, icon: GitIcon },
    { name: "UI/UX Design", level: 67, icon: UIUXIcon },
    { name: "Figma", level: 45, icon: FigmaIcon },
    { name: "Adobe Photoshop", level: 95, icon: PhotoshopIcon },
    { name: "Adobe Illustrator", level: 55, icon: IllustratorIcon },
  ];

  const [displayText, setDisplayText] = useState({});
  const intervals = useRef({});
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";

  const startScramble = (name) => {
    let elapsed = 0;
    clearInterval(intervals.current[name]);

    intervals.current[name] = setInterval(() => {
      elapsed += 40;
      setDisplayText((prev) => ({
        ...prev,
        [name]: name
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join(""),
      }));

      if (elapsed >= 500) {
        clearInterval(intervals.current[name]);
        setDisplayText((prev) => ({ ...prev, [name]: name }));
      }
    }, 40);
  };

  const stopScramble = (name) => {
    clearInterval(intervals.current[name]);
    setDisplayText((prev) => ({ ...prev, [name]: name }));
  };

  const getColor = (level) => {
    if (level <= 40) return "#ef4444";
    if (level <= 70) return "#facc15";
    return "#22c55e";
  };

  return (
    <>
      <style>{`
        .skills-section{
          min-height:100vh;
          padding:120px 60px;
          background:#0b0f14;
          color:#ffffff;
        }

        .skills-title{
          font-size:56px;
          font-weight:700;
          margin-bottom:20px;
          text-align:center;
        }

        .skills-subtitle{
          font-size:16px;
          opacity:.7;
          max-width:600px;
          margin:0 auto 60px;
          text-align:center;
        }

        .skills-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
          gap:40px;
          max-width:1200px;
          margin:0 auto;
          justify-items:center;
        }

        /* SMALLER CARD */
        .skill-card{
          width:100%;
          max-width:220px;
          height:170px;
          background:linear-gradient(180deg, #111827, #0b0f14);
          border:1px solid rgba(255,255,255,0.06);
          border-radius:18px;
          position:relative;
          overflow:hidden;
          cursor:pointer;
          transition:border-color .4s ease, transform .4s ease;
        }

        .skill-card:hover{
          transform:translateY(-8px);
          border-color:rgba(147,197,253,0.25);
        }

        .icon-glow{
          position:absolute;
          width:200px;
          height:200px;
          top:30px;
          left:50%;
          transform:translateX(-50%);
          background:radial-gradient(
            circle,
            rgba(96,165,250,0.16),
            rgba(236,72,153,0.10),
            transparent 72%
          );
          opacity:0;
          filter:blur(36px);
          transition:opacity .45s ease;
          z-index:1;
          pointer-events:none;
        }

        .skill-card:hover .icon-glow{
          opacity:1;
        }

        .icon-wrap{
          position:absolute;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:2;
        }

        /* SMALLER ICON */
        .skill-icon{
          width:75px;
          height:75px;
          object-fit:contain;
          animation: float 4s ease-in-out infinite;
          transition:transform .35s ease;
          mask-image:linear-gradient(
            to top,
            transparent 0%,
            rgba(0,0,0,.4) 25%,
            black 55%
          );
          -webkit-mask-image:linear-gradient(
            to top,
            transparent 0%,
            rgba(0,0,0,.4) 25%,
            black 55%
          );
        }

        .skill-card:hover .skill-icon{
          transform:scale(1.2);
          animation-play-state:paused;
        }

        @keyframes float{
          0%{ transform:translateY(0); }
          50%{ transform:translateY(-10px); }
          100%{ transform:translateY(0); }
        }

        /* SMALLER TEXT POSITION */
        .skill-text{
          position:absolute;
          bottom:38px;
          left:0;
          right:0;
          text-align:center;
          z-index:3;
          font-size:14px;
          font-weight:500;
          letter-spacing:.6px;
          pointer-events:none;
        }

        .progress-track{
          position:absolute;
          bottom:16px;
          left:18px;
          right:18px;
          height:5px;
          background:rgba(255,255,255,0.08);
          border-radius:6px;
          overflow:hidden;
          z-index:3;
        }

        .progress-fill{
          height:100%;
          width:0%;
          background:var(--bar-color);
          transition:width .6s ease;
        }

        .skill-card:hover .progress-fill{
          width:var(--level);
        }

        @media(max-width:480px){
          .skills-title{ font-size:34px; }
          .skill-icon{
            width:60px;
            height:60px;
          }
        }
      `}</style>

      <section className="skills-section" id="skills">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build modern, scalable and
          user-focused digital experiences.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{
                "--level": `${skill.level}%`,
                "--bar-color": getColor(skill.level),
              }}
              onMouseEnter={() => startScramble(skill.name)}
              onMouseLeave={() => stopScramble(skill.name)}
            >
              <div className="icon-glow"></div>

              <div className="icon-wrap">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>

              <span className="skill-text">
                {displayText[skill.name] || skill.name}
              </span>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

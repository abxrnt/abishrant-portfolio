import { useEffect, useState, useRef } from "react";

export default function Home() {
  const tags = [
    "Frontend Developer",
    "Full Stack Developer",
    "Graphic Designer",
    "UI/UX Designer",
  ];

  const techStacks = ["HTML5", "CSS3", "JavaScript", "React", "Node.js"];
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";

  const [tagIndex, setTagIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [techIndex, setTechIndex] = useState(0);
  const [techDisplay, setTechDisplay] = useState(techStacks[0]);
  const scrambleInterval = useRef();

  useEffect(() => {
    const current = tags[tagIndex];
    let timer;

    if (!deleting && charIndex < current.length) {
      timer = setTimeout(() => setCharIndex((i) => i + 1), 90);
    } else if (!deleting && charIndex === current.length) {
      timer = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((i) => i - 1), 70);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTagIndex((i) => (i + 1) % tags.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, tagIndex]);

  useEffect(() => {
    const cycleTechStack = () => {
      const target = techStacks[techIndex];
      let elapsed = 0;

      clearInterval(scrambleInterval.current);

      scrambleInterval.current = setInterval(() => {
        elapsed += 30;
        setTechDisplay(
          target
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("")
        );

        if (elapsed >= 300) { 
          clearInterval(scrambleInterval.current);
          setTechDisplay(target); 
          setTimeout(() => {
            setTechIndex((i) => (i + 1) % techStacks.length);
          }, 800);
        }
      }, 30);
    };

    cycleTechStack();
  }, [techIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Clash+Display:wght@500;700&display=swap');

        .home{
          position:relative;
          min-height:calc(100vh - 72px);
          padding-top:72px;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          color:#fff;
          font-family:'Space Grotesk', sans-serif;
          background:
            radial-gradient(circle at 20% 20%, rgba(79,209,197,.25), transparent 40%),
            radial-gradient(circle at 80% 30%, rgba(236,72,153,.25), transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(99,179,237,.25), transparent 40%),
            linear-gradient(120deg,#05080f,#0b1320,#05080f);
          background-size:200% 200%;
          animation:bgMove 18s ease-in-out infinite;
          overflow:hidden;
        }

        @keyframes bgMove{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }

        .content{
          position:relative;
          z-index:2;
          transform:translateY(-50px);
        }

        h1{
          margin:0;
          font-size:64px;
          font-weight:700;
          font-family:'Clash Display', sans-serif;
          letter-spacing:-1px;
        }

        .gradient-text{
          background:linear-gradient(90deg,#4fd1c5,#63b3ed,#ec4899);
          -webkit-background-clip:text;
          color:transparent;
          background-size:200%;
          animation:move 6s linear infinite;
        }

        @keyframes move{
          0%{background-position:0%}
          100%{background-position:200%}
        }

        .typing{
          margin-top:12px;
          font-size:22px;
          font-weight:600;
        }

        .tech-stack-bg{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          font-size:200px; /* huge text */
          font-weight:900;
          opacity:0.05; /* very faded */
          white-space:nowrap;
          pointer-events:none;
          user-select:none;
          z-index:1;
          color:#fff;
        }

        .cursor{
          display:inline-block;
          width:2px;
          height:22px;
          background:#4fd1c5;
          margin-left:6px;
          animation:blink 1s infinite;
        }

        @keyframes blink{
          0%,50%,100%{opacity:1}
          25%,75%{opacity:0}
        }

        @media(max-width:768px){
          h1{font-size:44px}
          .typing{font-size:18px}
          .content{transform:translateY(-30px)}
          .tech-stack-bg{font-size:120px}
        }
      `}</style>

      <section className="home">
        <div className="tech-stack-bg">{techDisplay}</div>
        <div className="content">
          <h1>
            Hello, I am <span className="gradient-text">Abishrant</span>
          </h1>
          <div className="typing">
            I am a passionate{" "}
            <span className="gradient-text">
              {tags[tagIndex].slice(0, charIndex)}
            </span>
            <span className="cursor" />
          </div>
        </div>
      </section>
    </>
  );
}

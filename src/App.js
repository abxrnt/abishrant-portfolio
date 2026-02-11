import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Home />
      </section>

      {/* ABOUT */}
      <section id="about" style={sectionStyleAlt}>
        <h1 style={titleStyle}>About Me</h1>
        <p style={subText}>
          Passionate developer focused on building clean, scalable and
          user-friendly digital experiences.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" style={sectionStyle}>
        <Skills />
      </section>

      {/* EDUCATION */}
      <section id="education" style={sectionStyleAlt}>
        <Education />
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" style={sectionStyle}>
        <h1 style={titleStyle}>Certifications</h1>
        <p style={subText}>
          Recognized achievements and verified technical credentials.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={sectionStyleAlt}>
        <h1 style={titleStyle}>Experience</h1>
        <p style={subText}>
          Hands-on experience working on real-world projects and solutions.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={sectionStyle}>
        <h1 style={titleStyle}>Projects</h1>
        <p style={subText}>
          Selected works showcasing design, performance, and problem-solving.
        </p>
      </section>

      {/* RESUME */}
      <section id="resume" style={sectionStyleAlt}>
        <h1 style={titleStyle}>Resume</h1>
        <p style={subText}>
          Use the Resume tab above to view or download my resume.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={sectionStyle}>
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

/* ================= SHARED STYLES ================= */

const sectionStyle = {
  minHeight: "100vh",
  padding: "140px 80px",
  background: "#0b0f14",
  color: "#ffffff",
};

const sectionStyleAlt = {
  ...sectionStyle,
  background: "#0e141b",
};

const titleStyle = {
  fontSize: "64px",
  fontWeight: "800",
  letterSpacing: "-1px",
};

const subText = {
  marginTop: "18px",
  fontSize: "18px",
  opacity: 0.7,
  maxWidth: "720px",
};

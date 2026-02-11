import { GraduationCap, School, BookOpen, Code } from "lucide-react";

function Education() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Education</h2>

      <div style={styles.grid}>
        {/* HSLC */}
        <div style={styles.card} className="edu-card">
          <School size={34} style={styles.icon} />
          <h3>HSLC (10th)</h3>
          <p>Jyoti Vidyapith</p>

          <div style={styles.skills}>
            <span>Mathematics</span>
            <span>Science</span>
            <span>English</span>
          </div>

          <strong>85.00%</strong>
        </div>

        {/* HS */}
        <div style={styles.card} className="edu-card">
          <BookOpen size={34} style={styles.icon} />
          <h3>HS (12th)</h3>
          <p>New Look Academy</p>

          <div style={styles.skills}>
            <span>Physics</span>
            <span>Chemistry</span>
            <span>Mathematics</span>
          </div>

          <strong>87.00%</strong>
        </div>

        {/* B.Tech */}
        <div style={styles.card} className="edu-card placeholder">
          <GraduationCap size={36} style={styles.icon} />
          <h3>B.Tech (CSE)</h3>
          <p>PLACEHOLDER</p>

          <div style={styles.skills}>
            <span>DSA</span>
            <span>Web Dev</span>
            <span>OOP</span>
          </div>

          <strong>—</strong>
        </div>
      </div>

      {/* Hover + Icon Styles */}
      <style>{`
        .edu-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 45px rgba(0, 224, 255, 0.22);
        }

        .edu-card strong {
          display: block;
          margin-top: 18px;
          font-size: 22px;
          color: #00e0ff;
        }

        .edu-card.placeholder strong {
          color: #888;
        }

        .edu-card h3 {
          margin: 14px 0 6px;
          font-size: 22px;
        }

        .edu-card p {
          opacity: 0.75;
          margin-bottom: 18px;
        }

        .edu-card span {
          font-size: 13px;
          padding: 6px 12px;
          border-radius: 20px;
          background: rgba(255,255,255,0.06);
        }

        .edu-card:hover svg {
          color: #00e0ff;
          transform: scale(1.1);
        }

        svg {
          transition: all 0.3s ease;
        }

        @media (max-width: 900px) {
          .edu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 60px",
    background: "#0b1c24",
    color: "#ffffff",
  },
  title: {
    fontSize: "38px",
    fontWeight: "700",
    marginBottom: "50px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  },
  card: {
    background: "linear-gradient(145deg, #0f2a36, #0b1c24)",
    borderRadius: "18px",
    padding: "42px 32px",
    textAlign: "center",
    transition: "all 0.35s ease",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  icon: {
    color: "#8aa9b8",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "12px",
  },
};

export default Education;

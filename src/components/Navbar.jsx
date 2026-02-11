import { useEffect, useState } from "react";
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  Mail,
  GraduationCap,
  Award,
  FileText,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (id) => {
    if (id === "resume") {
      window.open("/resume.pdf", "_blank");
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach(({ id }) => {
        if (id === "resume") return;
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        *{box-sizing:border-box;}

        .navbar{
          position:sticky;
          top:0;
          z-index:1000;
          height:72px;
          padding:0 70px;
          background:linear-gradient(
            180deg,
            rgba(12,18,28,0.85),
            rgba(12,18,28,0.65)
          );
          backdrop-filter:blur(14px);
          display:flex;
          align-items:center;
          justify-content:center;
          border-bottom:1px solid rgba(255,255,255,0.08);
        }

        .nav-links{
          display:flex;
          gap:38px;
        }

        .nav-link{
          position:relative;
          display:flex;
          align-items:center;
          gap:8px;
          font-size:14px;
          color:rgba(255,255,255,0.65);
          cursor:pointer;
          transition:.3s;
          text-transform:capitalize;
        }

        .nav-link svg{
          width:16px;
          height:16px;
        }

        .nav-link::after{
          content:"";
          position:absolute;
          left:50%;
          bottom:-10px;
          width:0;
          height:2px;
          background:#4fd1c5;
          transform:translateX(-50%);
          transition:.3s;
          box-shadow:0 0 10px #4fd1c5;
        }

        .nav-link:hover,
        .nav-link.active{
          color:#ffffff;
        }

        .nav-link.active::after{
          width:24px;
        }

        .nav-link.resume{
          color:#4fd1c5;
          font-weight:600;
        }

        /* MOBILE */
        .menu-btn{
          position:absolute;
          right:28px;
          display:none;
          flex-direction:column;
          gap:6px;
          cursor:pointer;
        }

        .menu-btn span{
          width:26px;
          height:2px;
          background:#ffffff;
        }

        .mobile-menu{
          position:fixed;
          inset:72px 0 0 0;
          background:#0c121c;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:34px;
          transform:translateY(-100%);
          transition:.5s cubic-bezier(.4,0,.2,1);
        }

        .mobile-menu.open{
          transform:translateY(0);
        }

        .mobile-link{
          display:flex;
          align-items:center;
          gap:14px;
          font-size:22px;
          font-weight:600;
          color:rgba(255,255,255,0.7);
          cursor:pointer;
          text-transform:capitalize;
        }

        .mobile-link svg{
          width:22px;
          height:22px;
        }

        .mobile-link.active,
        .mobile-link:hover{
          color:#4fd1c5;
        }

        @media(max-width:900px){
          .navbar{padding:0 28px;}
          .nav-links{display:none;}
          .menu-btn{display:flex;}
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-links">
          {navItems.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              className={`nav-link ${id === "resume" ? "resume" : ""} ${
                active === id ? "active" : ""
              }`}
              onClick={() => handleNavClick(id)}
            >
              <Icon />
              {label}
            </div>
          ))}
        </div>

        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            className={`mobile-link ${active === id ? "active" : ""}`}
            onClick={() => handleNavClick(id)}
          >
            <Icon />
            {label}
          </div>
        ))}
      </div>
    </>
  );
}

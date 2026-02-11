import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer{
          background:#05080d;
          color:#ffffff;
          padding:140px 90px 50px;
          border-top:1px solid rgba(255,255,255,0.08);
        }

        .footer-top{
          display:grid;
          grid-template-columns:2.8fr 1.2fr 1.4fr 1.6fr;
          gap:90px;
          margin-bottom:100px;
        }

        /* BRAND */
        .footer-brand h2{
          font-size:34px;
          font-weight:900;
          letter-spacing:1.5px;
          margin-bottom:24px;
        }

        .footer-brand p{
          font-size:15.5px;
          line-height:1.8;
          color:rgba(255,255,255,0.65);
          max-width:460px;
        }

        .socials{
          display:flex;
          flex-wrap:wrap;
          gap:16px;
          margin-top:34px;
        }

        .socials a{
          width:46px;
          height:46px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:50%;
          background:rgba(255,255,255,0.06);
          transition:.35s;
        }

        .socials a:hover{
          background:#4fd1c5;
          transform:translateY(-5px) scale(1.05);
        }

        .socials svg{
          width:20px;
          height:20px;
        }

        /* COLUMNS */
        .footer-col h3{
          font-size:18px;
          font-weight:700;
          margin-bottom:28px;
        }

        .footer-links{
          display:flex;
          flex-direction:column;
          gap:16px;
        }

        .footer-links span{
          font-size:15px;
          color:rgba(255,255,255,0.65);
          cursor:pointer;
          transition:.3s;
          display:flex;
          align-items:center;
          gap:8px;
        }

        .footer-links span:hover{
          color:#ffffff;
          transform:translateX(6px);
        }

        .footer-links svg{
          width:14px;
          height:14px;
        }

        /* CONTACT */
        .footer-contact{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .contact-item{
          display:flex;
          align-items:flex-start;
          gap:14px;
          font-size:15px;
          color:rgba(255,255,255,0.65);
          line-height:1.6;
        }

        .contact-item svg{
          width:18px;
          height:18px;
          color:#4fd1c5;
          margin-top:3px;
        }

        /* NEWSLETTER */
        .newsletter{
          margin-top:30px;
        }

        .newsletter h4{
          font-size:16px;
          margin-bottom:14px;
          font-weight:600;
        }

        .newsletter input{
          width:100%;
          padding:14px 16px;
          background:#0b0f14;
          border:1px solid rgba(255,255,255,0.1);
          color:#ffffff;
          outline:none;
          border-radius:6px;
          margin-bottom:14px;
        }

        .newsletter button{
          width:100%;
          padding:14px;
          background:#4fd1c5;
          color:#000;
          font-weight:700;
          border:none;
          border-radius:6px;
          cursor:pointer;
          transition:.3s;
        }

        .newsletter button:hover{
          background:#3bb6aa;
        }

        /* BOTTOM */
        .footer-bottom{
          padding-top:36px;
          border-top:1px solid rgba(255,255,255,0.08);
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:20px;
        }

        .footer-bottom p{
          font-size:14px;
          color:rgba(255,255,255,0.5);
        }

        .footer-bottom span{
          color:#4fd1c5;
          font-weight:600;
        }

        @media(max-width:1100px){
          .footer-top{
            grid-template-columns:1fr 1fr;
            gap:70px;
          }
        }

        @media(max-width:700px){
          .footer{
            padding:100px 30px 40px;
          }

          .footer-top{
            grid-template-columns:1fr;
            gap:70px;
          }

          .footer-bottom{
            flex-direction:column;
            text-align:center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <h2>A. Shandilya</h2>
            <p>
              I design and build modern, high-performance web experiences.
              Focused on clean UI, scalable frontend architecture and meaningful
              digital products.
            </p>

            <div className="socials">
              <a href="#"><Github /></a>
              <a href="#"><Linkedin /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Dribbble /></a>
              <a href="#"><Youtube /></a>
              <a href="#"><Mail /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h3>Navigation</h3>
            <div className="footer-links">
              <span><ExternalLink /> Home</span>
              <span><ExternalLink /> About</span>
              <span><ExternalLink /> Skills</span>
              <span><ExternalLink /> Experience</span>
              <span><ExternalLink /> Projects</span>
              <span><ExternalLink /> Contact</span>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h3>What I Do</h3>
            <div className="footer-links">
              <span>Frontend Development</span>
              <span>React & UI Engineering</span>
              <span>Portfolio Websites</span>
              <span>Design to Code</span>
              <span>Performance Optimization</span>
              <span>Responsive Systems</span>
            </div>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div className="footer-col">
            <h3>Get in Touch</h3>

            <div className="footer-contact">
              <div className="contact-item">
                <Mail /> hello@abishrant.dev
              </div>
              <div className="contact-item">
                <Phone /> +91 XXXXX XXXXX
              </div>
              <div className="contact-item">
                <MapPin /> India
              </div>
            </div>

            <div className="newsletter">
              <h4>Stay updated</h4>
              <input placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <span>ABISHRANT</span> All rights reserved.</p>
          <p>Designed & Built with React ⚡</p>
        </div>
      </footer>
    </>
  );
}

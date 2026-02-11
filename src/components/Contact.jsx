import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      <style>{`
        .contact{
          min-height:100vh;
          padding:140px 90px;
          background:#0e141b;
          color:#ffffff;
        }

        .contact-grid{
          display:grid;
          grid-template-columns:1.2fr 1fr;
          gap:100px;
          align-items:flex-start;
        }

        /* LEFT */
        .contact-left h2{
          font-size:64px;
          font-weight:800;
          margin-bottom:20px;
          letter-spacing:-1px;
        }

        .contact-left p{
          font-size:16px;
          line-height:1.8;
          color:rgba(255,255,255,0.65);
          max-width:520px;
        }

        .contact-info{
          margin-top:50px;
          display:flex;
          flex-direction:column;
          gap:24px;
        }

        .info-item{
          display:flex;
          align-items:center;
          gap:16px;
          font-size:16px;
          color:rgba(255,255,255,0.7);
        }

        .info-item svg{
          width:20px;
          height:20px;
          color:#4fd1c5;
        }

        .contact-socials{
          display:flex;
          gap:18px;
          margin-top:40px;
        }

        .contact-socials a{
          width:46px;
          height:46px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:50%;
          background:rgba(255,255,255,0.06);
          transition:.3s;
        }

        .contact-socials a:hover{
          background:#4fd1c5;
          transform:translateY(-5px);
        }

        /* RIGHT / FORM */
        .contact-form{
          background:rgba(255,255,255,0.03);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:16px;
          padding:50px;
          backdrop-filter:blur(12px);
        }

        .contact-form h3{
          font-size:28px;
          font-weight:700;
          margin-bottom:30px;
        }

        .form-group{
          display:flex;
          flex-direction:column;
          gap:10px;
          margin-bottom:22px;
        }

        .form-group label{
          font-size:14px;
          color:rgba(255,255,255,0.6);
        }

        .form-group input,
        .form-group textarea{
          padding:14px 16px;
          background:#0b0f14;
          border:1px solid rgba(255,255,255,0.12);
          color:#ffffff;
          border-radius:8px;
          outline:none;
          font-size:15px;
          transition:.3s;
        }

        .form-group textarea{
          min-height:140px;
          resize:none;
        }

        .form-group input:focus,
        .form-group textarea:focus{
          border-color:#4fd1c5;
        }

        .submit-btn{
          margin-top:10px;
          width:100%;
          padding:16px;
          background:#4fd1c5;
          color:#000;
          font-size:16px;
          font-weight:700;
          border:none;
          border-radius:10px;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          transition:.3s;
        }

        .submit-btn:hover{
          background:#3bb6aa;
          transform:translateY(-2px);
        }

        @media(max-width:1100px){
          .contact-grid{
            grid-template-columns:1fr;
            gap:80px;
          }
        }

        @media(max-width:700px){
          .contact{
            padding:110px 30px;
          }

          .contact-left h2{
            font-size:46px;
          }

          .contact-form{
            padding:36px 28px;
          }
        }
      `}</style>

      <section id="contact" className="contact">
        <div className="contact-grid">
          
          {/* LEFT */}
          <div className="contact-left">
            <h2>Let’s talk.</h2>
            <p>
              Have a project in mind, a question, or just want to say hi?
              I’m always open to discussing new ideas, collaborations
              or opportunities.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <Mail /> hello@abishrant.dev
              </div>
              <div className="info-item">
                <Phone /> +91 XXXXX XXXXX
              </div>
              <div className="info-item">
                <MapPin /> India
              </div>
            </div>

            <div className="contact-socials">
              <a href="#"><Github /></a>
              <a href="#"><Linkedin /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Instagram /></a>
            </div>
          </div>

          {/* RIGHT */}
          <form className="contact-form">
            <h3>Send a message</h3>

            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@email.com" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." />
            </div>

            <button className="submit-btn">
              Send Message <Send />
            </button>
          </form>

        </div>
      </section>
    </>
  );
}

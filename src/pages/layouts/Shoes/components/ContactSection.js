import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import { sendContact, getPhone, getEmail, getAddress } from "../../../../actions/main";
import { notify } from "../../../../helpers/toast";
import StyleTag from "@/styles/StyleTag";

const asArray = (res) =>
  Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.data) ? res.data.data : [];
const pickStr = (v) => (typeof v === "string" ? v : v == null ? "" : String(v?.value ?? v?.name ?? v?.title ?? v?.text ?? ""));
const extractPhone = (x) => pickStr(x?.mobile ?? x?.phone ?? x?.number ?? x);
const extractEmail = (x) => pickStr(x?.email ?? x?.mail ?? x?.value ?? x);
const extractAddress = (x) => pickStr(x?.full_address ?? x?.address ?? [x?.street, x?.city, x?.country].filter(Boolean).join(", "));

const ContactSection = () => {
  const { t, isRTL } = useLanguage();

  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [ph, em, ad] = await Promise.all([
          getPhone?.().catch(() => null),
          getEmail?.().catch(() => null),
          getAddress?.().catch(() => null),
        ]);
        if (!alive) return;
        setPhones(asArray(ph).map(extractPhone).filter(Boolean));
        setEmails(asArray(em).map(extractEmail).filter(Boolean));
        setAddresses(asArray(ad).map(extractAddress).filter(Boolean));
      } catch { /* silent */ }
    })();
    return () => { alive = false; };
  }, []);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      notify.error(isRTL ? "يرجى ملء جميع الحقول المطلوبة" : "Please fill in all required fields");
      return;
    }
    setSending(true);
    try {
      await notify.promise(
        sendContact({
          name: form.name,
          email: form.email,
          subject: form.subject || "Website Inquiry",
          message: form.message,
        }),
        {
          pending: isRTL ? "جارٍ الإرسال..." : "Sending...",
          success: isRTL ? "تم الإرسال بنجاح! سنتواصل معك قريبًا." : "Sent successfully! We'll get back to you soon.",
          error: isRTL ? "فشل الإرسال. حاول مرة أخرى." : "Failed to send. Please try again.",
        }
      );
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch { /* handled by toast */ }
    finally { setSending(false); }
  };

  const phone = phones[0] || "+20 123 456 789";
  const email = emails[0] || "info@seada.com";
  const address = addresses[0] || (isRTL ? "القاهرة، مصر" : "Cairo, Egypt");

  const contactCards = [
    {
      icon: "📍",
      label: isRTL ? "العنوان" : "Address",
      value: address,
      href: null,
    },
    {
      icon: "📞",
      label: isRTL ? "الهاتف" : "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
    },
    {
      icon: "✉️",
      label: isRTL ? "البريد الإلكتروني" : "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: isRTL ? "تواصل عبر واتساب" : "Chat on WhatsApp",
      href: `https://wa.me/${phone.replace(/[^0-9]/g, "")}`,
    },
  ];

  return (
    <section className="corp-section corp-section-alt" id="contact" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="corp-section-header">
          <span className="corp-label">
            {isRTL ? "تواصل معنا" : "Get In Touch"}
          </span>
          <h2>{isRTL ? "نحن هنا لمساعدتك" : "We're Here To Help"}</h2>
          <hr className="corp-gold-line" />
          <p>
            {isRTL
              ? "لديك استفسار أو تريد طلب عرض سعر؟ تواصل معنا وسنرد عليك في أقرب وقت."
              : "Have a question or want to request a quote? Reach out and we'll get back to you promptly."}
          </p>
        </div>

        <Row className="g-4">
          <Col lg="5">
            <div className="contact-info-wrap">
              {contactCards.map((card, i) => (
                <div className="contact-info-card" key={i}>
                  <div className="contact-info-icon">{card.icon}</div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">{card.label}</span>
                    {card.href ? (
                      <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                        {card.value}
                      </a>
                    ) : (
                      <p>{card.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg="7">
            <form className="contact-form" onSubmit={onSubmit}>
              <Row className="g-3">
                <Col md="6">
                  <input
                    className="corp-input"
                    type="text"
                    name="name"
                    placeholder={isRTL ? "الاسم الكامل *" : "Full Name *"}
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </Col>
                <Col md="6">
                  <input
                    className="corp-input"
                    type="email"
                    name="email"
                    placeholder={isRTL ? "البريد الإلكتروني *" : "Email Address *"}
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </Col>
                <Col md="12">
                  <input
                    className="corp-input"
                    type="text"
                    name="subject"
                    placeholder={isRTL ? "الموضوع" : "Subject"}
                    value={form.subject}
                    onChange={onChange}
                  />
                </Col>
                <Col md="12">
                  <textarea
                    className="corp-input corp-textarea"
                    name="message"
                    placeholder={isRTL ? "رسالتك *" : "Your Message *"}
                    value={form.message}
                    onChange={onChange}
                    required
                  />
                </Col>
                <Col md="12">
                  <button
                    type="submit"
                    className="corp-btn corp-btn-primary corp-btn-lg"
                    disabled={sending}
                    style={{ width: "100%" }}
                  >
                    {sending
                      ? (isRTL ? "جارٍ الإرسال..." : "Sending...")
                      : (isRTL ? "إرسال الرسالة" : "Send Message")}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      <StyleTag global css={`
        .contact-info-wrap {
          display: grid;
          gap: 16px;
        }
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--corp-white);
          border: 1px solid var(--corp-gray-200);
          border-radius: var(--corp-radius-lg);
          transition: all var(--corp-duration) var(--corp-ease);
        }
        .contact-info-card:hover {
          border-color: var(--corp-gold);
          box-shadow: var(--corp-shadow-md);
          transform: translateX(${isRTL ? "-6px" : "6px"});
        }
        .contact-info-icon {
          width: 52px;
          height: 52px;
          min-width: 52px;
          display: grid;
          place-items: center;
          border-radius: var(--corp-radius-md);
          background: var(--corp-gold-glow);
          font-size: 24px;
        }
        .contact-info-text {
          flex: 1;
        }
        .contact-info-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--corp-text-muted);
          margin-bottom: 4px;
        }
        .contact-info-text a,
        .contact-info-text p {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: var(--corp-navy);
          text-decoration: none;
          transition: color 0.3s;
        }
        .contact-info-text a:hover {
          color: var(--corp-gold-dark);
        }
        .contact-form {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--corp-radius-xl);
          padding: 36px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .corp-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--corp-radius-md);
          padding: 14px 20px;
          font-size: 1rem;
          color: var(--corp-navy);
          transition: all var(--corp-duration) var(--corp-ease);
        }
        .corp-input:focus {
          outline: none;
          background: var(--corp-white);
          border-color: var(--corp-accent);
          box-shadow: 0 0 0 4px rgba(var(--corp-accent-rgba), 0.1);
        }
        .corp-textarea {
          min-height: 150px;
          resize: vertical;
        }
        @media (max-width: 991px) {
          .contact-form {
            padding: 24px;
          }
        }
      `} />
    </section>
  );
};

export default ContactSection;

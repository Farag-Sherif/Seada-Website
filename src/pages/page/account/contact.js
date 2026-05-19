import React, { useEffect, useMemo, useState, useCallback } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Form, Label, Input } from "reactstrap";
import { sendContact, getSettings } from "./../../../actions/main";
import { useLanguage } from "../../../helpers/Language/useLanguage";

// Toasts
import { ToastContainer, toast } from "react-toastify";
import StyleTag from "@/styles/StyleTag";
// import "react-toastify/dist/ReactToastify.css";

/** i18n helpers */
const trSafe = (t, keyOrText) => {
  if (!keyOrText) return "";
  try {
    const res = t(keyOrText);
    return !res || res === keyOrText ? keyOrText : res;
  } catch {
    return keyOrText;
  }
};
const trOr = (t, key, fallback) => {
  const v = trSafe(t, key);
  return v === key ? fallback : v;
};

/** string helpers */
const pickStr = (v) =>
  typeof v === "string"
    ? v
    : v == null
      ? ""
      : String(v?.value ?? v?.name ?? v?.title ?? v?.text ?? "");

/** --------- Map helpers --------- */
/** returns a safe html string of <iframe ...> ... </iframe> */
const ensureIframeHtml = (value) => {
  const fallback =
    '<iframe title="store-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="width:100%;height:380px;border:0;"></iframe>';

  if (!value || typeof value !== "string") return fallback;

  const trimmed = value.trim();
  // If backend already sends full iframe HTML, just use it.
  if (/^<iframe[\s\S]*<\/iframe>$/.test(trimmed)) {
    return trimmed.includes("style=")
      ? trimmed
      : trimmed.replace(
        /^<iframe/i,
        '<iframe style="width:100%;height:380px;border:0;"'
      );
  }
  // If backend sends only src/URL, build an iframe around it.
  return `<iframe title="store-map" src="${trimmed}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="width:100%;height:380px;border:0;"></iframe>`;
};

/* ---------------- UI bits ---------------- */
const ContactDetail = ({ icon, title, desc1, desc2 }) => (

  <div className="contact-card" tabIndex={0}>
    <div className="contact-card__icon">
      <i className={`fa ${icon}`} aria-hidden="true" />
    </div>

    <div className="contact-card__title">{title}</div>

    <div className="contact-card__value">
      {desc1}
      {desc2 ? <><br />{desc2}</> : null}
    </div>
  </div>


);



const Contact = () => {
  const { t, isRTL } = useLanguage();

  /* --------------- single API call (getSettings) --------------- */
  const [loading, setLoading] = useState(true);
  const [mapHtml, setMapHtml] = useState("");
  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await getSettings(); // shape as provided in the message
        // support both {settings, mobiles, emails, addresse} and nested under data
        const root = res?.data?.settings ? res.data : res;
        const settings = root?.settings ?? {};
        const mobilesArr = Array.isArray(root?.mobiles) ? root.mobiles : [];
        const emailsArr = Array.isArray(root?.emails) ? root.emails : [];

        // map
        const loc = settings?.location_url;
        if (alive) setMapHtml(ensureIframeHtml(loc));

        // phones
        const phoneList = mobilesArr.map((m) => pickStr(m?.mobile)).filter(Boolean);
        if (alive) setPhones(phoneList);

        // emails
        const emailList = emailsArr.map((e) => pickStr(e?.email)).filter(Boolean);
        if (alive) setEmails(emailList);

        // addresses
        const addr = pickStr(root?.addresse) || pickStr(settings?.addresse) || "";
        const addrList = addr ? [addr] : [];
        if (alive) setAddresses(addrList);
      } catch {
        if (alive) {
          setMapHtml(ensureIframeHtml(null));
          setPhones([]);
          setEmails([]);
          setAddresses([]);
        }
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Info boxes
  const boxes = useMemo(
    () => [
      {
        icon: "fa-phone",
        title: trOr(t, "contact.section.contact", "Contact"),
        desc1: phones[0] || "+00 000 - 000 - 0000",
        desc2: phones[1] || "",
      },
      {
        icon: "fa-map-marker",
        title: trOr(t, "contact.section.address", "Address"),
        desc1: addresses[0] || trOr(t, "contact.address_line1", "Your address here"),
        desc2: addresses[1] || "",
      },
      {
        icon: "fa-envelope-o",
        title: trOr(t, "contact.section.email", "Email"),
        desc1: emails[0] || "info@example.com",
        desc2: emails[1] || "",
      },
    ],
    [t, phones, emails, addresses]
  );

  /* ---------------- form ---------------- */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange = useCallback(
    (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value })),
    []
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const name = `${form.firstName} ${form.lastName}`.replace(/\s+/g, " ").trim();
    const subject =
      form.subject?.trim() ||
      trOr(t, "contact.form.default_subject", "Contact form message");

    const message = `Phone: ${form.phone || "-"}\n\n${form.message || ""}`;
    const payload = {
      name: name || form.firstName || form.lastName || "User",
      email: form.email,
      subject,
      message,
    };

    try {
      setSubmitting(true);
      await toast.promise(sendContact(payload), {
        pending: trOr(t, "contact.form.sending", "Sending…"),
        success: trOr(t, "contact.form.success", "Message sent successfully"),
        error: {
          render({ data }) {
            const e = data;
            return (
              e?.response?.data?.message ||
              e?.message ||
              trOr(t, "contact.form.error", "Failed to send message")
            );
          },
        },
      });

      // Reset form after successful submission
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } finally {
      setSubmitting(false);
    }
  };


  const pageTitle = trOr(t, "contact.title", "Contact");
  const parentCrumb = trOr(t, "Home", "Home");
  const toastPosition = isRTL ? "top-left" : "top-right";

  return (
    <CommonLayout parent={parentCrumb} title={pageTitle}>
      <ToastContainer position={toastPosition} rtl={isRTL} theme="colored" autoClose={3500} />

      <section className="seada-luxury-contact section-b-space" dir={isRTL ? "rtl" : "ltr"}>
        <Container>
          {/* Top: Full-width map */}
          <Row className="mb-5">
            <Col xs="12">
              <div className="luxury-map-wrapper shadow-sm">
                <div
                  className="map"
                  aria-busy={loading}
                  dangerouslySetInnerHTML={{ __html: mapHtml || ensureIframeHtml(null) }}
                />
              </div>
            </Col>
          </Row>

          {/* Under the map: 3 cards (phone / address / email) */}
          <Row className="g-4 mb-5 justify-content-center">
            {boxes.map((b, i) => (
              <Col key={i} xs="12" md="4">
                <div className="luxury-contact-card h-100">
                  <div className="card-icon">
                    <i className={`fa ${b.icon}`} aria-hidden="true" />
                  </div>
                  <div className="card-content">
                    <h5>{b.title}</h5>
                    <p>
                      {b.desc1}
                      {b.desc2 && (
                        <>
                          <br />
                          {b.desc2}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Form */}
          <Row className="justify-content-center">
            <Col lg="10">
              <div className="luxury-contact-form-wrapper">
                <div className="form-header">
                  <h3>{trOr(t, "contact.form.title", "Get in Touch")}</h3>
                  <p>{trOr(t, "contact.form.subtitle", "We'd love to hear from you. Please fill out this form.")}</p>
                </div>
                <Form className="luxury-theme-form" onSubmit={onSubmit}>
                  <Row className="g-4">
                    <Col md="6">
                      <div className="luxury-input-group">
                        <Label htmlFor="firstName">{trOr(t, "contact.form.first_name", "First name")}</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder={trOr(t, "contact.form.first_name_placeholder", "Enter your first name")}
                          value={form.firstName}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="luxury-input-group">
                        <Label htmlFor="lastName">{trOr(t, "contact.form.last_name", "Last name")}</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder={trOr(t, "contact.form.last_name_placeholder", "Enter your last name")}
                          value={form.lastName}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="luxury-input-group">
                        <Label htmlFor="phone">{trOr(t, "contact.form.phone", "Phone")}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder={trOr(t, "contact.form.phone_placeholder", "Enter your phone")}
                          value={form.phone}
                          onChange={onChange}
                        />
                      </div>
                    </Col>

                    <Col md="6">
                      <div className="luxury-input-group">
                        <Label htmlFor="email">{trOr(t, "contact.form.email", "Email")}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={trOr(t, "contact.form.email_placeholder", "Enter your email")}
                          value={form.email}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </Col>

                    <Col md="12">
                      <div className="luxury-input-group">
                        <Label htmlFor="subject">{trOr(t, "contact.form.subject", "Subject")}</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder={trOr(t, "contact.form.subject_placeholder", "How can we help?")}
                          value={form.subject}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </Col>

                    <Col md="12">
                      <div className="luxury-input-group">
                        <Label htmlFor="message">{trOr(t, "contact.form.message", "Message")}</Label>
                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          placeholder={trOr(t, "contact.form.message_placeholder", "Write your message here…")}
                          value={form.message}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </Col>

                    <Col md="12" className="text-center mt-5">
                      <button className="btn-luxury-submit" type="submit" disabled={submitting} aria-busy={submitting}>
                        {submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            {trOr(t, "contact.form.sending", "Sending…")}
                          </>
                        ) : (
                          trOr(t, "contact.form.submit", "Send Message")
                        )}
                      </button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <StyleTag global css={`
        .seada-luxury-contact {
          background: linear-gradient(180deg, #fdfdfd 0%, #f4f8f5 100%);
          padding: 120px 0 60px;
        }
        .luxury-map-wrapper {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(11, 107, 55, 0.08);
          border: 1px solid rgba(11, 107, 55, 0.05);
          height: 420px;
        }
        .luxury-map-wrapper .map iframe {
          width: 100%;
          height: 420px;
          border: 0;
          display: block;
        }
        .luxury-contact-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          border: 1px solid rgba(11, 107, 55, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .luxury-contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(11, 107, 55, 0.1);
        }
        .card-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #0b6b37 0%, #159b53 100%);
          border-radius: 16px;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
          box-shadow: 0 8px 20px rgba(11, 107, 55, 0.2);
          color: #fff;
          font-size: 24px;
        }
        .card-content h5 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1a231c;
          margin-bottom: 12px;
        }
        .card-content p {
          color: #556259;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0;
        }
        .luxury-contact-form-wrapper {
          background: #fff;
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 20px 50px rgba(11, 107, 55, 0.05);
          border: 1px solid rgba(11, 107, 55, 0.05);
        }
        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .form-header h3 {
          font-size: 2.2rem;
          font-weight: 900;
          color: #0b6b37;
          margin-bottom: 12px;
        }
        .form-header p {
          color: #647267;
          font-size: 1.1rem;
        }
        .luxury-input-group label {
          font-weight: 700;
          color: #1a231c;
          margin-bottom: 8px;
          display: block;
          font-size: 0.95rem;
        }
        .luxury-input-group input,
        .luxury-input-group textarea {
          width: 100%;
          background: #fdfdfd;
          border: 1px solid rgba(11, 107, 55, 0.15);
          border-radius: 12px;
          padding: 14px 20px;
          color: #1a231c;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .luxury-input-group textarea {
          resize: vertical;
        }
        .luxury-input-group input:focus,
        .luxury-input-group textarea:focus {
          outline: none;
          background: #fff;
          border-color: #0b6b37;
          box-shadow: 0 0 0 4px rgba(11, 107, 55, 0.1);
        }
        .btn-luxury-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 48px;
          background: linear-gradient(135deg, #0b6b37 0%, #159b53 100%);
          color: #fff;
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(11, 107, 55, 0.25);
        }
        .btn-luxury-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(11, 107, 55, 0.35);
        }
        .btn-luxury-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        @media (max-width: 768px) {
          .luxury-contact-form-wrapper {
            padding: 32px 20px;
          }
          .form-header h3 {
            font-size: 1.8rem;
          }
        }
      `} />


    </CommonLayout>
  );
};

export default Contact;

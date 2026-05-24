import React, { useState } from "react";
import CommonLayout from "../components/shop/common-layout";
import { useLanguage } from "../helpers/Language/useLanguage";
import { Container, Row, Col, Form, Label, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { sendConsultation } from "../actions/main";
import StyleTag from "@/styles/StyleTag";

const ConsultationPage = () => {
  const { t, isRTL } = useLanguage();
  
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    inquiryType: "general",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const payload = {
      companyName: form.companyName,
      contactName: form.contactName,
      email: form.email,
      phone: form.phone,
      industry: form.industry,
      inquiryType: form.inquiryType,
      message: form.message,
    };

    try {
      setSubmitting(true);
      await toast.promise(sendConsultation(payload), {
        pending: isRTL ? "جاري الإرسال..." : "Sending...",
        success: isRTL ? "تم استلام طلب الاستشارة بنجاح" : "Consultation request sent successfully!",
        error: isRTL ? "فشل في إرسال الطلب" : "Failed to send request. Please try again.",
      });
      setForm({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        industry: "",
        inquiryType: "general",
        message: ""
      });
    } catch {
      // toast handles the error UI
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <CommonLayout parent="Home" title={isRTL ? "طلب استشارة" : "Request Consultation"}>
      {/* <ToastContainer position={isRTL ? "top-left" : "top-right"} theme="colored"/> */}
      
      <section className="corp-section corp-section-alt" dir={isRTL ? "rtl" : "ltr"}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="corp-consultation-wrapper">
                <div className="corp-section-header">
                  <h2>{isRTL ? "اطلب استشارة أعمال" : "Request a Business Consultation"}</h2>
                  <p>
                    {isRTL 
                      ? "نقدم خدمات استشارية متخصصة وحلول مخصصة لاحتياجات أعمالك. يرجى ملء النموذج أدناه وسيتواصل معك فريق الخبراء لدينا قريباً." 
                      : "We provide specialized consulting services and tailored solutions for your business needs. Please fill out the form below and our expert team will contact you shortly."}
                  </p>
                </div>

                <div className="glass-card corp-consultation-form">
                  <Form onSubmit={onSubmit}>
                    <Row className="g-4">
                      <Col md="6">
                        <Label>{isRTL ? "اسم الشركة" : "Company Name"}</Label>
                        <Input 
                          className="corp-input" 
                          name="companyName" 
                          value={form.companyName} 
                          onChange={onChange} 
                          placeholder={isRTL ? "أدخل اسم الشركة" : "Enter company name"} 
                        />
                      </Col>
                      <Col md="6">
                        <Label>{isRTL ? "اسم جهة الاتصال" : "Contact Name"} <span className="text-danger">*</span></Label>
                        <Input 
                          className="corp-input" 
                          name="contactName" 
                          value={form.contactName} 
                          onChange={onChange} 
                          required 
                          placeholder={isRTL ? "الاسم الكامل" : "Full Name"} 
                        />
                      </Col>

                      <Col md="6">
                        <Label>{isRTL ? "البريد الإلكتروني" : "Email Address"} <span className="text-danger">*</span></Label>
                        <Input 
                          className="corp-input" 
                          type="email" 
                          name="email" 
                          value={form.email} 
                          onChange={onChange} 
                          required 
                          placeholder="email@example.com" 
                        />
                      </Col>
                      <Col md="6">
                        <Label>{isRTL ? "رقم الهاتف" : "Phone Number"} <span className="text-danger">*</span></Label>
                        <Input 
                          className="corp-input" 
                          name="phone" 
                          value={form.phone} 
                          onChange={onChange} 
                          required 
                          placeholder={isRTL ? "رقم الجوال" : "Phone number"} 
                        />
                      </Col>

                      <Col md="6">
                        <Label>{isRTL ? "مجال العمل / الصناعة" : "Industry / Sector"}</Label>
                        <Input 
                          className="corp-input" 
                          name="industry" 
                          value={form.industry} 
                          onChange={onChange} 
                          placeholder={isRTL ? "مثال: تجزئة، تصنيع، إلخ" : "e.g. Retail, Manufacturing, etc."} 
                        />
                      </Col>
                      <Col md="6">
                        <Label>{isRTL ? "نوع الاستفسار" : "Inquiry Type"}</Label>
                        <Input 
                          type="select" 
                          className="corp-input" 
                          name="inquiryType" 
                          value={form.inquiryType} 
                          onChange={onChange}
                        >
                          <option value="general">{isRTL ? "استفسار عام" : "General Inquiry"}</option>
                          <option value="bulk_order">{isRTL ? "طلبات الجملة" : "Bulk Orders"}</option>
                          <option value="partnership">{isRTL ? "شراكة استراتيجية" : "Strategic Partnership"}</option>
                          <option value="custom_product">{isRTL ? "تصنيع منتج مخصص" : "Custom Product Manufacturing"}</option>
                        </Input>
                      </Col>

                      <Col md="12">
                        <Label>{isRTL ? "تفاصيل الطلب / الرسالة" : "Request Details / Message"} <span className="text-danger">*</span></Label>
                        <textarea 
                          className="corp-input corp-textarea" 
                          name="message" 
                          value={form.message} 
                          onChange={onChange} 
                          required 
                          placeholder={isRTL ? "اكتب تفاصيل طلبك هنا..." : "Write your request details here..."} 
                        />
                      </Col>

                      <Col md="12" className="text-center mt-4">
                        <button type="submit" className="corp-btn corp-btn-primary corp-btn-lg" disabled={submitting}>
                          {submitting ? (isRTL ? "جاري الإرسال..." : "Sending...") : (isRTL ? "إرسال طلب الاستشارة" : "Submit Consultation Request")}
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <StyleTag global css={`
        .corp-consultation-wrapper {
          padding-top: 40px;
        }
        .corp-consultation-wrapper .corp-section-header {
          margin-bottom: 40px;
        }
        .corp-consultation-form {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--corp-radius-xl);
          padding: 40px;
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
          font-weight: 500;
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
        label {
          font-weight: 700;
          color: var(--corp-navy);
          margin-bottom: 8px;
          display: block;
        }
        @media (max-width: 768px) {
          .corp-consultation-form {
            padding: 24px;
          }
        }
      `} />
    </CommonLayout>
  );
};

export default ConsultationPage;

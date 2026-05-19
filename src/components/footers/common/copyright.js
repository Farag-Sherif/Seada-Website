// components/footers/common/copyright.js — Corporate Copyright
import React, { Fragment, useMemo } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLanguage } from "../../../helpers/Language/useLanguage";

const tr = (t, key, fallback) => {
  try {
    const v = t ? t(key) : "";
    return !v || v === key ? fallback : v;
  } catch {
    return fallback;
  }
};

const CopyRight = ({ layout, fluid }) => {
  const lang = useLanguage?.();
  const t = lang?.t;
  const isRTL = Boolean(lang?.isRTL);

  const yearRange = useMemo(
    () => `2023–${new Date().getFullYear()}`,
    []
  );

  return (
    <Fragment>
      <div
        className={`sub-footer ${layout || ""}`}
        dir={isRTL ? "rtl" : "ltr"}
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <Container fluid={typeof fluid === "string" ? fluid : !!fluid}>
          <p style={{
            margin: 0,
            color: "var(--corp-text-on-dark-muted, #94A3B8)",
            fontSize: "0.85rem",
          }}>
            <i className="fa fa-copyright" aria-hidden="true" />{" "}
            {yearRange}{" "}
            {tr(
              t,
              "footer.copyright",
              isRTL
                ? "جميع الحقوق محفوظة — بدعم من Bluebrain"
                : "All rights reserved — powered by Bluebrain"
            )}
          </p>
        </Container>
      </div>
    </Fragment>
  );
};

export default CopyRight;

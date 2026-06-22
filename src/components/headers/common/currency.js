import React, { useContext } from "react";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useLanguage } from "../../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";

const Currency = () => {
  useContext(CurrencyContext);
  const { changeLanguage, currentLanguage } = useLanguage();

  const isAr = String(currentLanguage).toLowerCase() === "ar";

  const toggleLanguage = () => {
    changeLanguage(isAr ? "en" : "ar");
  };

  return (
    <>
      <li className="c-lang-li">
        <button
          type="button"
          className="c-lang-btn-direct"
          onClick={toggleLanguage}
          aria-label="Change language"
        >
          {isAr ? "EN" : "ع"}
        </button>
      </li>

      <StyleTag global css={`
        .c-lang-li { list-style: none; display: inline-flex; align-items: center; }
        .c-lang-btn-direct {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 32px;
          background: #b5bcc5; color: #ffffff;
          border: none; border-radius: 16px; cursor: pointer;
          font-family: inherit; font-weight: 700; font-size: 16px;
          transition: background 0.2s, transform 0.15s;
        }
        .c-lang-btn-direct:hover { background: #9fa7b2; transform: translateY(-1px); }
        @media (max-width: 575.98px) {
          .c-lang-btn-direct  { width: 38px; height: 28px; font-size: 14px; }
        }
      `} />
    </>
  );
};

export default Currency;
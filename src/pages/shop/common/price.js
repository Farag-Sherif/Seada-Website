import React, { useContext, useMemo, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import FilterContext from "../../../helpers/filter/FilterContext";
import { Collapse } from "reactstrap";
import { useLanguage } from "../../../helpers/Language/useLanguage";

const trSafe = (t, keyOrText, fallback) => {
  if (!keyOrText) return fallback ?? "";
  try {
    const res = t(keyOrText);
    if (res && res !== keyOrText) return res;
    const v1 = t(keyOrText.toLowerCase());
    if (v1 && v1 !== keyOrText.toLowerCase()) return v1;
    return fallback ?? keyOrText;
  } catch {
    return fallback ?? keyOrText;
  }
};

const MAX_PRICE = 500;

const Price = () => {
  const { t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);
  const context = useContext(FilterContext);

  const current = context.selectedPrice || { min: 0, max: MAX_PRICE };
  const initialValues = useMemo(() => [Number(current.min ?? 0), Number(current.max ?? MAX_PRICE)], [current.min, current.max]);
  const [values, setValues] = useState(initialValues);

  const onChange = (next) => {
    setValues(next);
    context.setSelectedPrice?.({ min: next[0], max: next[1] });
  };

  return (
    <div className="collection-collapse-block border-0 open" dir={isRTL ? "rtl" : "ltr"}>
      <h3 className="collapse-block-title" onClick={() => setIsOpen((v) => !v)}>
        {trSafe(t, "price", isRTL ? "السعر" : "Price range")}
      </h3>

      <Collapse isOpen={isOpen}>
        <div className="collection-collapse-block-content">
          <div className="wrapper mt-3">
            <div className="range-slider">
              <Range
                values={values}
                step={5}
                min={0}
                max={MAX_PRICE}
                onChange={onChange}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{ ...props.style, height: "40px", display: "flex", width: "100%", alignItems: "center" }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "8px",
                        width: "100%",
                        borderRadius: "999px",
                        background: getTrackBackground({ values, colors: ["#d7e7db", "#16a34a", "#d7e7db"], min: 0, max: MAX_PRICE }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "22px",
                      width: "22px",
                      borderRadius: "60px",
                      backgroundColor: "#ffffff",
                      border: "5px solid #16a34a",
                      boxShadow: "0 6px 12px rgba(22, 163, 74, .2)",
                    }}
                  />
                )}
              />
              <div className="d-flex align-items-center justify-content-between mt-2">
                <output>{values[0]}</output>
                <output>{values[1]}</output>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Price;

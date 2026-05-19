import React from "react";
import Category from "./category";
import Price from "./price";
import Size from "./size";

const FilterPage = ({ sidebarView, closeSidebar, categories }) => {
  return (
    <div className={`seada-filter-shell ${sidebarView ? "open" : ""}`}>
      <div className="seada-filter-header d-lg-none">
        <strong>Filters</strong>
        <button type="button" className="seada-filter-close" onClick={closeSidebar}>×</button>
      </div>

      <div className="collection-filter-block">
        <Category categories={categories} />
        <Price />
        <Size />
      </div>
    </div>
  );
};

export default FilterPage;

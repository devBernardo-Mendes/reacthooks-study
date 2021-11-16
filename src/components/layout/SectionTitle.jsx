import "./SectionTitle.scss";
import React from "react";

const SectionTitle = (props) => (
  <div className="SectionTitle">
    <h3>{props.title}</h3>
  </div>
);

export default SectionTitle;

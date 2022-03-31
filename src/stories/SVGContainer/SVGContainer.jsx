import * as React from "react";

import "./svgContainer.css";

export function SVGContainer(props) {
  const { width = "100%", children } = props;
  return (
    <div className="svg-container" style={{ width: `${width}` }}>
      {children}
    </div>
  );
}

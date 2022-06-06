import React from "react";
import PropTypes from "prop-types";
import iconPath from "./iconPaths";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

export function Icon({ size, color, icon, className, style, viewBox }) {
  const styles = { ...defaultStyles, ...style };
  console.log("wtf", icon);
  console.log("wtf 2 ", iconPath);
  console.log(iconPath[icon]);
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} d={iconPath[icon]} />
    </svg>
  );
}

Icon.defaultProps = {
  size: 16,
  color: "#000000",
  viewBox: "0 0 24 24",
  style: {},
  className: "",
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(["warn", "info", "sortup", "sortdown", undefined]),
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

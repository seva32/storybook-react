import React from "react";
import PropTypes from "prop-types";

export const truncate = (str, max) => {
  const l = str.length;
  if (l < max) return str;

  return `${str.substring(0, max)}...`;
};

const Badge = ({
  children = "Children",
  classes,
  classname,
  color,
  icon,
  invert,
  size,
  maxLength,
  lead,
  ...other
}) => {
  const classNames = `
    mrc--badge
    ${size}
    ${(invert && "mrc--inverted") || ""}
    ${(lead && "mrc--lead") || ""}
    ${classname}
  `;

  let _children = children;
  let text = null;

  if (maxLength > 0) {
    if (Array.isArray(_children)) {
      let strChildIdx = _children.findIndex(
        (child) => typeof child === "string"
      );
      let strChild = _children[strChildIdx];

      if (strChild && strChild.length > maxLength) {
        text = truncate(strChild, maxLength);
      }
    } else if (typeof children === "string") {
      text = truncate(_children, maxLength);
    }
  }

  return (
    <span className={classNames} aria-label={children} data-balloon-pos={"top"}>
      {icon && <div>??</div>}
      {maxLength > 0 ? text : _children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  invert: PropTypes.bool,
  lead: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
  maxLength: PropTypes.number,
};

Badge.defaultProps = {
  children: null,
  classes: null,
  className: null,
  color: "primary",
  icon: null,
  invert: false,
  lead: false,
  size: "md",
  maxLength: -1,
};

export default Badge;

import React from "react";
import PropTypes from "prop-types";

export const truncate = (str, max) => {
  const l = str.length;
  if (l < max) return str;

  return `${str.substring(0, max)}...`;
};

const Badge = ({
  children = "Children",
  classname,
  color,
  icon,
  size,
  maxLength,
  iconRight,
  ...other
}) => {
  const classNames = `badge ellipsis divider ${size} ${classname} ${color} ${
    iconRight ? "icon-right" : ""
  }`;

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
    <span className={classNames} aria-label={children} {...other}>
      {icon && <div className="icon">{icon}</div>}
      {maxLength > 0 ? text : _children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(["green", "violet"]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
  maxLength: PropTypes.number,
};

Badge.defaultProps = {
  children: null,
  className: null,
  iconRight: false,
  color: "green",
  size: "md",
  maxLength: -1,
  icon: null,
};

export default Badge;

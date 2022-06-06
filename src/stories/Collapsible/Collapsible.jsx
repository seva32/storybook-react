import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon";

import "./collapsible.css";

export function Collapsible({
  className,
  children,
  title,
  body,
  instantAni,
  startOpened,
  iconName,
  toggleElement,
  viewBox,
}) {
  const [open, setOpen] = useState(() => {
    return startOpened ? true : null;
  });
  const [firstRender, setFirstRender] = useState(false);
  const collapsibleRef = useRef(null);
  const classNames = `collapsible ${className}`;
  const icon =
    iconName !== null
      ? iconName
      : `sort${startOpened && firstRender ? "up" : "down"}`;

  useEffect(() => {
    if (!firstRender && firstRender !== null) {
      setFirstRender(true);
    }
  }, [firstRender]);

  const expandSection = (element, sectionHeight) => {
    element.style.height = `${sectionHeight}px`;
    element.style.opacity = 1;

    element.addEventListener("transitionend", function inner(e) {
      element.removeEventListener("transitionend", inner);
      element.style.height = null; // this returns the height to initial value
      element.style.opacity = 1;
    });
  };

  const collapseSection = (element, sectionHeight) => {
    if (firstRender) setFirstRender(null);
    const elementTransition = element.style.transition;
    element.style.transition = "";

    requestAnimationFrame(function () {
      element.style.height = `${sectionHeight}px`;
      element.style.opacity = 1;
      element.style.transition = elementTransition;

      requestAnimationFrame(function () {
        element.style.height = "0px";
        element.style.opacity = 0.6;
      });
    });
  };

  useEffect(() => {
    const element = collapsibleRef.current;
    const sectionHeight = element.scrollHeight;
    if (open) {
      expandSection(element, sectionHeight);
    } else {
      collapseSection(element, sectionHeight);
    }
  }, [open]); // eslint-disable-line

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={classNames}>
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item button-container">
            <button
              className={
                toggleElement || iconName
                  ? ""
                  : `collapsible-${
                      open === null || (startOpened && firstRender)
                        ? ""
                        : open
                        ? `open${instantAni ? "-no_delay" : ""}`
                        : `close${instantAni ? "-no_delay" : ""}`
                    }`
              }
              onClick={handleClick}
            >
              {toggleElement ? (
                toggleElement
              ) : (
                <Icon icon={icon} viewBox={viewBox ? viewBox : "0 0 24 24"} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`collapsible-content${instantAni ? "-no_delay" : ""}`}
        ref={collapsibleRef}
      >
        {(collapsibleRef && collapsibleRef.current) || startOpened ? (
          <>
            <div className="">{body}</div>
            {children}
          </>
        ) : null}
      </div>
    </div>
  );
}

Collapsible.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  toggleElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
  className: PropTypes.string,
  instantAni: PropTypes.bool,
  startOpened: PropTypes.bool,
  iconName: PropTypes.oneOf(["warn", "info"]),
  viewBox: PropTypes.string,
};

Collapsible.defaultProps = {
  title: null,
  body: null,
  toggleElement: null,
  children: null,
  className: null,
  instantAni: null,
  startOpened: false,
  iconName: null,
  viewBox: null,
};

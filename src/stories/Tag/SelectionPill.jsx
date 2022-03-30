import React, { forwardRef } from "react";

import "./SelectionPill.css";

export const SelectionPill = forwardRef((props, ref) => {
  const {
    children,
    classname,
    disabled = false,
    leftIcon,
    selected = false,
    showDropDownIcon = false,
    showSelectionIcon = false,
    ...rest
  } = props;

  const selectedPill = disabled ? false : selected;

  return (
    <button
      ref={ref}
      aria-pressed={selectedPill}
      disabled={disabled}
      {...rest}
      className=""
    >
      {leftIcon && (
        <span
          className="selectionpill-icon selectionpill-icon-left"
          aria-hidden="true"
        >
          {leftIcon}
        </span>
      )}
      <span className="pill-label">{children}</span>

      {showSelectionIcon && !selectedPill && (
        <span
          className="selectionpill-icon selectionpill-icon-right"
          aria-hidden="true"
        >
          +
        </span>
      )}

      {showSelectionIcon && selectedPill && (
        <span
          className="selectionpill-icon selectionpill-icon-right"
          aria-hidden="true"
        >
          X
        </span>
      )}

      {showDropDownIcon && !showSelectionIcon && (
        <span
          className="selectionpill-icon selectionpill-icon-right"
          aria-hidden="true"
        >
          V
        </span>
      )}
    </button>
  );
});

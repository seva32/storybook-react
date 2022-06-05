import React from "react";
import "./accordionComponents.css";

function AccordionButton({ isOpen, children, onClick }) {
  return (
    <button
      className="accordion-btn"
      style={{
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.2)" : null,
      }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

function AccordionContents({ isOpen, children, ...props }) {
  return (
    <div
      className="accordion-contents"
      style={{
        maxHeight: isOpen ? "200px" : "0px",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function AccordionItem({ direction, children }) {
  return (
    <div
      className="accordion-item"
      style={{ gridAutoFlow: direction === "horizontal" ? "column" : "row" }}
    >
      {children}
    </div>
  );
}

function TabButtons({ children }) {
  return <div className="tab-buttons">{children}</div>;
}

function TabButton({ isOpen, children, onClick }) {
  return (
    <button
      className="accordion-btn tab-btn"
      style={{
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.2)" : null,
      }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

function TabItems({ children }) {
  return <div className="tab-items">{children}</div>;
}

function TabItem({ position, isOpen, children, ...props }) {
  const opacityValue = isOpen ? "1" : "0";
  const topValue = position === "above" ? (isOpen ? 0 : 30) : isOpen ? 30 : 0;
  return (
    <div
      className="tab-item"
      style={{
        opacity: opacityValue,
        top: topValue,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  TabItem,
  TabItems,
  TabButton,
  TabButtons,
};

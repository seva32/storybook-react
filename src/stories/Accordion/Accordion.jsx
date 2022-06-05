import React from "react";
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
} from "./AccordionComponents";
import {
  useAccordion,
  combineReducers,
  singleReducer,
  preventCloseReducer,
} from "./useAccordion";

export function Accordion({ items, reducer = () => {}, ...props }) {
  const { openIndexes, toggleIndex } = useAccordion({
    reducer: combineReducers(reducer, preventCloseReducer),
  });

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={item.title} direction="vertical">
          <AccordionButton
            isOpen={openIndexes.includes(index)}
            onClick={() => toggleIndex(index)}
          >
            {item.title}{" "}
            <span>{openIndexes.includes(index) ? "👇" : "👈"}</span>
          </AccordionButton>
          <AccordionContents isOpen={openIndexes.includes(index)}>
            {item.contents}
          </AccordionContents>
        </AccordionItem>
      ))}
    </div>
  );
}

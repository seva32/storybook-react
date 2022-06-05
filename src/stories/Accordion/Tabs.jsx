import React from "react";
import {
  TabButton,
  TabItem,
  TabItems,
  TabButtons,
} from "./AccordionComponents";
import {
  useAccordion,
  accordionReducer,
  combineReducers,
  singleReducer,
  preventCloseReducer,
} from "./useAccordion";

function useTabs({ reducer = () => {} } = {}) {
  return useAccordion({
    reducer: combineReducers(
      reducer,
      preventCloseReducer,
      singleReducer,
      accordionReducer
    ),
  });
}

export function Tabs({ items, position }) {
  const { openIndexes, toggleIndex } = useTabs();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: position === "above" ? "column" : "column-reverse",
      }}
    >
      <TabItems>
        {items.map((item, index) => (
          <TabItem key={index} isOpen={openIndexes.includes(index)}>
            {items[index].contents}
          </TabItem>
        ))}
      </TabItems>
      <TabButtons>
        {items.map((item, index) => (
          <TabButton
            key={item.title}
            isOpen={openIndexes.includes(index)}
            onClick={() => toggleIndex(index)}
          >
            {item.title}
          </TabButton>
        ))}
      </TabButtons>
    </div>
  );
}

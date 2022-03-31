import React from "react";

import { SelectionPill } from "./SelectionPill";

export function MultiselectTag({ selectedTags, setSelectedTags, defaultTags }) {
  const [processedTags, setProcessedTags] = React.useState([]);

  React.useEffect(() => {
    setProcessedTags(
      defaultTags.map((tag) => ({
        name: tag,
        selected: selectedTags.includes(tag),
      }))
    );
  }, [selectedTags, defaultTags]);

  if (!defaultTags?.length) return null;

  return (
    <>
      <div
        aria-label="Select Listing Options"
        className="multiselect-tag-wrapper"
        role="list"
      >
        {processedTags.map((pill, index) => {
          const indexFromSelectedTags = selectedTags?.indexOf(pill.name);
          const toggle = () => {
            const selectedTagsCopy = [...selectedTags];
            if (pill.selected) {
              selectedTagsCopy.splice(indexFromSelectedTags, 1);
              setSelectedTags(selectedTagsCopy);
            } else if (indexFromSelectedTags < 0) {
              selectedTagsCopy.unshift(pill.name);
              setSelectedTags(selectedTagsCopy);
            }
          };

          return (
            <div id={`${pill.name}`} key={index}>
              <SelectionPill
                onClick={toggle}
                selected={pill.selected}
                showSelectionIcon
                className="multiselect-tag-pill"
              >
                {pill.name}
              </SelectionPill>
            </div>
          );
        })}
      </div>
    </>
  );
}

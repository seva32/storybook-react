import React, { useState, useEffect, useCallback, useRef } from "react";

import { SelectionPill } from "./SelectionPill";

import "./TagField.css";

const initialState = {
  tagNames: [],
  inputValue: "",
  KEY: {
    backspace: 8,
    tab: 9,
    enter: 13,
  },
  INVALID_CHARS: /[^a-zA-Z0-9 ]/g,
};

export function TagsField({
  customTags,
  setFieldValue,
  max = null,
  maxlength = null,
}) {
  const [state, setState] = useState(initialState);
  const inputRef = useRef(null);
  const prevTagNames = useRef(null);

  useEffect(() => {
    if (customTags?.length > 0)
      setState((prev) => ({ ...prev, tagNames: [...customTags] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function isEqual(array1, array2) {
      if (array1 && array2) {
        const array2Sorted = array2.slice().sort();
        return (
          array1.length === array2.length &&
          array1
            .slice()
            .sort()
            .every(function (value, index) {
              return value === array2Sorted[index];
            })
        );
      }
    }
    if (!isEqual(prevTagNames.current, state.tagNames)) {
      setFieldValue && setFieldValue(state.tagNames);
      prevTagNames.current = state.tagNames;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.tagNames]);

  const updateChips = (event) => {
    if (!max || state.tagNames.length < max) {
      const value = event.target.value;

      if (!value) return;

      const chip = value.trim().toLowerCase();

      if (chip && state.tagNames.indexOf(chip) < 0) {
        setState((prev) => ({
          ...prev,
          tagNames: [...prev.tagNames, chip],
          inputValue: "",
        }));
      }
    }

    event.target.value = "";
  };

  const deleteChip = (chip) => {
    const index = state.tagNames.indexOf(chip);

    if (index >= 0) {
      setState((prev) => ({
        ...prev,
        tagNames: [
          ...prev.tagNames.slice(0, index),
          ...prev.tagNames.slice(index + 1),
        ],
      }));
    }
  };

  const onKeyDown = (event) => {
    const keyPressed = event.which;

    if (
      keyPressed === state.KEY.enter ||
      (keyPressed === state.KEY.tab && event.target.value)
    ) {
      event.preventDefault();
      updateChips(event);
    } else if (keyPressed === state.KEY.backspace) {
      const chips = state.tagNames;

      if (!event.target.value && chips.length) {
        deleteChip(chips[chips.length - 1]);
      }
    }
  };

  const clearInvalidChars = (event) => {
    const value = event.target.value;

    setState((prev) => ({
      ...prev,
      inputValue: value,
    }));

    if (state.INVALID_CHARS.test(value)) {
      event.target.value = value.replace(state.INVALID_CHARS, "");
    } else if (maxlength && value.length > maxlength) {
      event.target.value = value.substr(0, maxlength);
    }
  };

  const focusInput = (event) => {
    const children = event.target.children;

    if (children.length) children[children.length - 1].focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setState((prev) => ({
      ...prev,
      tagNames: prev.inputValue
        ? [...prev.tagNames, prev.inputValue]
        : [...prev.tagNames],
      inputValue: "",
    }));
    if (inputRef.current) inputRef.current.value = "";
  };

  const assignInputRef = useCallback(
    (node) => {
      inputRef.current = node;
    },
    [inputRef]
  );

  return (
    <>
      <div className="tagfield-input-wrapper">
        <input
          aria-autocomplete="list"
          aria-controls="pills-name-text-input"
          label="Add your own tags"
          labelIsHidden
          onChange={() => state.inputValue}
          onFocus={focusInput}
          placeholder="Add your custom tags"
          size="lg"
          className="tagfield-input"
          onKeyDown={onKeyDown}
          onKeyUp={clearInvalidChars}
          ref={assignInputRef}
        />
        <button onClick={handleSubmit} size="lg">
          Add Tag
        </button>
      </div>

      <div aria-label="options" className="tagfield-list" role="list">
        {state.tagNames.map((chip, idx) => (
          <SelectionPill key={`${idx}-${chip}`}>
            <div className="tagfield-pill-selection">
              {chip}
              <button onClick={() => deleteChip(chip)}>X</button>
            </div>
          </SelectionPill>
        ))}
      </div>
    </>
  );
}

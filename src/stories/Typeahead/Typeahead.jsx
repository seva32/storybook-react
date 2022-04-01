import React, { useState, useEffect, FormEvent, useRef } from "react";

import { useOnClickOutside } from "../../helper/useClickOutside";
import "./typeahead.css";

// suggestions: { key: number; value: string }[] -> items ==

export function TypeAheadDropDown({ setSelected }) {
  const [suggestions, setSuggestions] = React.useState([]);
  const [text, setText] = React.useState("");
  const [items, setItems] = React.useState([]);
  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => {
    setSelected(text);
    setSuggestions([]);
  });

  useEffect(() => {
    setItems([
      { key: 1, value: "Cordoba" },
      { key: 1, value: "Mendoza" },
      { key: 1, value: "Buenos Aires" },
      { key: 1, value: "Montevideo" },
      { key: 1, value: "Montecarlo" },
      { key: 1, value: "Menphis" },
    ]);
  }, []);

  function handleChange(e) {
    let suggestions = [];
    const value = e.currentTarget?.value;
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = items.sort().filter((item) => regex.test(item.value));
    }
    setSuggestions(suggestions);
    setText(value);
  }

  function suggestionSelected(selection) {
    setText(selection.value);
    setSelected(selection.value);
    setSuggestions([]);
  }

  function renderSuggestions() {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul id="typeahead-cd">
        {suggestions.map((sug) => (
          <li
            key={sug.key}
            value={sug.value}
            onClick={(e) => suggestionSelected(sug)}
          >
            {sug.value}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="typeahead-drop-down" ref={dropdownRef}>
      <input
        onChange={handleChange}
        placeholder="Search city name"
        value={text}
        type="text"
      />
      {renderSuggestions()}
    </div>
  );
}

import React, { useEffect, useState } from "react";

import "./dnd.css";

// data = [{ id: string, content: string }]; -> must include an 'id' prop

export function DnD({ data = [], component = null }) {
  const [reorder, setReorder] = useState({});
  const [elementsInfo, setElementsInfo] = useState(data);

  useEffect(() => {
    let dragSrcEl;
    function handleDragStart(e) {
      dragSrcEl = e.currentTarget;
      e.dataTransfer.effectAllowed = "move";
    }

    function handleDragOver(e: Event) {
      let event = e;
      event.stopPropagation();
      event.preventDefault();
      return false;
    }

    function handleDrop(e: any) {
      e.stopPropagation();
      if (dragSrcEl !== e.currentTarget) {
        setReorder({ src: dragSrcEl.id, target: e.currentTarget.id });
      }
      return false;
    }

    const liElements = document.querySelectorAll("ul.dnd-container li");
    liElements.forEach(function (item) {
      item.addEventListener("dragstart", handleDragStart);
      item.addEventListener("dragover", handleDragOver);
      item.addEventListener("drop", handleDrop);
    });

    return () => {
      liElements.forEach(function (item) {
        item.removeEventListener("dragstart", handleDragStart);
        item.removeEventListener("dragover", handleDragOver);
        item.removeEventListener("drop", handleDrop);
      });
    };
  }, [elementsInfo]);

  useEffect(() => {
    if (Object.keys(reorder).length) {
      const targetIndex = elementsInfo.findIndex(
        (element) => element.id === reorder.target
      );
      const originalIndex = elementsInfo.findIndex(
        (member) => member.id === reorder.src
      );
      const elementsInfoCopy = [...elementsInfo];
      if (originalIndex === targetIndex) return;
      if (originalIndex < targetIndex) {
        let i = originalIndex;
        elementsInfoCopy[targetIndex] = elementsInfo[originalIndex];
        while (i < targetIndex) {
          elementsInfoCopy[i] = elementsInfo[i + 1];
          i += 1;
        }
      } else {
        let i = targetIndex;
        elementsInfoCopy[targetIndex] = elementsInfo[originalIndex];
        while (i < originalIndex) {
          elementsInfoCopy[i + 1] = elementsInfo[i];
          i += 1;
        }
      }
      setElementsInfo(elementsInfoCopy);
      setReorder({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reorder]);

  if (!data.length || !elementsInfo.length) return null;

  return (
    <ul className="dnd-container">
      {elementsInfo.map((element) => {
        if (!element) return null;

        let Component = null;
        if (typeof component !== "undefined")
          Component = React.createElement(component, {
            key: element.id,
            ...element,
          });
        else
          Component = React.createElement(
            () => <div>The element component has not been created yet.</div>,
            { key: element.id }
          );

        return (
          <li
            draggable
            className="dnd-element"
            id={`${element.id}`}
            key={`${element.id}`}
          >
            {Component}
          </li>
        );
      })}
    </ul>
  );
}

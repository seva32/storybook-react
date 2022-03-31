import React from "react";

export function DnDComponent(props) {
  return (
    <div className="bar">
      <hr />
      Hi I'm a DnD component:
      <h4>{props.content}</h4>
    </div>
  );
}

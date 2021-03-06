import React from "react";
import PropTypes from "prop-types";

import "./HtmlTableRow.css";

function HtmlTableRow(props) {
  const {
    classname,
    onClick,
    isHeader,
    columns,
    data,
    textSize,
    textAlign,
    ...others
  } = props;

  function handleClick(event) {
    if (event.target.onclick === null) {
      onClick && onClick(data);
    }
  }

  function renderCell(column, cellData, index) {
    let fontSize;
    switch (textSize) {
      case "sm":
        fontSize = "12px";
        break;
      case "md":
        fontSize = "14px";
        break;
      case "lg":
        fontSize = "18px";
        break;
      case "xl":
        fontSize = "24px";
        break;
      default:
        fontSize = "";
    }

    // get cell content
    let content;

    if (isHeader) {
      content = <div>{column.label}</div>;
    } else if (!column.content) {
      content = <div style={{ fontSize }}>{cellData[column.key]}</div>;
    } else if (
      column.content.prototype &&
      column.content.prototype.isReactComponent
    ) {
      const CellType = column.content;
      let cellProps = {};
      cellProps[column.componentProp || "data"] = cellData;

      content = React.createElement(CellType, cellProps);
    } else {
      content = column.content(cellData);
    }

    // get cell
    let cellClassNames = ``;
    let style = { textAlign };
    if (column.size && column.size.endsWith("px")) style["width"] = column.size;

    return (
      <td
        key={column.key || `col-${index}`}
        className={cellClassNames}
        style={style}
      >
        {content}
      </td>
    );
  }

  const classNames = `${classname}`;
  return (
    <tr
      className={classNames}
      style={{ borderBottomColor: "red" }}
      onClick={onClick && handleClick}
      {...others}
    >
      {columns.map((c, i) => renderCell(c, data, i))}
    </tr>
  );
}

HtmlTableRow.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.object,
  isHeader: PropTypes.bool,
  textSize: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
  onClick: PropTypes.func,
  classname: PropTypes.string,
};

/**

Columns should be in the form of:
[{
    key: string, // key in columns[] MUST match one obj prop in data[{data[column.key]: value}] for null content
    label: string | Element,
    content: null (takes key as the object getter for data[column.key]) | function | Element,
    size: ,
    align: ,
    componentProp: prop name for label/content Element
 },
 ...]

**/

HtmlTableRow.defaultProps = {
  columns: [],
  data: null,
  isHeader: false,
  textSize: "md",
  onClick: null,
  classname: "",
};

export { HtmlTableRow };

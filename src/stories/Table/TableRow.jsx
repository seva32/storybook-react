import React, { Component } from "react";
import PropTypes from "prop-types";

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.onclick === null) {
      this.props.onClick && this.props.onClick(this.props.data);
    }
  }

  renderCell(column, data, index) {
    let fontSize;
    switch (this.props.textSize) {
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

    if (this.props.isHeader) {
      content = <div>{column.label}</div>;
    } else if (!column.content) {
      content = <div style={{ fontSize }}>{data[column.key]}</div>;
    } else if (
      column.content.prototype &&
      column.content.prototype.isReactComponent
    ) {
      const CellType = column.content;
      let cellProps = {};
      cellProps[column.dataProp || "data"] = data;

      content = React.createElement(CellType, cellProps);
    } else {
      content = column.content(data);
    }

    // get cell
    let cellClassNames = `
        column
        ${column.size && column.size.startsWith("is-") ? column.size : ""}
        ${(column.size && column.size.endsWith("px") && "is-narrow") || ""}
        ${(column.align && column.align === "left" && "has-text-left") || ""}
        ${
          (column.align && column.align === "center" && "has-text-centered") ||
          ""
        }
        ${(column.align && column.align === "right" && "has-text-right") || ""}
        ${(column.isMobile && column.isMobile === "true" && "is-mobile") || ""}
    `;
    let style = {};
    if (column.size && column.size.endsWith("px")) style["width"] = column.size;

    return (
      <div
        key={column.key || `col-${index}`}
        className={cellClassNames}
        style={style}
      >
        {content}
      </div>
    );
  }

  render() {
    const { classname, onClick, isHeader, columns, data, isMobile, ...props } =
      this.props;

    const classNames = `
      ${isHeader ? "header--row" : "table--row"}
      ${classname} columns mrc--table-row
      ${(isHeader && "mrc--header-row") || ""}
      ${(onClick !== null && "mrc--highlight-row") || ""} 
      ${(isMobile && "is-mobile") || ""}
    `;
    return (
      <div
        className={classNames}
        style={{ borderBottomColor: "red" }}
        onClick={this.props.onClick && this.handleClick}
        {...props}
      >
        {columns.map((c, i) => this.renderCell(c, data, i))}
      </div>
    );
  }
}

TableRow.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.object,
  isHeader: PropTypes.bool,
  textSize: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
  onClick: PropTypes.func,
  isMobile: PropTypes.bool,
  classname: PropTypes.string,
};

/**

Columns should be in the form of:
[{
    key: string,
    label: string | Element,
    content: null (takes key as the object getter) | function | Element,
    size: is-*** (Bulma class) | XXXpx (fixed size in pixels) | null (auto),
    align: left | center | right,
 },
 ...]

**/

TableRow.defaultProps = {
  columns: [],
  data: null,
  isHeader: false,
  textSize: "md",
  onClick: null,
  isMobile: false,
  classname: "",
};

export { TableRow };

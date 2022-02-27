import React from "react";
import PropTypes from "prop-types";

import { HtmlTableRow } from "./HtmlTableRow";
import "./HtmlTable.css";

function HtmlTable(props) {
  const {
    classname,
    hideHeader,
    onRowClick,
    columns,
    textSize,
    data,
    rowComponent,
    stripped,
    stickyHeader,
    emptyContent,
    dataKeyAttr,
    headerTextAlign,
    bodyTextAlign,
    ...others
  } = props;

  const Row = rowComponent || HtmlTableRow;

  function getkey(e, i) {
    if (e.key) {
      return e.key;
    }

    return e[e._primaryKey || "id"]
      ? `idxy-${e[e._primaryKey || "id"]}`
      : `idxz-${i}`;
  }

  const className = `htmltable ${(stripped && "stripped") || ""} ${classname}`;

  return (
    <table className={className} {...others}>
      {!hideHeader && (
        <thead className={`${(stickyHeader && "sticky-header") || ""}`}>
          <HtmlTableRow
            isHeader
            columns={columns}
            key="header"
            textAlign={headerTextAlign}
          />
        </thead>
      )}
      {data
        .filter((e, i) => {
          return Object.getOwnPropertyNames(e).length !== 0;
        })
        .map((e, i) => (
          <Row
            key={getkey(e, i)}
            columns={columns}
            textSize={textSize}
            onClick={onRowClick}
            data={e}
            textAlign={bodyTextAlign}
          />
        ))}
    </table>
  );
}

HtmlTable.propTypes = {
  classname: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  rowComponent: PropTypes.func,
  onRowClick: PropTypes.func,
  stripped: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  hideHeader: PropTypes.bool,
  emptyContent: PropTypes.element,
  textSize: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
  headerTextAlign: PropTypes.oneOf(["left", "center", "right"]),
  bodyTextAlign: PropTypes.oneOf(["left", "center", "right"]),
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

HtmlTable.defaultProps = {
  classname: "",
  columns: [],
  data: [],
  rowComponent: null,
  stripped: true,
  stickyHeader: false,
  emptyContent: null,
  hideHeader: false,
  textSize: "md",
  onRowClick: null,
  headerTextAlign: "left",
  bodyTextAlign: "left",
};

export { HtmlTable };

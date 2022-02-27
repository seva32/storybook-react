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

  const className = `${(stripped && "stripped") || ""} ${
    (stickyHeader && "sticky-header") || ""
  } ${classname}`;

  return (
    <table className={className} {...others}>
      {!hideHeader && <HtmlTableRow isHeader columns={columns} key="header" />}
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
};

export { HtmlTable };
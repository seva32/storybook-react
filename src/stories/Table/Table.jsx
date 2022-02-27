import React, { Component } from "react";
import PropTypes from "prop-types";

import { TableRow } from "./TableRow";
import "./table.css";

class Table extends Component {
  getkey(e, i) {
    if (e.key) {
      return e.key;
    }

    return e[e._primaryKey || "id"]
      ? `idxy-${e[e._primaryKey || "id"]}`
      : `idxz-${i}`;
  }

  render() {
    const {
      classname,
      hideHeader,
      vAlign,
      onRowClick,
      compact,
      columns,
      textSize,
      data,
      rowComponent,
      stripped,
      stickyHeader,
      emptyContent,
      isMobile,
      dataKeyAttr,
      ...props
    } = this.props;

    const Row = rowComponent || TableRow;

    const className = `mrc--table v-${vAlign} ${
      (stripped && "stripped") || ""
    } ${(stickyHeader && "sticky-header") || ""} ${
      (compact && "compact") || ""
    } ${classname}`;

    return (
      <div className={className} {...props}>
        {!hideHeader && (
          <TableRow
            isMobile={isMobile}
            isHeader
            columns={columns}
            key="header"
          />
        )}
        {data
          .filter((e, i) => {
            return Object.getOwnPropertyNames(e).length !== 0;
          })
          .map((e, i) => (
            <Row
              isMobile={isMobile}
              key={this.getkey(e, i)}
              columns={columns}
              textSize={textSize}
              onClick={onRowClick}
              data={e}
            />
          ))}
      </div>
    );
  }
}

Table.propTypes = {
  classname: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  rowComponent: PropTypes.func,
  onRowClick: PropTypes.func,
  stripped: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  hideHeader: PropTypes.bool,
  compact: PropTypes.bool,
  emptyContent: PropTypes.element,
  textSize: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
  vAlign: PropTypes.oneOf(["top", "center", "bottom"]),
  isMobile: PropTypes.bool,
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

Table.defaultProps = {
  classname: "",
  columns: [],
  data: [],
  rowComponent: null,
  stripped: true,
  stickyHeader: false,
  compact: false,
  emptyContent: null,
  hideHeader: false,
  textSize: "md",
  onRowClick: null,
  vAlign: "center",
  isMobile: false,
};

export { Table };

import React, { useState, useEffect, useCallback } from "react";

type PaginationProps = {
  totalItems?: number;
  pageLimit?: number;
  pageNeighbours?: number;
  onPageChanged?: (data: any) => void;
};

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

function Pagination(props: PaginationProps) {
  const {
    totalItems = 0,
    pageLimit = 30,
    pageNeighbours: neighbours = 0,
    onPageChanged,
  } = props;
  const [pageNeighbours, setPageNeighbours] = useState<number>(
    neighbours ? Math.max(0, Math.min(neighbours, 2)) : 0
  );
  const totalPages = Math.ceil(totalItems / pageLimit);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const gotoPage = useCallback(
    (page: number) => {
      const updatedCurrentPage = Math.max(0, Math.min(page, totalPages));
      const paginationData = {
        currentPage: updatedCurrentPage,
        totalPages,
        pageLimit,
      };
      setCurrentPage(updatedCurrentPage);
      console.log("goto ", updatedCurrentPage, paginationData);
      onPageChanged && onPageChanged(paginationData);
    },
    [totalItems, currentPage]
  );

  useEffect(() => {
    if (totalItems) gotoPage(1);
  }, [totalItems]);

  function fetchPageNumbers() {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage) as any;

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }

  const handleClick = (page: number) => (evt: any) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  console.log("totalItems", totalItems);
  console.log("totalPages", totalPages);

  if (!totalItems || totalPages === 1) {
    return null;
  }

  const pages = fetchPageNumbers();

  return (
    <div className="w-full flex justify-center h-14 text-darkblue">
      <nav
        aria-label="Pagination"
        className="border-pagination border-2 rounded flex justify-center items-center"
        style={{ maxWidth: "570px", minWidth: "570px" }}
      >
        <ul className="flex">
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className="px-2">
                  <a href="#" aria-label="Previous" onClick={handleMoveLeft}>
                    <div aria-hidden="true" style={{ lineHeight: "20px" }}>
                      &laquo;
                    </div>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className="px-2">
                  <a href="#" aria-label="Next" onClick={handleMoveRight}>
                    <div aria-hidden="true" style={{ lineHeight: "20px" }}>
                      &raquo;
                    </div>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              );

            return (
              <li
                key={index}
                className={`${
                  currentPage === page ? "transform scale-150" : ""
                } px-2`}
              >
                <a href="#" onClick={handleClick(page)}>
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export { Pagination };

// consumer

// function onPageChanged(data: any) {
//   const { currentPage, totalPages, pageLimit } = data;
//   const offset = (currentPage - 1) * pageLimit;
//   const currentBlogs = blogList.slice(offset, offset + pageLimit);

//   // axios
//   //   .get(`/api/blogs?page=${currentPage}&limit=${pageLimit}`)
//   //   .then((response: any) => {
//   //     const currentBlogs = response.data.countries;
//   //     setCurrentPage(currentPage);
//   //     setCurrentBlogs(currentBlogs);
//   //     setTotalPages(totalPages);
//   //   });
//   setCurrentPage(currentPage);
//   setCurrentBlogs(currentBlogs);
//   setTotalPages(totalPages);
// }

// return
{/* <Pagination
  totalItems={totalItems}
  pageLimit={6}
  pageNeighbours={1}
  onPageChanged={onPageChanged}
/>; */}
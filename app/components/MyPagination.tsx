import "./Pagination.css";
import Link from "next/link";
import React from "react";
interface PaginationProps {
  currentPage: number;
  maxPage: number;
}
export default function Pagination({ currentPage, maxPage }: PaginationProps) {
  return (
    <div className="pagination__container">
      <Link
        className={currentPage <= 1 ? "btn-disabled" : ""}
        href={`/${currentPage - 1}`}
      >
        &lt;
      </Link>
      <div className="pagination__pages">
        {currentPage > 2 && <Link href="/1">1</Link>}

        {currentPage >= 4 && <p>...</p>}
        {currentPage >= 2 && (
          <Link href={`/${currentPage - 1}`}>{currentPage - 1}</Link>
        )}
        <Link id="page-current" href={`/${currentPage}`}>
          {currentPage}
        </Link>
        {currentPage < maxPage && (
          <Link href={`/${currentPage + 1}`}>{currentPage + 1}</Link>
        )}
        {currentPage <= maxPage - 3 && <p>...</p>}
        {currentPage < maxPage - 1 && (
          <Link href={`/${maxPage}`}>{maxPage}</Link>
        )}
      </div>
      <Link
        className={currentPage >= maxPage ? "btn-disabled" : ""}
        href={`/${currentPage + 1}`}
      >
        &gt;
      </Link>
    </div>
  );
}

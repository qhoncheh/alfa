'use client';
import { useState } from "react";
import Pagination from "../pagination";


interface PaginationWrapperProps {
  totalPages: number;
  initialPage?: number;
}

const PaginationWrapper = ({ totalPages, initialPage = 1 }: PaginationWrapperProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};

export default PaginationWrapper;

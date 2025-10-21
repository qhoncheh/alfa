// components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number; // صفحه فعلی
  totalPages: number; // تعداد کل صفحات
  onPageChange: (page: number) => void; // تابع برای تغییر صفحه
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // تولید آرایه شماره صفحات برای نمایش
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // حداکثر تعداد دکمه‌های صفحه برای نمایش
    const sidePages = Math.floor(maxPagesToShow / 2); // تعداد صفحات در هر طرف صفحه فعلی

    let startPage = Math.max(1, currentPage - sidePages);
    let endPage = Math.min(totalPages, currentPage + sidePages);

    // تنظیم startPage و endPage برای اطمینان از نمایش تعداد ثابت دکمه‌ها
    if (endPage - startPage + 1 < maxPagesToShow) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      } else {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 my-4">
      {/* دکمه صفحه قبل */}
      <button
        className="btn btn-outline btn-sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        قبلی
      </button>

      {/* دکمه‌های شماره صفحات */}
      {pages.map((page) => (
        <button
          key={page}
          className={`btn btn-sm ${currentPage === page ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* دکمه صفحه بعد */}
      <button
        className="btn btn-outline btn-sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
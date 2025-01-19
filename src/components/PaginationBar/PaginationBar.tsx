import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, selectItemsPerPage } from "../../redux/events/selectors";
import { setPage } from "../../redux/events/slice";

import css from "./PaginationBar.module.css";

interface PaginationBarProps {
  totalItems: number;
}

export default function PaginationBar({ totalItems }: PaginationBarProps) {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className={css.paginationBar}>
      <button className={css.prevBtn} disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        Prev
      </button>
      <button
        className={css.nextButton}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

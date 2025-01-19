import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filters/slice";
import { selectSearchQuery } from "../../redux/filters/selectors";

import css from "./FilterBar.module.css";

export default function FilterBar() {
  const dispatch = useDispatch();
  const filters = useSelector(selectSearchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    dispatch(setStatusFilter(updatedFilters));
  };

  return (
    <div className={css.container}>
      <div className={css.inputGroup}>
        <label htmlFor="title" className={css.label}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={filters.title}
          onChange={handleChange}
          placeholder="Search by title"
          className={css.input}
        />
      </div>
      <div className={css.inputGroup}>
        <label htmlFor="date" className={css.label}>
          Date:
        </label>
        <input type="date" id="date" name="date" value={filters.date} onChange={handleChange} className={css.input} />
      </div>
      <div className={css.inputGroup}>
        <label htmlFor="category" className={css.label}>
          Category:
        </label>
        <select id="category" name="category" value={filters.category} onChange={handleChange} className={css.select}>
          <option value="">All Categories</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Education">Education</option>
        </select>
      </div>
    </div>
  );
}

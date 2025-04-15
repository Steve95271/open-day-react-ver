import React from "react";

const TimeFilter = ({ filter, onFilterChange }) => {
  return (
    <section className="time-filter selector">
      <label htmlFor="time-filter-select">Filter programs by time:</label>
      <select
        id="time-filter-select"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
      </select>
    </section>
  );
};

export default TimeFilter;

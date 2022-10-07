import React from 'react';

function FilterForm(filter) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="filter">Filter:</label>
        <input
          onChange={filter.handleInputChange}
          value={filter.value}
          name="filter"
          type="text"
          className="form-control"
          placeholder="Filter out the Junk"
          id="filter"
        />
        <br />
        <button
          onClick={filter.handleFormSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Filter
        </button>
      </div>
    </form>
  );
}

export default FilterForm;

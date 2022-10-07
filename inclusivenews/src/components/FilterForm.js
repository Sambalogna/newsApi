import React from 'react';

function FilterForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exclude">Exclude:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="exclude"
          type="text"
          className="form-control"
          placeholder="Filter your search"
          id="exclude"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
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

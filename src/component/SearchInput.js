import { useState } from "react";

function SearchInput(props) {
  const [search, setSearch] = useState('');
  
  function handleInputChange(e) { 
    const value = e.target.value;
    setSearch(value);
    props.search(value);
  }

  return (
    <div className="input-group mb-3">
      <i className="btn btn-outline-secondary bi-search" type="text"></i>
      <input
        value={search}
        onChange={handleInputChange}
        type="text"
        className="form-control"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchInput;

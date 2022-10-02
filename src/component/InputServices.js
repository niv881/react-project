import { useState } from "react";
function InputServices(props) {
  const [name, setName] = useState("");
  const [Status, setStatus] = useState("active"); 
  const [error, setError] = useState("");
  function handleBtnClick(e) {
    e.preventDefault();
    console.log(name);
    if ( !name.length || name === "Choose Service...") {
      setError("this is not Valid!")
      return
    }

    props.addServices({
      name: name,
      Status: Status,
    });
  }

  return (
    <form className="d-flex container mt-2">
      <i className="align-items-center m-2 "> Service Name : </i>

      <select
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (error) setError('')
        }}
        className="form-select me-2 w-25"
      >
        <option>Choose Service...</option>
        <option>Mailing List</option>
        <option>WhatsApp Group Notifications</option>
        <option>Facebook Group</option>
        <option>instegram Group</option>
      </select>

      <i className="align-items-center m-2 "> Status : </i>

      <select
        value={Status}
        onChange={(e) => setStatus(e.target.value)}
        className="form-select me-2 w-25"
      >
        <option>active</option>
        <option>expired</option>
        <option>banned</option>
      </select>

      <button
        onClick={(e) => handleBtnClick(e)}
        className="btn btn-outline-success"
        type="submit"
      >
        Add
      </button>

     {error && <i className="text-danger" > * { error}</i>}
      
    </form>
  );
}

export default InputServices;

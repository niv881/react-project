import Status from "./Status";

function ServicesTable(props) {
  function handleDelete(data){
    props.DeletedServices(data)
  }
  return (
    <table className="table container">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.add.map((data) =>  
          <tr key={data.id} className ="bg-light">
            <td >{data.name}</td>
            <td><Status Status = {data.Status}/> </td>
            <td> <button onClick={() => handleDelete(data)} className="btn btn-default">  <i className="bi-trash3"></i> </button></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ServicesTable;

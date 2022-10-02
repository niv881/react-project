function Card(props) {
  return (

    props.data.map(data =>
    <div key={data.id} className="card shadow m-4">
      <img src={data.imgUrl} className="card-img-top" alt={data.name} />
      <p className="card-text">{data.category}</p>
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
        <div className="d-flex justify-content-between">
          <p className="card-text">{data.price} $</p>
          <p className="card-text ms-2">
            Rating : {data.rating} <i className="bi bi-star"></i>
          </p>
        </div>
        <button className="btn btn-primary">Order Now</button>
      </div>
    </div>
    )
  );
}

export default Card;

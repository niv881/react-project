function Promo(props) {
    return (
        <div className="text-center text-light bg-dark p-4">
            <h1>{props.mainTxt}</h1>
            <h5>{props.subTxt}</h5>

        </div>
    );
}

export default Promo;
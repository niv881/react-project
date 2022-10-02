import Header from "./Header";
import Promo from "./Promo";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Header />
      <Promo
        mainTxt="About This App"
        subTxt="What makes BizAd the #1 app for adversting businesses"
      />
      <div className="d-flex justify-content-center flex-column mt-5">
        <h5 className="text-center opacity-50">
          Everyday many business owners choose to use our app to <br />{" "}
          advertise their business and to gain more traction to their <br />{" "}
          website and online store.
        </h5>
        <div className="text-center mt-3">
          <Link to="/">
            <button className="btn text-light bg-primary w-0">
              start now !
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;

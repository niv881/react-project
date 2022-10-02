import Header from "./Header";
import Promo from "./Promo";
import { useState } from "react";
import InputServices from "./InputServices";
import ServicesTable from "./ServicesTable";
import WarningMsg from "./WarningMsg";

function Services(props) {
  const [businessData, setBusinessData] = useState([]);
  function addServices(add) {
    add.id = Math.random() + "";

    const updated = [...businessData, add];
    setBusinessData(updated);
  }

  function DeletedServices(Delete) {
    const updated = businessData.filter(
      DeleteS => DeleteS.id !== Delete.id );
    setBusinessData(updated);
  }

  return (
    <>
      <Header />
      <Promo
        mainTxt="Services"
        subTxt="Choose services that you would like to get from BizAd"
      />

      <InputServices
        addServices={addServices}
      />
      {businessData.length === 0 && <WarningMsg />}
      <ServicesTable add={businessData} DeletedServices={DeletedServices} />
    </>
  );
}

export default Services;

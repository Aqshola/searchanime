import React from "react";
import CardCom from "./card";

const CardList = ({ loading, info, data, click }) => {
  try {
    if (loading) {
      return <h2 className="mx-auto">Loading...</h2>;
    }
    return (
      <div className="data-content mx-auto ">
        {data.map((el, i) => {
          return <CardCom key={i} info={info} data={data[i]} />;
        })}
      </div>
    );
  } catch (err) {
    console.log(err);
    return <h1 className="err-msg">not found</h1>;
  }
};
export default CardList;

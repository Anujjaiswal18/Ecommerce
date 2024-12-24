import Filter from "../filtered-bar/Filter";
import Cards from "../Cards/Cards";
import AllCartsApi from "./AllCartsApi";
import { useState } from "react";
const All = () => {
  const [data, setData] = useState(AllCartsApi);
  const [updatedData, setUpdatedData] = useState(data);
  return (
    <div style={{ display: "flex" }}>
      <Filter setData={setData} data={data} setUpdatedData={setUpdatedData} />
      <div className="All-main">
        {updatedData.map((cur) => {
          return <Cards key={cur.id} cur={cur} />;
        })}
      </div>
    </div>
  );
};

export default All;

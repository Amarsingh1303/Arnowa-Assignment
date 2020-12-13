import React from "react";
import PieChart from "./PieChart";

function PieContainer() {
  return (
    <div>
      <PieChart
        label={["mumbai", "patna", "kanpur"]}
        dataArray={[2000, 1800, 1850]}
        title="For Male"
      />
      <PieChart
        label={["mumbai", "patna", "kanpur"]}
        dataArray={[2200, 1500, 1700]}
        title="For Female"
      />
      <PieChart
        label={["mumbai", "patna", "kanpur"]}
        dataArray={[4200, 2300, 3550]}
        title="Total Male and Female"
      />
    </div>
  );
}

export default PieContainer;

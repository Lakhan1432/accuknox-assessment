import React from "react";
import DoughnutChart from "./ActiveShapePieChart";
import { BsBarChart } from "react-icons/bs";
import DoughnutChart2 from "./DoughnutChart2";


const Widget = ({ widget, category, removeWidget }) => {
  return (
    <div className="widget">
      <div className="card px-3 py-2 rounded-4 h-100">
        <h3 className="fs-6 fw-bold">{widget.name}</h3>
        {widget.name === "Cloud Accounts" && <DoughnutChart />}
        {widget.name === "Cloud Account Risk Assessment" && <DoughnutChart2 />}
        {widget.text && (
          <div className="d-flex justify-content-center align-items-center h-100 flex-column py-4">
            <BsBarChart className="fs-1 text-black-50 mt-4" />
            <p className="text-black-50 fs-6 mb-4">No Graph data available!</p>
          </div>
        )}
        {/* <button onClick={() => removeWidget(category, widget.id)} className="btn btn-primary">
          Remove
        </button> */}
      </div>
    </div>
  );
};

export default Widget;

import React from "react";
import Widget from "./Widget";
import DashboardHeader from "./DashboardHeader";
import EmptyWidget from "./EmptyWidget";

const Dashboard = ({
  data,
  removeWidget,
  openWidgetForm,
  setOpenWidgetForm,
}) => {
  return (
    <div className="mx-4 px-4 my-3">
      <DashboardHeader
        openWidgetForm={openWidgetForm}
        setOpenWidgetForm={setOpenWidgetForm}
      />
      {Object.entries(data.categories).map(([category, widgets]) => (
        <div key={category} className="my-2 w-100">
          <h2 className="fs-5 text-dark fw-bold">{category}</h2>
          <div className="d-flex gap-2 align-items-stretch justify-content-center">
            {widgets.map((widget) => (
              <Widget
                key={widget.id}
                widget={widget}
                category={category}
                removeWidget={removeWidget}
                className="align-self-stretch"
              />
            ))}
            <EmptyWidget
              className="align-self-stretch"
              openWidgetForm={openWidgetForm}
              setOpenWidgetForm={setOpenWidgetForm}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

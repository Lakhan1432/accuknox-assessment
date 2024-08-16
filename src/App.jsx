import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import AddWidgetForm from "./components/AddWidgetForm";
import dData from "./dashboardData.json";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [dashboardData, setDashboardData] = useState(dData);
  const [openWidgetForm, setOpenWidgetForm] = useState(false);

  const addWidget = (category, widget) => {
    setDashboardData((prevData) => ({
      ...prevData,
      categories: {
        ...prevData.categories,
        [category]: [...prevData.categories[category], widget],
      },
    }));
  };

  const removeWidget = (category, widgetId) => {
    setDashboardData((prevData) => ({
      ...prevData,
      categories: {
        ...prevData.categories,
        [category]: prevData.categories[category].filter(
          (w) => w.id !== widgetId
        ),
      },
    }));
  };

  return (
    <div>
      <Navbar />
      <Dashboard
        data={dashboardData}
        removeWidget={removeWidget}
        openWidgetForm={openWidgetForm}
        setOpenWidgetForm={setOpenWidgetForm}
      />
      <AddWidgetForm
        categories={Object.keys(dashboardData.categories)}
        addWidget={addWidget}
        openWidgetForm={openWidgetForm}
        setOpenWidgetForm={setOpenWidgetForm}
      />
    </div>
  );
};

export default App;

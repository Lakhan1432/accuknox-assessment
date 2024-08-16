import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddWidgetForm = ({ categories, addWidget, openWidgetForm, setOpenWidgetForm }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = { id: Date.now(), name: widgetName, text: widgetText };
    addWidget(selectedCategory, newWidget);
    setWidgetName("");
    setWidgetText("");
  };

  return (
    openWidgetForm && (
      <div className="add-widget">
        <div className="header d-flex justify-content-between align-items-center p-2">
          <span className="fs-6 ">Add New Widget</span>
          <IoMdClose
            className="fs-5 cursor-pointer close-btn"
            onClick={() => {
              setOpenWidgetForm(false);
            }}
          />
        </div>
        <p className="text-secondary mt-3 mx-2 ">Personalize your dashboard by adding the following widget</p>
        <form onSubmit={handleSubmit} className="mx-2 w-50">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-control my-3"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="form-control my-3"
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            className="form-control my-3"
          />
          <button type="submit" className="btn btn-primary rounded-2">Add Widget</button>
        </form>
      </div>
    )
  );
};

export default AddWidgetForm;

import { FaPlus } from "react-icons/fa6";

const EmptyWidget = ({ openWidgetForm, setOpenWidgetForm }) => {
  return (
    <div className="widget">
      <div className="card px-2 py-2 d-flex align-items-center justify-content-center h-100 rounded-4">
        <button
          className="btn btn-outline-secondary d-flex flex-nowrap align-items-center justify-content-center fw-medium fs-6 btn-custom py-1"
          onClick={() => setOpenWidgetForm(true)}
        >
          <FaPlus />
          <span>&nbsp;&nbsp;Add Widget</span>
        </button>
      </div>
    </div>
  );
};

export default EmptyWidget;

import { FaPlus, FaClock } from "react-icons/fa6";
import { IoMdSync } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiLineVertical } from "react-icons/pi";

const DashboardHeader = ({ openWidgetForm, setOpenWidgetForm }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-block">
          <h1 className="fs-4 fw-bold text-dark">CNAPP Dashboard</h1>
        </div>
        <div className="d-flex gap-3">
          <button
            className="btn btn-outline-dark d-flex flex-nowrap align-items-center justify-content-center fw-medium fs-6 btn-custom py-1"
            onClick={() => setOpenWidgetForm(true)}
          >
            <span>Add Widget&nbsp;&nbsp;</span>
            <FaPlus />
          </button>
          <button className="btn btn-outline-dark d-flex flex-nowrap align-items-center justify-content-center fw-medium px-1 btn-custom py-1" onClick={()=>window.location.reload()}>
            <IoMdSync className="fs-4" />
          </button>
          <button className="btn btn-outline-dark d-flex flex-nowrap align-items-center justify-content-center fw-medium px-1 btn-custom py-1">
            <BsThreeDotsVertical className="fs-6" />
          </button>

          <div className="bg-white d-flex justify-content-center align-items-center px-2 fs-6 rounded-2 dropdown-custom">
            <FaClock className="fs-5" />
            <PiLineVertical className="fs-5" />
            <select
              class="form-select"
              aria-label="Default select example"
              className="bg-transparent border-0"
            >
              <option selected>Last 2 days</option>
              <option value="1">Last 7 days</option>
              <option value="2">Last 15 days</option>
              <option value="3">Last 28 days</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;

import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="navbar py-3">
        <div className="container-fluid px-4 py-0 ms-4">
          <a className="fs-6 text-muted fw-medium">Home {'>'} <span className="fw-bold header-text">Dashboard V2</span></a>
          <form className="w-25 d-flex bg-body-tertiary rounded-2 px-2 align-items-center gap-2 border border-primary-subtle border-2" role="search">
            <IoSearchOutline className="fs-6 text-muted"/>
            <input
              className="border-0 fs-6 bg-body-tertiary"
              type="search"
              placeholder='Search anything...'
              aria-label="Search"
            />
          </form>
          <div className="nav-icons d-flex justify-content-center align-items-center gap-2 me-4">
            <HiOutlineBellAlert className="fs-3 mx-4"/>
            <FaUserCircle className="fs-3"/>
            <span className="fw-bold fs-6 header-text">Lakhan Patil</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

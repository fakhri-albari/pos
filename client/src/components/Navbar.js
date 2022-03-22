const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-sm">
      <div className="navbar-container d-flex justify-content-between">
        <div className="div-header d-flex">
          <h6 className="my-auto">fakhri@gmail.com</h6>
        </div>
        <div className="div-header d-flex justify-content-center">
          <h2 className="fw-bold my-auto">POS</h2>
        </div>
        <div className="div-header d-flex justify-content-end">
          <div>
            <h6 className="d-inline me-3">19:00</h6>
            <button className="btn btn-outline-dark">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

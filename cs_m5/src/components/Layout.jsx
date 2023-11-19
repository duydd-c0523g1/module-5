function Layout() {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-light"
          style={{ padding: 20 }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                height="150px"
                src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ marginLeft: 60 }}
                  >
                    THE RESORT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ROOM &amp; SUITES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CULINARY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    MEETING &amp; EVENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SPA &amp; FITNESS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    RECREATION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WEDDING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SPECIAL OFFERS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    DESTINATION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    NEWS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <footer>
          <div className="container">
            <div className="row mt-4 align-items-end">
              <div className="col-lg-4">
                <img className="my-2" src="..." alt="" />
                <h5 className="">Khu du lịch nghỉ dưỡng Furama</h5>
                <p>
                  <i className="fa-solid fa-location-dot" /> Địa chỉ: Số 123,
                  Đường ABC, Thành phố XYZ
                </p>
                <p>
                  <i className="fa-solid fa-phone" /> Số điện thoại: 0123456789
                </p>
              </div>
              <div className="col-lg-3">
                <p className="title">Liên kết nhanh</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-solid fa-house" /> Trang chủ
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-solid fa-person-walking-luggage" /> Dịch
                      vụ
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-solid fa-person-shelter" /> Đặt phòng
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-solid fa-newspaper" /> Tin tức
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <p className="title">Mạng xã hội</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-brands fa-facebook" /> Facebook
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-brands fa-instagram" /> Instagram
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-brands fa-twitter" /> Twitter
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-brands fa-youtube" /> Youtube
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <p className="title">Chính sách</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-solid fa-shield-halved" /> Chính sách bảo
                      mật
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-solid fa-database" /> Chính sách dữ liệu
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-solid fa-file-signature" /> Điều khoản sử
                      dụng
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa-solid fa-question" /> Chính sách thông
                      tin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row text-center my-5">
              <p>© 2023 FURAMA RESORT. Tất cả các quyền đã được bảo lưu.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Layout
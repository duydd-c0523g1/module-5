import { useNavigate } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <nav
          className="navbar navbar-expand-lg bg-light"
          style={{
            padding: 20,
            position: "fixed",
            zIndex: 100,
            width: "100%",
            marginTop: 120,
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                height="100px"
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
                    style={{ marginLeft: 90 }}
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
      </div>
      {/* Carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        style={{ margin: "0 auto" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior_Courtyard-Night.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior_Courtyard.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Footer */}
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
                    <i className="fa-solid fa-person-walking-luggage" /> Dịch vụ
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
                    <i className="fa-solid fa-question" /> Chính sách thông tin
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
  );
}
export default Layout;

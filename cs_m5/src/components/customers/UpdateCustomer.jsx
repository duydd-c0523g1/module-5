function UpdateCustomer() {
  return (
    <div
      className="container"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Sửa thông tin khách hàng</h1>
      <br />
      <div className="form-control">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="service"
                placeholder="Tên khách hàng"
                defaultValue="Villa 01"
              />
              <label htmlFor="service">Họ và tên</label>
            </div>
            <div className="form-floating">
              <input
                type="date"
                className="form-control"
                id="category"
                placeholder="Ngày sinh"
                defaultValue="1999-02-01"
              />
              <label htmlFor="category">Ngày sinh</label>
            </div>
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="category"
                placeholder="Số điện thoại"
                defaultValue={123456789}
              />
              <label htmlFor="category">Số điện thoại</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="category"
                placeholder="Loại dịch vụ"
                defaultValue="email@email.com"
              />
              <label htmlFor="category">Email</label>
            </div>
            <div className="col-lg-3 mt-3">
              <a
                className="btn btn-primary"
                href="#"
                role="button"
                style={{ width: "100%" }}
              >
                Cập nhật khách hàng
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateCustomer;

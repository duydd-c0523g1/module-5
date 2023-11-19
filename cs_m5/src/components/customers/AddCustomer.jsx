function AddCustomer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="service"
                placeholder="Tên dịch vụ"
              />
              <label htmlFor="service">Họ và tên</label>
            </div>
            <div className="form-floating">
              <input
                type="date"
                className="form-control"
                id="category"
                placeholder="Loại dịch vụ"
              />
              <label htmlFor="category">Ngày sinh</label>
            </div>
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="category"
                placeholder="Loại dịch vụ"
              />
              <label htmlFor="category">Số điện thoại</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="category"
                placeholder="Loại dịch vụ"
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
                Thêm khách hàng
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddCustomer
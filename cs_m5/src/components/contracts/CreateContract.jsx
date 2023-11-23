function CreateContract() {
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
      <h1 style={{ textAlign: "center" }}>Hợp đồng chi tiết</h1>
      <br />
      <div className="row">
        <div className="col-lg-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="service"
              placeholder="Tên dịch vụ"
            />
            <label htmlFor="service">Mã hợp đồng</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Loại dịch vụ"
            />
            <label htmlFor="category">Mã dịch vụ</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Loại dịch vụ"
            />
            <label htmlFor="category">Mã khách hàng</label>
          </div>
          <div className="col-lg-3 mt-3">
            <a
              className="btn btn-primary"
              href="#"
              role="button"
              style={{ width: "100%" }}
            >
              Tạo hợp đồng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateContract;

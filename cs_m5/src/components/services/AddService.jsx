function AddService() {
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
      <h1 style={{ textAlign: "center" }}>Thêm mới hợp đồng</h1>
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
            <label htmlFor="service">Tên dịch vụ</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Loại dịch vụ"
            />
            <label htmlFor="category">Loại dịch vụ</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Villa siêu xịn "
              id="description"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label htmlFor="description">Mô tả</label>
          </div>
          <div className="col-lg-12 mt-3">
            <a
              className="btn btn-primary"
              href="#"
              role="button"
              style={{ width: "20%", textAlign: "center" }}
            >
              Thêm dịch vụ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddService;

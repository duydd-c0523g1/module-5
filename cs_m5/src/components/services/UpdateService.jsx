function UpdateService() {
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
      <h1 style={{ textAlign: "center" }}>Sửa thông tin dịch vụ</h1>
      <br />
      <div className="row">
        <div className="col-lg-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="service"
              placeholder="Tên dịch vụ"
              defaultValue="Villa 01"
            />
            <label htmlFor="service">Tên dịch vụ</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Loại dịch vụ"
              defaultValue="Villa"
            />
            <label htmlFor="category">Loại dịch vụ</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Villa siêu xịn "
              id="description"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label htmlFor="description">Mô tả</label>
          </div>
          <div className="col-lg-3 mt-3">
            <a
              className="btn btn-primary"
              href="#"
              role="button"
              style={{ width: "100%" }}
            >
              Cập nhật dịch vụ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateService;

function AddService() {
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
              <label htmlFor="service">Tên dịch vụ</label>
            </div>
            <div className="form-floating">
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
            <div className="col-lg-3 mt-3">
              <a
                className="btn btn-primary"
                href="#"
                role="button"
                style={{ width: "100%" }}
              >
                Thêm dịch vụ
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddService
function ContractList() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Danh sách hợp đồng</h1>
      <br />
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>STT</th>
              <th>Mã hợp đồng</th>
              <th>Mã khách hàng</th>
              <th>Mã dịch vụ</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="table-primary">
              <td scope="row">1</td>
              <td>HD-0001</td>
              <td>KH-0001</td>
              <td>VL-0004</td>
              <td colSpan={2}>
                <button className="btn btn-warning">Cập nhật</button>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr>
            <tr className="table-primary">
              <td scope="row">2</td>
              <td>HD-0002</td>
              <td>KH-0003</td>
              <td>HO-0001</td>
              <td colSpan={2}>
                <button className="btn btn-warning">Cập nhật</button>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr>
            <tr className="table-primary">
              <td scope="row">3</td>
              <td>HD-0003</td>
              <td>KH-0004</td>
              <td>RO-0002</td>
              <td colSpan={2}>
                <button className="btn btn-warning">Cập nhật</button>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr>
          </tbody>
          <tfoot />
        </table>
      </div>
    </>
  );
}
export default ContractList;

function ContractList() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>STT</th>
              <th>Mã hợp đồng</th>
              <th>Mã khách hàng</th>
              <th>Mã dịch vụ</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="table-primary">
              <td scope="row">1</td>
              <td>HD-0001</td>
              <td>KH-0001</td>
              <td>VL-0004</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">2</td>
              <td>HD-0002</td>
              <td>KH-0003</td>
              <td>HO-0001</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">3</td>
              <td>HD-0003</td>
              <td>KH-0004</td>
              <td>RO-0002</td>
            </tr>
          </tbody>
          <tfoot />
        </table>
      </div>
    </>
  );
}
export default ContractList;

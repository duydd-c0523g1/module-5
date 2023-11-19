function CustomerList() {
  return (
    <>
      <div className="table-responsive">
        <table
          className="table table-striped
  table-hover	
  align-middle"
        >
          <thead className="table-light">
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="table-primary">
              <td scope="row">1</td>
              <td>Khách hàng 1</td>
              <td>01/02/1999</td>
              <td>0123456789</td>
              <td>email@email.com</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">2</td>
              <td>Khách hàng 2</td>
              <td>01/02/1999</td>
              <td>0123456789</td>
              <td>email@email.com</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">3</td>
              <td>Khách hàng 2</td>
              <td>01/02/1999</td>
              <td>0123456789</td>
              <td>email@email.com</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">4</td>
              <td>Khách hàng 1</td>
              <td>01/02/1999</td>
              <td>0123456789</td>
              <td>email@email.com</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">5</td>
              <td>Khách hàng 1</td>
              <td>01/02/1999</td>
              <td>0123456789</td>
              <td>email@email.com</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">6</td>
              <td>Khách hàng 1</td>
              <td>01/02/1999</td>
              <td>0123456789</td>
              <td>email@email.com</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">7</td>
              <td>Khách hàng 1</td>
              <td>01/02/1999</td>
              <td>0123456789</td>
              <td>email@email.com</td>
            </tr>
            <tr className="table-primary">
              <td scope="row">8</td>
              <td>Khách hàng 1</td>
              <td>01/02/1999</td>
              <td>0123456789</td>
              <td>email@email.com</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}
export default CustomerList;

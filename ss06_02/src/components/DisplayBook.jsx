import { useEffect, useState } from "react";
import { deleteBook, getAll } from "../sẻvices/DbApi";
import { useNavigate } from "react-router-dom";

export default function DisplayBook() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [idDelete, setDeleteId] = useState(-1);
  const getBook = async () => {
    const reponse = await getAll();
    setBooks(reponse);
    console.log(reponse);
  };
  const handleDelete = async () => {
    const reponse = await deleteBook(idDelete);
    setDeleteId(-1);
  };

  useEffect(() => {
    getBook();
  }, [idDelete]);

  return (
    <>
      <h2>Books Manage</h2>
      <button onClick={() => navigate("/create")}>Add</button>
      <table>
        <thead>
          <th>No.</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Action</th>
        </thead>
        <tbody>
          {books.map((e, index) => {
            return (
              <tr key={e.id}>
                <td>{index + 1}</td>
                <td>{e.title}</td>
                <td>{e.quantity}</td>
                <td>
                  <button onClick={handleDelete}>delete</button>
                  <button onClick={() => navigate("/edit/book/" + e.id)}>
                    edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

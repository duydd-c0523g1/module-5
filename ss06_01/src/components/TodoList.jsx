import { useState, useEffect } from "react";
import axios from "axios";

export default function TodoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setList(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        return undefined;
      }
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          userId: 1,
          id: 2,
          title: input,
          completed: false,
        }
      );
      setList([response.data, ...list]);
      setInput("");
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
        {list.map((e, index) => {
          return (
            <tr key={e.id}>
              <td>{index + 1}</td>
              <td>{e.completed ? "Completed" : "Incompleted"}</td>
              <td>{e.title}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </>
  );
}

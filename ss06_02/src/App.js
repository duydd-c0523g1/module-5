import { Route, Routes } from "react-router-dom";
import DisplayBook from "./components/DisplayBook";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DisplayBook />} />
        <Route path="/create" element={<AddBook />} />
        <Route path="/edit/book/:id" element={<EditBook />} />
      </Routes>
    </>
  );
}

export default App;

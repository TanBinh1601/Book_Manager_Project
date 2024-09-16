import "./App.css";
import SearchPage from "./SearchPage";
import BookList from "./BookList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<BookList />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
    </Routes>
  );
}

export default App;

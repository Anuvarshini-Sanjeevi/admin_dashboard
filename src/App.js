import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import NewPage from "./pages/newPage/NewPage";
import SinglePage from "./pages/singlePage/SinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<SinglePage />} />
            <Route path="new" element={<NewPage />} />
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<SinglePage />} />
            <Route path="new" element={<NewPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

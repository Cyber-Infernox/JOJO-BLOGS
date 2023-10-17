import "./App.css";
import "./Style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SinglePost from "./Pages/SinglePost";
import Write from "./Pages/Write";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/write" element={<Write />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../Auth/Signup/Signup";
import Header from "../Header/Header";
import Home from "./Home";
import Login from "../Auth/Login/Login";
import Expense from "../Expense/Expense";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/expense" element={<Expense />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

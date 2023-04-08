import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/Auth/Signup/Signup";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Auth/Login/Login";
import Expense from "./component/Expense/Expense";

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

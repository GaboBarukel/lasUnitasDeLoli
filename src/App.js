// import classes from "./App.module.css";
import Main from "./Components/Main";
import AssignPage from "./Form/Calendar/Assign/AssignPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<AssignPage />} />
      </Routes>
    </Router>
  );
}

export default App;

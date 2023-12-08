import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home, History, Fof } from "../../pages/Index";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/history" element={<History />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

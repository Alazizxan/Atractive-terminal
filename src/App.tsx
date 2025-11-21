import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Terminal from "./pages/Terminal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </Router>
  );
}

export default App;

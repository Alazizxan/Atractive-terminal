import { Route, HashRouter as Router, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Terminal from "./pages/Terminal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
    </Router>
  );
}

export default App;

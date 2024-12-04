import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound/NotFound";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;

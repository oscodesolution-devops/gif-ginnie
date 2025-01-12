import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

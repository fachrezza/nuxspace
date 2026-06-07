import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/portfolio"
          element={<PortfolioPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
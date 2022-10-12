import "antd/dist/antd.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackPage from "./pages/FeedbackPage";
import ThankYouPage from "./pages/ThankYouPage";
import ViewDataPage from "./pages/ViewDataPage";

function App() {
  return (
    <div className="bg-light" style={{ margin: "1rem" }}>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<FeedbackPage />} />
            <Route path="/success" element={<ThankYouPage />} />
            <Route path="/view-data" element={<ViewDataPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

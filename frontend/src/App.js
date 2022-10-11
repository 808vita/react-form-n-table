import "antd/dist/antd.min.css";
import "./App.css";
import Header from "./components/Header";
import FeedbackPage from "./pages/FeedbackPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <div className="bg-light">
      <Header />
      <div>
        {/* <FeedbackPage /> */}
        <ThankYouPage />
      </div>
    </div>
  );
}

export default App;

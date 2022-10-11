import "antd/dist/antd.min.css";
import "./App.css";
import Header from "./components/Header";
import FeedbackPage from "./pages/FeedbackPage";
import ThankYouPage from "./pages/ThankYouPage";
import ViewDataPage from "./pages/ViewDataPage";

function App() {
  return (
    <div className="bg-light">
      <Header />
      <div>
        {/* <FeedbackPage /> */}
        {/* <ThankYouPage /> */}
        <ViewDataPage />
      </div>
    </div>
  );
}

export default App;

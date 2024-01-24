import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpalshScreen from "./components/card/splashScreen";
import WebPages from "./pages";

function App() {
  const [isReady, setIsReady] = useState(false);

  function onLoad() {
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
  }

  useEffect(() => {
    onLoad();
    AOS.init();
  }, []);
  return (
    <Router>
      {!isReady ? (
        <SpalshScreen />
      ) : (
        <Routes>
          <Route path="*" exact element={<WebPages />} />
        </Routes>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;

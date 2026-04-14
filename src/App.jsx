import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import ContentPage from "./ContentPage";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<ContentPage />} />
        <Route path="/category/:category/:id" element={<ContentPage />} />
      </Routes>
    </div>
  );
}

export default App;
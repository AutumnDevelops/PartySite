
import "./styles/media.css";
import "./styles/main.css";
import "./styles/book.css";

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Scenes/Home";
import Footer from "./Scenes/Footer";
import Contact from "./Scenes/Contact";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/PartySite" element={<Home />} />
      <Route path="/PartySite/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Modelled from "./pages/ModelledSpeech/Modelled";
import TextToNormal from "./pages/TextToNormal/TextToNormal";
import TextToSpeech from "./pages/TextToSpeech/TextToSpeech";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TextToSpeech />} />
          <Route path="/normal" element={<TextToNormal />} />
          <Route path="/modelled" element={<Modelled />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainProvider from "./contexts/MainContext";
import Home from "./routes/Home";
import CountryDetails from "./routes/CountryDetails";


function App() {

  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country_name" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainProvider from "./contexts/MainContext";
import Home from "./routes/Home";
import CountryDetails from "./routes/CountryDetails";
import MainTemplate from "./templates/MainTemplate";


function App() {

  return (
    <MainProvider>
      <BrowserRouter basename="/countries-api">
        <MainTemplate>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country_name" element={<CountryDetails />} />
          </Routes>
        </MainTemplate>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App

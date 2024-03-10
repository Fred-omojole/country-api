import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Field from "./components/hero";
import Countries from "./components/countries";

function App() {
  return (
    <Router>
      <Header />
      <Field />
      <Countries />
      {/* <Routes>
        <Route path="/" element={<Field />} />
        <Route path="/countries" element={<Countries />} />
      </Routes> */}
    </Router>
  );
}

export default App;

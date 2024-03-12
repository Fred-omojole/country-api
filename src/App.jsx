import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
// import Field from "./components/hero";
import Countries from "./components/countries";
import Country from "./components/country";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Countries />} />
        </Route>
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;

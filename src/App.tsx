import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { AnchorBtn } from "./components/anchorBtn";
import Documents from "./components/documents/Documents";
import { Contacts } from "./components/contancts";
import { About } from "./components/about";
import { Privacy } from "./components/privacy";
import "./styles/_globas.scss";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
      <AnchorBtn />
    </>
  );
}

export default App;

// src/router/Router.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

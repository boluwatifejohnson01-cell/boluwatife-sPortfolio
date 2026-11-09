import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMePage from "./pages/AboutMePage";
import RootLayout from "./layout/RootLayout";
import { Suspense } from "react";
import MySkillsPage from "./pages/MySkillsPage";
import MyProjectPage from "./pages/MyProjectPage";
import ContactPage from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/aboutme" element={<AboutMePage />} />
              <Route path="/myskills" element={<MySkillsPage />} />
              <Route path="/myprojects" element={<MyProjectPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

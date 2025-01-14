import './App.css'
import {Route, Routes} from "react-router-dom";
import DashboardPage from "./page/DashboardPage.tsx"
import NavBar from "./compontent/NavBar.tsx";
import DetailPage from "./page/DetailPage.tsx";
import OpenPage from "./page/OpenPage.tsx";
import DoingPage from "./page/DoingPage.tsx";
import DonePage from "./page/DonePage.tsx";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path={"/"} element={<DashboardPage />} />
          <Route path={"/todo/:id"} element={<DetailPage />} />
          <Route path={"/open"} element={<OpenPage/>} />
          <Route path={"/doing"} element={<DoingPage/>} />
          <Route path={"/done"} element={<DonePage/>} />
      </Routes>
    </>
  )
}

export default App

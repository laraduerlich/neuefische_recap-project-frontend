import './App.css'
import {Route, Routes} from "react-router-dom";
import DashboardPage from "./page/DashboardPage.tsx"
import NavBar from "./compontent/NavBar.tsx";
import DetailPage from "./page/DetailPage.tsx";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path={"/"} element={<DashboardPage />} />
          <Route path={"/todo/:id"} element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App

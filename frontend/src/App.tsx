import './App.css'
import {Route, Routes} from "react-router-dom";
import DashboardPage from "./page/DashboardPage.tsx"
import NavBar from "./compontent/NavBar.tsx";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<DashboardPage />} />
      </Routes>

    </>
  )
}

export default App

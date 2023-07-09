import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'
import SignUp from "./views/SignUp";
import './styles/app.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/SignUp" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

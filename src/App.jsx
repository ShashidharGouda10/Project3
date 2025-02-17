import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Tables from "./pages/Tables"
import Billing from "./pages/Billing"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Dashboard/>}></Route>
       <Route path="/tables" exact element={<Tables/>}></Route>
       <Route path="/billing" exact element={<Billing/>} ></Route>
       <Route path="/profile" exact element={<Profile/>}></Route>
       <Route path="/signup" exact element={<SignUp/>}></Route> 
       <Route path="/signin" exact element={<SignIn/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

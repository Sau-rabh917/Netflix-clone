import Landingpage from "./pages/landingpage"
import { Routes,Route } from "react-router-dom"
import Signin from "./pages/signin"

const App = () => {
  return (
   <>

   <Routes>
    <Route path="/" element={<Landingpage />} />
      <Route path="/signin" element={<Signin />} />
    </Routes> 
   </>
  )
}

export default App

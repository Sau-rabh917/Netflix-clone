import { Router,route } from "react-router-dom"
import SignIn from "./pages/signin"

const App = () => {
  return (
    <div>
      <Router>
        <route path="/signin" element={<SignIn/>} />
      </Router>
    </div>
  )
}

export default App

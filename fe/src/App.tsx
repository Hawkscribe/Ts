import { BrowserRouter,Routes,Route } from "react-router-dom";
import { DashBoard } from "./pages/Allpages";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";
import { ShareBrain } from "./components/ShareBrain";

function App(){

  return <div>
<BrowserRouter>
<Routes>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/signin" element={<SignIn/>}/>
  <Route path="/dashboard" element={<DashBoard/>}/>
  <Route path="/share/:shareId" element={<ShareBrain/>}/>
</Routes>
</BrowserRouter>      

        </div>
}


export default App;
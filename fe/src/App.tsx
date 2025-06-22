import { BrowserRouter,Routes,Route } from "react-router-dom";
import { DashBoard } from "./pages/Allpages";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";

function App(){

  return <div>
<BrowserRouter>
<Routes>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/signin" element={<SignIn/>}/>
  <Route path="/dashboard" element={<DashBoard/>}/>
</Routes>
</BrowserRouter>      

        </div>
}


export default App;
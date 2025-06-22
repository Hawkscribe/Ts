import { useRef } from "react";
import { Button } from "../components/button";
import { Input } from "../components/createContent";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
const navigate=useNavigate();
  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
try {
  await axios.post("http://localhost:8000/api/signup", {
      username,
      password
    });
        alert("You have signed Up");
navigate("/signin");
} catch (error) {
  alert("Something went wrong in the axios part");
  console.log(error);
}
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-2xl border shadow-lg min-w-[300px] p-6">
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">Create an Account</h2>
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button onClick={signup} variant="primary" text="Signup" />
        </div>
      </div>
    </div>
  );
}

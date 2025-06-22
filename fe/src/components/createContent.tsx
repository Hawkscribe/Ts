import { useRef, useState } from "react";
import { CrossIcon } from "../icon/CrossIcon";
import { Button } from "./button";
import axios from "axios";
import { BACKEND_URL } from "../config";
enum ContentType{
    Youtube="youtube",
    Twitter="twitter"
}

export  function CreateContent({ open, onClose }) {
const titleRef=useRef<HTMLInputElement>(null);
const linkRef=useRef<HTMLInputElement>(null);
 const [type,setType]=useState(ContentType.Youtube);   
async function addContent(){
const title=titleRef.current?.value;
const link=linkRef.current?.value;

try {
    
    await axios.post(`${BACKEND_URL}/api/content`,{
        link,
        title,
        type
    },{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
    })
    alert("The contents have been created");
onClose();

} catch (error) {
    alert("Authetication error!!!");
}
}
    return (
        <div>
            {open && <div className="w-screen h-screen bg-red-200/60 fixed top-0 left-0  flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded">
                        <div className=" flex justify-end">
                          <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input ref={titleRef} placeholder={"Tittle"} />
                            <Input ref={linkRef} placeholder={"Link"} />
                        </div>
                        <div className="pt-2 py-2 p-4">
                            <h1 className="text-purple-800"> Type:</h1>
                           <div className="py-2"> <Button text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>{
                                setType(ContentType.Youtube)
                            }}></Button>
                            </div>
                           <div className="py-2"> <Button text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>{
                                setType(ContentType.Twitter);
                            }}></Button>
                            </div>
                        </div>
                     <div className="flex justify-center"> 
                         <Button onClick={addContent}variant="primary" text="Submit" /></div>
                    </span>
                </div>
            </div>}
        </div>
    )

}
interface InputProps{
    placeholder:string;
    ref?:any
}

export function Input({ ref, placeholder }: InputProps) {
    return (
        <div>
            <input ref={ref} placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2" ></input>
        </div>
    )
}
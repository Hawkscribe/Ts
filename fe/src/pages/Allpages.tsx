import { useState } from "react";
import { Button } from "../components/button";
import { Card } from "../components/Card";
import { CreateContent } from "../components/createContent";
import { PlusIcon } from "../icon/plusIcon";
import { ShareIcon } from "../icon/shareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

 export function DashBoard(){
      const [modalOpen, setModelOpen] = useState(false);
const content=useContent();

  return <div>
    <Sidebar/>
<div className="p-4 ml-72 min-h-screen bg-customOklch border-2 border-gray-100 ">
          <CreateContent open={modalOpen} onClose={()=>setModelOpen(false)}/>
        <div className="flex justify-end gap-4">
          <Button onClick={()=>{
            setModelOpen(true);
          }} variant="primary"text="Add content"startIcon={<PlusIcon/>}></Button>
          <Button onClick={async()=>{
            const response= await axios.post(`${BACKEND_URL}/api/brain/share`,{
              share:true
            });
            const shareUrl=`http://localhost:5173/share/${response.data.hash}`
          }}variant="secondary"text="ShareBrain"startIcon={<ShareIcon/>}></Button>
          </div>
        <div className="flex gap-4 p-4 flex-wrap">
          {/* {JSON.stringify(content)} */}
{content?.map(({ type, link, title }) => (
  <Card key={link} type={type} link={link} title={title} />
))}
      </div>
        </div>
        </div>
}



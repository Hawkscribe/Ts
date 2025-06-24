import { Logo } from "../icon/Brain";
import { Twitter } from "../icon/twitter";
import { YouTube } from "../icon/youtube";
import { SidebarItems } from "./SidebarItems";

 export function Sidebar(){
    
    return(
        <div className="h-screen bg-white border-1 w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-2xl py-4 items-center">
     <div className="pr-4 pl-3 text-purple-800">   <Logo/></div>
Brainly
      </div>
        <div className="pt-4">
          For:
            <SidebarItems text="Twitter" icon={<Twitter/>}/>
            <SidebarItems text="Youtube" icon={<YouTube/>}/>
            </div>    
        
        </div>
    )
 }
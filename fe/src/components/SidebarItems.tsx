import type { ReactElement } from "react";

export function SidebarItems({text,icon}:{
    text:string;
    icon:ReactElement;
}){

    return(
   <div className="flex text-gray-700 py-2 cursor-pointer hover:text-purple-800 bg-grey-200 rounded max-w-48 pl-4 transition-all duration-150">

<div className="pr-2">{icon}</div>
 <div className="pr-2">   {text}
    </div>
   </div>     
    )
}

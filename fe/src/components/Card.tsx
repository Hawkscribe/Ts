import { ShareIcon } from "../icon/shareIcon";

export function Card(){

    return(
      <div>
        <div className="p-4 bg-white rounded-md border-gray-100 max-w-72 border">
<div className="flex justify-between items-center">
<div className="flex">
<div className="text-gray-500 pr-4">
    <ShareIcon/>
</div>
Project Idea
</div>
<div className="flex">
<div className="pr-2 text-gray-500">
    <ShareIcon/>
</div>
<div className="text-gray-500">
    <ShareIcon/>
</div>
<div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0mA1aiOy62g?si=dT9xOdy3rQbSF8xj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
</div>
</div>
        </div>
      </div>
    )
}
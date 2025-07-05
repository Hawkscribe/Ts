import axios from "axios";
import { ChartIcon } from "../icon/ChartIcon";
import { DeleteIcon } from "../icon/Delete";
import { ShareIcon } from "../icon/shareIcon";
import { BACKEND_URL } from "../config";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  contentId?: string; 
}

export function Card({ title, link, type, contentId }: CardProps) {
  const onDelete = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/api/content`, {
        data: { contentId }, 
        headers: {
          Authorization: localStorage.getItem("token"), 
        },
      });

      alert("The block is being deleted");
      window.location.reload(); 
    } catch (error) {
      alert("There is an error in the delete block");
    }
  };

  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-100 max-w-72 border min-h-48 gap-4">
        <div className="flex justify-between">
          <div className="flex">
            <div className="text-gray-500 pr-4">
              <ChartIcon />
            </div>
            <span>{title}</span>
          </div>
          <div className="flex">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500 cursor-pointer" onClick={onDelete}>
              <DeleteIcon />
            </div>
          </div>
        </div>

        <div className="w-full mt-4">
          {type === "youtube" && (
            <iframe
              className="w-full h-40 rounded"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}>{link}</a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}

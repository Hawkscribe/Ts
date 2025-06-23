import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "../components/Card";

export function ShareBrain() {
  const { shareId } = useParams();
  const [data, setData] = useState<{
    username: string;
    content: {
      title: string;
      link: string;
      type: "youtube" | "twitter";
    }[];
  } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSharedBrain() {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/brain/${shareId}`);
        setData(response.data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch shared brain data.");
      }
    }

    if (shareId) {
      fetchSharedBrain();
    }
  }, [shareId]);

  if (error) return <div className="text-red-600 p-4">{error}</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Brain shared by: {data.username}</h2>
      <div className="flex flex-wrap gap-4">
        {data.content.map(({ title, link, type }, index) => (
          <Card key={index} title={title} link={link} type={type} />
        ))}
      </div>
    </div>
  );
}

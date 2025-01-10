import React, { useEffect, useState } from "react";
import { Notebook, CalendarDays } from "lucide-react";

export interface NoteSelectorProps {
  title: string;
  imagePath: string;
  date: string;
  id: string;
  isLeft: boolean;
}

const NoteSelector: React.FC<NoteSelectorProps> = ({
  title,
  imagePath,
  date,
  id,
  isLeft,
}) => {
  const [previewText, setPreviewText] = useState<string>("");

  // Fetch file content using the id
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/jason-xie-website/posts/${id}.md`);
        const text = await response.text();
        const preview = text.split(" ").slice(0, 25).join(" ") + "..."; // First 25 words
        setPreviewText(preview);
      } catch (error) {
        console.error("Failed to fetch the file content:", error);
        setPreviewText("Unable to load preview.");
      }
    };

    fetchContent();
  }, [id]);

  return (
    <div
      className="
        group 
        relative 
        w-full
        h-52
        mx-auto
        bg-gray-500
        bg-opacity-30
        flex flex-row
        rounded-md 
        overflow-hidden 
        shadow-md
      "
    >
      {/* Project Image */}
      {isLeft && (      
        <img
          src={imagePath}
          alt={title}
          className="w-96 h-full object-top object-cover"
        />
      )}

      {/* Basic Info (title + tech stack) shown always */}
      <div className="p-4 w-full justify-center items-center my-auto mx-5">
        <div className="flex items-center space-x-2 mt-2 mb-3 justify-center text-white font-semibold">
          <Notebook width={20}/><h2 className="text-lg">{title}</h2>
        </div>
        <div className="flex items-center space-x-2 mt-2 mb-3 justify-center text-gray-400">
        <CalendarDays width={20}/> <p className="text-sm ">{date}</p>
        </div>
        <p className="text-sm text-gray-300 mt-5 text-left">{previewText}</p> {/* Preview Text */}
      </div>

      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0 
          flex flex-row justify-center items-center
          bg-black bg-opacity-80
          px-6 py-4
          opacity-0 
          translate-x-2
          transition-all duration-300 ease-in-out
          group-hover:opacity-100 
          group-hover:translate-x-0
        "
      >
        <Notebook className="mr-3"/>
        <h2 className="text-white text-lg">Go to <span className="font-semibold">{title}</span></h2>
      </div>

      {!isLeft && (      
        <img
          src={imagePath}
          alt={title}
          className="w-96 h-full object-top object-cover"
        />
      )}
    </div>
  );
};

export default NoteSelector;

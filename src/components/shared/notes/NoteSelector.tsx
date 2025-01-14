import React, { useEffect, useState } from "react";

import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import { Notebook, CalendarDays } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import "@/components/shared/notes/note-styles.css";

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
  const [fullText, setFullText] = useState<string>("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/jason-xie-website/posts/${id}.md`);
        const text = await response.text();
        const preview = text.split(" ").slice(0, 18).join(" ") + "...";
        setPreviewText(preview);
        setFullText(text);
      } catch (error) {
        console.error("Failed to fetch the file content:", error);
        setPreviewText("Unable to load preview.");
      }
    };

    fetchContent();
  }, [id]);

  return (
    <Dialog>
      {/* Front-facing selector */}
      <DialogTrigger asChild>
        <div
          className="
            group 
            relative 
            w-11/12
            h-56
            mx-auto
            bg-zinc-900
            bg-opacity-80
            flex flex-row
            rounded-md 
            overflow-hidden 
            shadow-md
          "
        >
          {isLeft && (
            <img
              src={imagePath}
              alt={title}
              className="w-1/3 h-full object-top object-cover"
            />
          )}

          <div className="p-2 w-full justify-center items-center mx-5 my-auto">
            <div className="flex items-center space-x-2 mb-3 justify-center text-white font-semibold">
              <h2 className="text-lg">{title}</h2>
            </div>
            <div className="flex items-center space-x-2 mt-2 mb-3 justify-center text-gray-400">
              <CalendarDays width={20} /> <p className="text-sm">{date}</p>
            </div>
            <p className="text-sm text-gray-300 mt-5 text-left overflow-y-hidden">
              {previewText}
            </p>
          </div>

          <div
            className="
              absolute inset-0 
              flex flex-row justify-center items-center
              bg-black bg-opacity-80
              px-6 py-4
              opacity-0 
              translate-x-2
              cursor-pointer
              transition-all duration-300 ease-in-out
              group-hover:opacity-100 
              group-hover:translate-x-0
            "
          >
            <Notebook className="mr-3" />
            <h2 className="text-white text-lg">
              Go to <span className="font-semibold">{title}</span>
            </h2>
          </div>

          {!isLeft && (
            <img
              src={imagePath}
              alt={title}
              className="max-w-1/3 h-full object-top object-cover"
            />
          )}
        </div>
      </DialogTrigger>

      {/* Pop-up full-screen note */}
      <DialogContent className="bg-black min-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{date}</DialogDescription>
        </DialogHeader>
        <div className="flex">
          <div className="max-w-[20vw] justify-center my-auto mx-5">
              <img
                src={imagePath}
                alt={title}
                className="w-fit h-full object-top object-contain"
              />
          </div>
          <div className="max-h-[70vh] w-2/3 overflow-y-scroll px-10 py-5 bg-zinc-800 rounded-md mx-5">
            <Markdown remarkPlugins={[remarkBreaks, remarkGfm]}>{fullText}</Markdown>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoteSelector;

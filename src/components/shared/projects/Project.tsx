import React from "react";
import { Button } from "@/components/ui/button"

import {  
  Globe,
  Github,
  Video,
  Trophy,
} from "lucide-react"

export interface ProjectProps {
  title: string;
  date: string;
  description: string;
  hasAward: boolean;
  significance: string;
  awardLink: string;
  techStack: string;
  imagePath: string;
  liveLink: string;
  githubLink: string;
  videoPath: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  date=null,
  description=null,
  hasAward=false,
  significance=null,
  awardLink=null,
  techStack=null,
  imagePath,
  liveLink=null,
  githubLink=null,
  videoPath=null
}) => {
  return (
      <div
      className="
        group 
        relative 
        w-full
        max-w-sm 
        mx-auto
        bg-black
        bg-opacity-30
 
        rounded-md 
        overflow-hidden 
        shadow-md
      "
    >
      {/* Project Image */}
      <img
        src={imagePath}
        alt={title}
        className="w-full h-52 object-top object-cover"
      />

      {/* Basic Info (title + tech stack) shown always */}
      <div className="p-4">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-400 mt-1 mb-2">Stack: {techStack}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/*
        Hover Overlay:
        Placed absolutely on top; hidden by default, revealed on hover.
        We use `group-hover:opacity-100 group-hover:translate-y-0`
        to smoothly animate in when the parent (.group) is hovered.
      */}
      <div
        className="
          absolute inset-0 
          flex flex-col justify-center items-center
          bg-black bg-opacity-90
          px-6 py-4
          opacity-0 
          translate-y-2
          transition-all duration-300 ease-in-out
          group-hover:opacity-100 
          group-hover:translate-y-0
        "
      >

          {/* Additional Info: Award, Date, Description */}
        <h2 className="text-white text-lg font-semibold">{title}</h2>

        {significance && (
          <div className="flex items-center space-x-2 mt-2 mb-3 justify-center">
            
            {hasAward && <Trophy size={15}/>} 
            <a href={awardLink || undefined} target="_blank" rel="noreferrer">
            <p className={`text-xs text-gray-400 ${awardLink ? 'underline' : ''}`}>
              {significance}
            </p>
            </a>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-200 mb-5 mx-10">{description}</p>

        {/* Buttons */}
        <div className="flex space-x-3">
          {liveLink && (
            <a href={liveLink || undefined} target="_blank" rel="noreferrer">
              <Button>
                <Globe className="mx-3"/> Live
              </Button>
            </a>
          )}
          {githubLink && (
            <a href={githubLink || undefined} target="_blank" rel="noreferrer">
              <Button>
                <Github className="mx-3"/> Github
              </Button>
            </a>
          )}
          {videoPath && (
            <a href={videoPath || undefined} target="_blank" rel="noreferrer">
              <Button>
                <Video className="mx-3"/> Video
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

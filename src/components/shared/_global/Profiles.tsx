import React from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

interface ProfilesProps {
  isAbsolute: boolean;
}

const Profiles: React.FC<ProfilesProps> = ({
  isAbsolute = true
}) => {
  return (
    <div
      className={`
        ${isAbsolute ? 'absolute bottom-4 right-4' : ''}
        flex items-center space-x-4 
        bg-black/50 
        p-2 
        rounded-md 
        backdrop-blur-sm
      `}
    >
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jasonxiedev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/xjason321"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-orange-400 transition-colors"
      >
        <FaGithub size={24} />
      </a>

      {/* Discord */}
      <a
        href="https://discord.gg/your-discord-invite"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-colors"
      >
        <FaDiscord size={24} />
      </a>
    </div>
  );
};

export default Profiles;

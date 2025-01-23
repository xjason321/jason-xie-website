import { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- new import

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import BackgroundCircles from '@/components/shared/_global/BackgroundCircles';
import Profiles from '@/components/shared/_global/Profiles';
import Name from '@/components/shared/_global/Name';
import '@/_root/pages/Home.css';

import { Paperclip, MailboxIcon, Github, StopCircle } from 'lucide-react';
import Typewriter from '@/components/shared/_global/Typewriter';
import FooterRepo from '@/components/shared/_global/FooterRepo';

const Home = () => {
  const [hoveredItem, setHovered] = useState(' ');

  return (
    <div className="app relative min-h-screen flex flex-col justify-center items-center">
      {/* Our background of circles (z-[-1] ensures it stays behind the content) */}
      <BackgroundCircles hoveredItem={hoveredItem} />

      {/* Social Profiles (bottom right) */}
      <Profiles isAbsolute={true}/>

      <div className="w-4/6 pt-10 justify-center mx-auto bg-black bg-opacity-20 rounded-lg" style={{ backdropFilter: 'blur(5px)' }}>
        {/* Profile Image */}
        <img
          src="/jason-xie-website/assets/profile.png"
          className="w-auto h-24 rounded-full shadow-2xl shadow-gray-600 mx-auto"
        />

        {/* Name + Title */}
        <div className=" text-white flex flex-col justify-start px-4">
          <div id="name" className="w-4/6 py-8 mx-auto">
            <div className="md:flex justify-center items-center">
              <div className="w-auto">
                <Name />
              </div>
              <div className="w-auto sm:mt-1 md:mt-0">
                <p className="text-center md:pl-5 text-3xl text-slate-500">
                  software_developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Short Welcome */}
        <div className="w-2/3 justify-center mx-auto mb-5 text-pretty">
          <Typewriter text="A developer passionate about building real solutions that create real benefit for social good." delay={30}></Typewriter>
        </div>

        <div className="flex justify-center space-x-4">
        <a href="/jason-xie-website/assets/resume.pdf">
            <Button className="hover:text-blue-400 hover:overline transition-colors duration-500">
              <Paperclip className="mr-3" width={20}/> Resume
            </Button>
          </a>
          <a href="mailto:xjason321@gmail.com">
            <Button className="hover:text-orange-400 hover:overline transition-colors duration-500">
              <MailboxIcon className="mr-3" width={25}/> Email
            </Button>
          </a>
        </div>

        <Separator className="my-4" />

        {/* Navigation */}
        <nav className="flex items-center justify-center mx-auto text-lg w-4/6 mb-4">
          {/* Each nav item updates hoveredItem on hover */}
          <Link
            to="/projects"
            className="mx-2 nav-item transition-colors duration-500 px-3 py-4"
            onMouseEnter={() => setHovered('projects')}
            onMouseLeave={() => setHovered(' ')}
          >
            projects
          </Link>
          <span className="mx-3 text-gray-500">·</span>
          <Link
            to="/notes"
            className="mx-2 nav-item transition-colors duration-500 px-3 py-4"
            onMouseEnter={() => setHovered('notes')}
            onMouseLeave={() => setHovered(' ')}
          >
            notes
          </Link>
          <span className="mx-3 text-gray-500">·</span>
          <Link
            to="/about"
            className="mx-2 nav-item transition-colors duration-500 px-3 py-4"
            onMouseEnter={() => setHovered('about')}
            onMouseLeave={() => setHovered(' ')}
          >
            about
          </Link>
        </nav>

        {/* Descriptor (shows only when each item is hovered) */}
        <div className="flex flex-col items-center text-sm text-gray-400 space-y-5 mt-5 mb-12">
          {hoveredItem === "projects" && (
            <p>↵ a series of my “made-from-scratch” projects</p>
          )}
          {hoveredItem === "notes" && (
            <p>↵ a collection of my personal thoughts and devlogs</p>
          )}
          {hoveredItem === "about" && (
            <p>↵ a description of who i am, plus my education + contact info</p>
          )}
          {hoveredItem === " " && (
            <p className='text-black'>.</p>
          )}
        </div>

        <div>
          <FooterRepo />
        </div>
      </div>

    </div>
  );
};

export default Home;

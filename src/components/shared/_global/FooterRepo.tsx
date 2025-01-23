import React from 'react';
import { ArrowUpLeftFromSquareIcon, Github } from 'lucide-react';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const FooterRepo: React.FC = () => {
    return (
        <footer className="text-xs text-zinc-400 italic flex mx-auto w-full justify-center items-center">
            <p>made from scratch by jason xie</p>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="ml-3 bg-black hover:bg-zinc-800 p-1 rounded-xl transition-colors duration-300">
                            <a href="https://github.com/xjason321/jason-xie-website"><Github className='rounded-xl' width={16} height={16} /></a>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-black text-white text-xs mb-2 border-orange-500 flex items-center" >
                        <p>view source code</p> <ArrowUpLeftFromSquareIcon className="ml-2" width={16} height={16}/>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </footer>
    );
};

export default FooterRepo;
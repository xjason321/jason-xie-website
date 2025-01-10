import BackgroundCircles from '@/components/shared/_global/BackgroundCircles'; // <-- new import
import Profiles from '@/components/shared/_global/Profiles';
import RoutingPreview from '@/components/shared/_global/RoutingPreview';
import '@/_root/pages/Home.css';
import { Separator } from "@/components/ui/separator";
import ListOfProjects from '@/components/shared/projects/ListOfProjects';

const Projects = () => {
  return (
    <div className="app relative min-h-screen flex flex-col items-center">
      <BackgroundCircles hoveredItem={''} />

      <RoutingPreview path="projects"/>

      {/* Social Profiles (bottom right) */}
      <Profiles isAbsolute={true}/>

      <div className="w-4/6 py-10 justify-center mx-auto bg-black bg-opacity-50 rounded-lg">

        {/* Title + Headline */}
        <div className=" text-white flex flex-col justify-start px-4">
          <div id="name" className="w-4/6 py-10 mx-auto">
            <div className="justify-center items-center">
              <p className='text-3xl pb-10 overline'>projects</p>
              <p className="text-slate-400">real ideas. real solutions. real deployments.</p>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4 space-y-4 items-center justify-center mx-auto my-10">

        {/* Projects */}
        <ListOfProjects />

        </div>

        <Separator className="my-4" />

        {/* Title + Headline */}
        <div className=" text-white flex flex-col justify-start px-4">
          <div id="name" className="w-4/6 py-10 mx-auto">
            <div className="justify-center items-center">
              <p className='text-3xl pb-10'>other projects</p>
              <p className="text-slate-400">if you really want to see them...</p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Projects;

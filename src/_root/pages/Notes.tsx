import BackgroundCircles from '@/components/shared/_global/BackgroundCircles'; // <-- new import
import Profiles from '@/components/shared/_global/Profiles';
import RoutingPreview from '@/components/shared/_global/RoutingPreview';
import '@/_root/pages/Home.css';
import { Separator } from "@/components/ui/separator";
import ListOfNotes from '@/components/shared/notes/ListOfNotes';
import '@/_root/pages/Home.css';

const Notes = () => {
  return (
    <div className="app relative min-h-screen flex flex-col items-center">
      <BackgroundCircles hoveredItem={''} />

      <RoutingPreview path="notes"/>

      {/* Social Profiles (bottom right) */}
      <Profiles isAbsolute={true}/>

      <div className="w-4/6 py-10 justify-center mx-auto bg-black bg-opacity-50 rounded-lg">

        {/* Title + Headline */}
        <div className=" text-white flex flex-col justify-start px-4">
          <div id="name" className="w-4/6 py-10 mx-auto">
            <div className="justify-center items-center">
              <p className='text-3xl pb-10 overline'>notes</p>
              <p className="text-slate-400">experiments that don't become projects. thoughts that evolve into posts.</p>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 gap-8 items-center justify-center mx-auto my-10">

        {/* Notes */}
        <ListOfNotes />

        </div>

        <Separator className="my-4" />
      </div>
      
    </div>
  );
};

export default Notes;

import BackgroundCircles from '@/components/shared/_global/BackgroundCircles'; // <-- new import
import Profiles from '@/components/shared/_global/Profiles';
import RoutingPreview from '@/components/shared/_global/RoutingPreview';
import '@/_root/pages/Home.css';
import { Separator } from "@/components/ui/separator";

import Biography from '@/components/shared/about/Biography';
import PhotoSlider from '@/components/shared/about/PhotoSlider';

const About = () => {
  return (
    <div className="app relative min-h-screen flex flex-col items-center">
      <BackgroundCircles hoveredItem={''} />

      <RoutingPreview path="about"/>

      {/* Social Profiles (bottom right) */}
      <Profiles isAbsolute={true}/>

      <div className="w-4/6 py-10 justify-center mx-auto bg-black bg-opacity-50 rounded-lg">

        {/* Title + Headline */}
        <div className=" text-white flex flex-col justify-start px-4">
          <div id="name" className="w-4/6 py-10 mx-auto">
            <div className="justify-center items-center">
              <p className='text-3xl pb-10 overline'>about</p>
              <p className="text-slate-400">its a bit weird to write about oneself i must say</p>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Biography and PhotoSlider*/}
        <div className="items-center justify-center mx-auto my-10 space-y-4">
          <Biography />
          <PhotoSlider />
          <p className="mt-2 opacity-40">(all pictures taken by me unless otherwise specified)</p>
        </div>

        <Separator className="my-4" />
      </div>
      
    </div>
  );
};

export default About;

import { FC } from "react";
import Image from "next/image";
import { ArrowDown, Olympics, USFlag } from "@components/icons";

const AboutSection: FC = () => {
  return (
    <section className="px-4 sm:px-16 py-10 lg:px-16 text-center lg:text-left ">
      <h2 className="text-4xl font-bold">About.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-10 text-left ">
        <div className=" p-4 rounded-md">
          <div className="flex justify-between items-center mt-1">
            <h4 className="text-xl font-bold text-gray-800">2020</h4>
            <span className="block text-4xl ml-2">🎓</span>
          </div>
          <div className="text-gray-600 mt-5">
            <h5 className="">&bull; Started working on kollab.com</h5>
            <h5 className="">
              &bull; Graduated from The University of Texas at Dallas(BS In Computer Science)
            </h5>
          </div>
        </div>
        <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex"></div>
        <div className=" p-4 rounded-md">
          <div className="flex justify-between items-center mt-1">
            <h4 className="text-xl font-bold text-gray-800">2016</h4>
            <div className="ml-2 ">
              <Image src="/UTDEmblem.jpg" height="36" width="36" />
            </div>
          </div>

          <div className="text-gray-600 mt-5">
            <h5 className="">
              &bull; Attended The University of Texas at Dallas for Computer Science
            </h5>
            <h5 className="mt-2">&bull; Graduated from Westwood High School</h5>
          </div>
        </div>
        <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex"></div>
        <div className=" p-4 rounded-md">
          <div className="flex justify-between items-center mt-1">
            <h4 className="text-xl font-bold text-gray-800">2011</h4>
            <USFlag className="h-12 w-10 ml-2" />
          </div>
          <div className="text-gray-600 mt-5">
            <h5 className="mt-2">&bull; Moved to Austin, TX</h5>
            <h5 className="">&bull; Started 8th Grade</h5>
          </div>
        </div>
        <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex"></div>
        <div className=" p-4 rounded-md">
          <div className="flex justify-between items-center mt-1">
            <h4 className="text-xl font-bold text-gray-800">2010</h4>
            <span className="block text-4xl ml-2">🏝</span>
          </div>
          <div className="text-gray-600 mt-5">
            <h5 className="mt-2">&bull; Moved back to Phuket, Thailand</h5>
          </div>
        </div>
        <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex"></div>
        <div className=" p-4 rounded-md">
          <div className="flex justify-between items-center mt-1">
            <h4 className="text-xl font-bold text-gray-800">2008</h4>
            <Olympics className="h-12 w-10 ml-2" />
          </div>
          <div className="text-gray-600 mt-5">
            <h5 className="mt-2">&bull; Moved to Beijing, China</h5>
            <h5 className="">&bull; Saw the Beijing Summer Olympics</h5>
            <h5 className="">
              &bull; Saw the soccer finals between Argentina vs. Nigeria in The Bird's Nest on
              my 11th birthday
            </h5>
            <h5 className="">&bull; Saw Michael Phelps Swim</h5>
            <h5 className="">&bull; Saw Roger Federer Play Tennis</h5>
          </div>
        </div>
        <div className=" h-0.5 bg-gray-200 rounded-full mx-auto w-4/5 flex"></div>
        <div className=" p-4 rounded-md">
          <div className="flex justify-between items-center mt-1">
            <h4 className="text-xl font-bold text-gray-800">1997</h4>
            <span className="block text-4xl ml-2">🏝</span>
          </div>
          <div className="text-gray-600 mt-5">
            {/* <Image src="/UTDEmblem.jpg" height="33" width="33" /> */}
            <h5 className="mt-2">&bull; I was born in Phuket, Thailand</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

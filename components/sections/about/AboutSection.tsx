import { FC } from "react";
import Image from "next/image";
import { Olympics, USFlag } from "@components/icons";

const AboutSection: FC = () => {
  return (
    <section className="px-14 py-10 text-center lg:text-left">
      <h2 className="text-4xl font-bold">About.</h2>
      <h4 className="text-xl font-bold text-gray-700 mt-10">1997</h4>
      <div className="text-gray-500 mt-5">
        <span className="block text-4xl">🏝</span>
        {/* <Image src="/UTDEmblem.jpg" height="33" width="33" /> */}
        <h5 className="mt-1">I was born in Phuket, Thailand</h5>
      </div>
      <h4 className="text-xl font-bold text-gray-700 mt-10">2008</h4>
      <div className="text-gray-500 mt-5">
        <Olympics className="h-12 w-12 mx-auto" />
        <h5 className="mt-1">Moved to Beijing, China</h5>
        <h5 className="">Saw the Beijing Summer Olympics</h5>
        <h5 className="">
          Saw the soccer finals between Argentina vs. Nigeria in The Bird's Nest on my 11th
          birthday
        </h5>
        <h5 className="">Saw Michael Phelps Swim</h5>
        <h5 className="">Saw Roger Federer Play Tennis</h5>
      </div>
      <h4 className="text-xl font-bold text-gray-700 mt-10">2010</h4>
      <div className="text-gray-500 mt-5">
        <span className="block text-4xl">🏝</span>
        <h5 className="mt-1">Moved back to Phuket, Thailand</h5>
      </div>

      <h4 className="text-xl font-bold text-gray-700 mt-10">2011</h4>
      <div className="text-gray-500 mt-5">
        <USFlag className="h-12 w-10 mx-auto" />
        <h5 className="mt-1">Moved to Austin, TX</h5>
        <h5 className="">Started 8th Grade</h5>
      </div>
      <h4 className="text-xl font-bold text-gray-700 mt-10">2016</h4>
      <div className="text-gray-500 mt-5">
        <Image src="/UTDEmblem.jpg" height="36" width="36" />
        <h5 className="mt-1">Graduated from Westwood High School</h5>
        <h5 className="">Attended The University of Texas at Dallas for Computer Science</h5>
      </div>
      <h4 className="text-xl font-bold text-gray-700 mt-10">2020</h4>
      <div className="text-gray-500 mt-5">
        <span className="block text-4xl">🎓</span>
        <h5 className="mt-1">Got a Girlfriend!</h5>
        <h5 className="">
          Graduated from The University of Texas at Dallas(BS In Computer Science)
        </h5>
        <h5 className="">Started working on Collabme.com</h5>
        <h5 className="">Got a job Software Engineer @ Intreecate LLC</h5>
      </div>
    </section>
  );
};

export default AboutSection;

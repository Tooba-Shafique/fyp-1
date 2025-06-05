import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { checklistItems } from '../constants';
import codeImg from "../assets/code.jpg";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Speed up your 
        <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text"> 
          {""} coding tasks
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-8">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="A person coding on a laptop" className="rounded-lg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems && checklistItems.length > 0 ? (
            checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-neutral-500">No checklist items available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
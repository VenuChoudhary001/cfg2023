import React from "react";
import TextBox, { SelectBox } from "../textbox";

const MentorRegForm = () => {
  return (
    <>
      <main className="flex flex-col gap-2">
        <main className="text-2xl  flex flex-col gap-1 font-medium">
          <div className="text-gray-800">
            Unlock Your Potential and Inspire Others: Join Our Mentorship
            Program Today!
          </div>
          <div className="text-base text-gray-600 max-w-[85%]">
            Become a beacon of inspiration and knowledge by sharing your
            expertise, experiences, and insights. As a mentor, you'll have the
            opportunity to guide and support mentees, helping them navigate
            challenges, achieve their goals, and create a brighter future
          </div>
        </main>
        <main className="grid grid-cols-2 gap-4">
          <TextBox lable={"Name"} placeholder="e.g. Rishi" />
          <TextBox lable={"Email"} placeholder="your@example.com" />
          <TextBox lable={"Contact Number"} placeholder="98XXXXXXX" />
          <SelectBox
            list={["B Tech", "BSc"]}
            placeholder={"Select"}
            lable={"Qualification"}
          />
          <SelectBox
            list={["Hindi", "English", "Marathi"]}
            placeholder="Select your spoken languages"
            lable={"Languages spoken"}
          />
        </main>
      </main>
    </>
  );
};

export default MentorRegForm;

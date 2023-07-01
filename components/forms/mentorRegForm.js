import React from "react";
import TextBox, { SelectBox } from "../textbox";

const MentorRegForm = () => {
  const [lang, setLang] = React.useState([]);
  return (
    <>
      <main className="flex flex-col gap-2">
        <main className="text-2xl  flex flex-col gap-1 font-medium">
          <div className="text-gray-800">
            Unlock Your Potential and Inspire Others: Join Our Mentorship
            Program Today!
          </div>
          <div className="text-base text-gray-600 max-w-[95%]">
            Become a beacon of inspiration and knowledge by sharing your
            expertise, experiences, and insights. As a mentor, you'll have the
            opportunity to guide and support mentees, helping them navigate
            challenges, achieve their goals, and create a brighter future
          </div>
        </main>
        <main className="grid grid-cols-2 mt-6 px-4 gap-6">
          <TextBox lable={"Name"} placeholder="e.g. Rishi" />
          <TextBox lable={"Email"} placeholder="your@example.com" />
          <TextBox lable={"Contact Number"} placeholder="98XXXXXXX" />
          <TextBox lable={"Current City"} placeholder="e.g.New Delhi" />
          <TextBox lable={"Address"} placeholder="" />
          <TextBox lable={"Occupation"} placeholder="e.g Software Engineer" />
          <TextBox lable={"Address"} placeholder="" />

          <SelectBox
            list={["Male", "Female"]}
            placeholder={"Select"}
            lable={"Gender"}
          />

          <SelectBox
            list={["18 - 24 years old", "25-34 years old"]}
            placeholder={"Select"}
            lable={"Age"}
          />
          <SelectBox
            list={["B Tech", "BSc"]}
            placeholder={"Select"}
            lable={"Qualification"}
          />
          <div>
            <SelectBox
              list={["Hindi", "English", "Marathi"]}
              placeholder="Select your spoken languages"
              lable={"Languages spoken"}
              multiSelect
              action={setLang}
            />
            <div className="flex gap-1">
              {lang &&
                lang.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 text-xs text-rose-950 font-bold border-2 rounded-full border-2 border-rose-900"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
          {/* <TextBox lable={"Have you "} placeholder="" /> */}
          <SelectBox
            list={["Yes", "No"]}
            placeholder={"Select"}
            lable={"Have you volunteered before?"}
          />
          <SelectBox
            list={["Yes", "No"]}
            placeholder={"Select"}
            lable={
              "Are you comfortable with teaching/training/mentoring adults?"
            }
          />
          <SelectBox
            list={["Yes", "No"]}
            placeholder={"Select"}
            lable={
              "Do you require a basic discussion call before session with the mentee?"
            }
          />
        </main>
        <div className="flex my-2 px-4 gap-2 w-full flex-col ">
          <span className="block text-sm font-bold text-gray-700">
            Is there anything else you would like us to know about your
            availability?
          </span>
          <textarea
            rows={5}
            placeholder="Your answer"
            className="w-full p-3 text-sm bg-gray-100 outline-none"
          />
        </div>
        <main className="px-4">
          <button className="w-full bg-cyan-700 font-medium uppercase rounded p-2 text-white ">
            register
          </button>
        </main>
      </main>
    </>
  );
};

export default MentorRegForm;

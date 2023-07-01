import MentorRegForm from "@/components/forms/mentorRegForm";
import React from "react";

const Register = () => {
  return (
    <main className="grid h-screen w-full grid-cols-2">
      <main className="w-full h-full bg-black"></main>
      <main className="w-full h-full bg-white px-4 py-4">
        {<MentorRegForm />}
      </main>
    </main>
  );
};

export default Register;

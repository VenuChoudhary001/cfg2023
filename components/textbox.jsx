import React, { useState } from "react";
import Image from "next/image";
const TextBox = ({ lable, action, type, placeholder }) => {
  return (
    <>
      <main>
        <div className="flex flex-col gap-1">
          <div className="text-sm font-bold text-gray-600">{lable}</div>
          <input
            className="outline-none p-2 text-gray-800 bg-gray-100 rounded"
            type={"text"}
            placeholder={placeholder}
          />
        </div>
      </main>
    </>
  );
};

export const SelectBox = ({ list, lable, placeholder }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <main className="flex flex-col gap-1">
        <div className="text-gray-600">{lable}</div>
        <div className="flex w-full flex-col gap-2">
          <div
            onClick={() => setShow(true)}
            className="flex  bg-gray-100  justify-between p-2 rounded-lg items-center"
          >
            <div className="">{placeholder}</div>
            <Image src={"/icons/down.svg"} width={20} height={20} />
          </div>
          {show && (
            <div
              className="max-h-[200px] flex flex-col gap-1 rounded-lg border-[1px] border-gray-100"
              onMouseLeave={() => setShow(false)}
            >
              {list.map((item, index) => (
                <div
                  className=" hover:bg-gray-200 p-2 hover:font-bold"
                  key={index}
                >
                  {" "}
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default TextBox;

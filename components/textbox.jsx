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

export const SelectBox = ({
  list,
  lable,
  placeholder,
  action,
  multiSelect,
}) => {
  const [show, setShow] = useState(false);

  const [value, setValue] = useState(null);
  const [arr, setArr] = useState([]);
  const handleSelect = (e) => {
    if (!multiSelect) {
      setValue(e.target.textContent);
    } else {
      setArr([...arr, e.target.textContent]);
      action([...arr, e.target.textContent]);
    }
    setShow(false);
  };
  return (
    <>
      <main className="flex flex-col gap-1">
        <div className="text-gray-600 text-sm font-bold">{lable}</div>
        <div className="flex relative w-full flex-col gap-2">
          <div
            onClick={() => setShow(true)}
            className="flex  bg-gray-100  justify-between p-2 rounded-lg items-center"
          >
            <div className="">{value ? value : placeholder}</div>
            <Image src={"/icons/down.svg"} width={20} height={20} />
          </div>
          {show && (
            <div
              className="max-h-[200px] z-[9999999] bg-white w-full absolute top-12 shadow-lg flex flex-col gap-1 rounded-lg border-[1px] border-gray-100"
              onMouseLeave={() => setShow(false)}
            >
              {list.map((item, index) => (
                <div
                  className=" hover:bg-gray-200 p-2 hover:font-bold"
                  key={index}
                  onClick={(e) => {
                    handleSelect(e);
                  }}
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

export const Tags = ({ item, removeItem }) => {
  return (
    <>
      <div className="px-2 text-xs font-medium max-w-min rounded-full py-1 flex gap-1 border-2 text-rose-900 border-rose-900">
        {item}
      </div>
    </>
  );
};

export default TextBox;

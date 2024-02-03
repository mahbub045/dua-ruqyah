import Image from "next/image";
import { useState } from "react";

const Settings = () => {
  // bg-[#F7F8FA]
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="bg-white min-h-full rounded-lg p-3">
        <h2 className="text-center font-semibold text-2xl my-10">Settings</h2>
        <div>
          <button className="p-4 mt-5 w-full text-lg font-semibold flex justify-start items-center gap-3 bg-[#F7F8FA] rounded-md">
            <Image
              src="/images/language.svg"
              alt="Language"
              width={35}
              height={35}
              className="bg-[#E8F0F5] p-2 rounded-full"
            />
            Language Settings
          </button>
          <button className="p-4 mt-5 w-full text-lg font-semibold flex justify-start items-center gap-3 bg-[#F7F8FA] rounded-md">
            <Image
              src="/images/general.svg"
              alt="general"
              width={35}
              height={35}
              className="bg-[#E8F0F5] p-2 rounded-full"
            />
            Gereral Settings
          </button>
          <button className="p-4 mt-5 w-full text-lg font-semibold flex justify-start items-center gap-3 bg-[#F7F8FA] rounded-md">
            <Image
              src="/images/font.svg"
              alt="font"
              width={35}
              height={35}
              className="bg-[#E8F0F5] p-2 rounded-full"
            />
            Font Settings
          </button>
          <div className="relative">
            <button
              className={`p-4 mt-5 w-full text-lg font-semibold flex justify-start items-center gap-3 rounded-md ${
                showDropdown ? "border-l-[5px] border-[#1FA45B] text-[#1FA45B]" : "bg-[#F7F8FA] text-gray-900"
              }`}
              onClick={toggleDropdown}
            >
              <Image
                src="/images/font.svg"
                alt="font"
                width={35}
                height={35}
                className="bg-[#E8F0F5] p-2 rounded-full"
              />
              Appearance Settings
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute top-14 left-0 flex justify-between mt-2 p-4 w-full bg-white border-x border-b rounded-x-md rounded-b-md">
                {/* Dropdown content goes here */}
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Night Mode
                </label>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-[#1FA45B] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;

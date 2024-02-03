const TopBar = () => {
  return (
    <>
      {/* top bar start */}
      <div className="text-black p-4 flex justify-between items-center w-full">
        <div>
          <h2 className="text-2xl font-semibold">Duas Page</h2>
        </div>
        <div className="flex items-center gap-40">
          <div className="relative">
            <input
              type="text"
              className="px-5 py-3 pr-8 w-96 bg-white text-black rounded-md focus:outline outline-offset-2 outline-1 focus:outline-[#1FA45B]"
              placeholder="Search by Duya Name"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-10 p-2 bg-[#F3F4F6] rounded-md text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-5.2-5.2"
              ></path>
              <circle cx="10" cy="10" r="8"></circle>
            </svg>
          </div>
          <div className="relative">
            <a href="">
              <img
                src="/images/profile.svg"
                alt="Profile"
                className="w-8 h-8 rounded-full ml-2 cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-caret-down-filled w-4 h-4 absolute -right-5 bottom-0 m-1 text-[#868686]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;

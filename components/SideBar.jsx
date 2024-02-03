import Image from "next/image";

const SideBar = () => {
  return (
    <>
      <div className="bg-white w-[100px] flex flex-col rounded-2xl justify-start items-center">
        {/* logo */}
        <div className="p-1 mt-4 mb-10">
          <a href="">
            <Image src="/images/logo.png" alt="Logo" width={93} height={93} />
          </a>
        </div>
        <div>
          {/* Menu Items */}
          <ul className="">
            <li className="my-5 bg-[#E8F0F5] p-2 rounded-full transform hover:scale-105">
              <a href="">
                <Image
                  src="/images/home 1.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li className="my-5 bg-[#E8F0F5] p-2 rounded-full transform hover:scale-105">
              <a href="">
                <Image
                  src="/images/54-menu-2.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li className="my-5 bg-[#E8F0F5] p-2 rounded-full transform hover:scale-105">
              <a href="">
                <Image
                  src="/images/memorize 1.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li className="my-5 bg-[#E8F0F5] p-2 rounded-full transform hover:scale-105">
              <a href="">
                <Image
                  src="/images/3-keep-minus.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li className="my-5 bg-[#E8F0F5] p-2 rounded-full transform hover:scale-105">
              <a href="">
                <Image
                  src="/images/ruqyah 1.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li className="my-5 bg-[#E8F0F5] p-2 rounded-full transform hover:scale-105">
              <a href="">
                <Image
                  src="/images/dua-info 1.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li className="my-1 bg-[#E8F0F5] p-2 rounded-full transform hover:scale-105">
              <a href="">
                <Image
                  src="/images/books 1.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-1 my-20">
          {/* support icon */}
          <a href="">
            <Image
              className="rounded-md bg-green-500 shadow-md"
              src="/images/donate-heart.png"
              alt="donate"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;

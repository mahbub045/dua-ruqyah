import Categories from "@/components/Categories";
import Settings from "@/components/Settings";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { Inter } from "next/font/google";
import Dua from "./Dua/Dua";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-row p-5">
        <SideBar />
        <div className="w-full">
          {/* top bar start */}
          <TopBar />
          {/* top bar end */}
          {/* content start */}
          <div className="flex flex-row gap-5 p-2">
            {/* catagories start */}
            <div className="w-4/12 bg-white rounded-md">
              <Categories />
            </div>
            {/* catagories end */}
            <div className="w-3/5 overflow-y-auto h-[1000px]" style={{ scrollbarWidth: 'thin' }}>
              <Dua />
            </div>
            <div className="w-1/4">
              <Settings />
            </div>
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";

const catData = [
  {
    id: 1,
    cat_id: 1,
    cat_name_bn: "দোয়ার গুরুত্ব",
    cat_name_en: "Dua's Importance",
    no_of_subcat: 7,
    no_of_dua: 21,
    cat_icon: "duar_gurutto",
  },
  {
    id: 2,
    cat_id: 2,
    cat_name_bn: "যিকিরের ফযীলত",
    cat_name_en: "Dua's Excellence",
    no_of_subcat: 1,
    no_of_dua: 15,
    cat_icon: "zikirer_fozilot",
  },
  {
    id: 3,
    cat_id: 3,
    cat_name_bn: "দোয়া কবুলের সময়",
    cat_name_en: "Time of Dua",
    no_of_subcat: 1,
    no_of_dua: 30,
    cat_icon: "dua_kobuler_somoy",
  },
  {
    id: 4,
    cat_id: 4,
    cat_name_bn: "দোয়া কবুল হওয়া",
    cat_name_en: "Dua Acceptance",
    no_of_subcat: 1,
    no_of_dua: 14,
    cat_icon: "jader_dua_kobul_hoy",
  },
  {
    id: 6,
    cat_id: 5,
    cat_name_bn: "সকাল-সন্ধ্যার যিক্‌র",
    cat_name_en: "Morning & Evening",
    no_of_subcat: 3,
    no_of_dua: 53,
    cat_icon: "sokal_sondha",
  },
  {
    id: 9,
    cat_id: 6,
    cat_name_bn: "ঘুম",
    cat_name_en: "Sleep",
    no_of_subcat: 2,
    no_of_dua: 35,
    cat_icon: "ghum",
  },
  {
    id: 10,
    cat_id: 7,
    cat_name_bn: "কাপড় পরিধান",
    cat_name_en: "Cloths",
    no_of_subcat: 1,
    no_of_dua: 8,
    cat_icon: "poshak",
  },
  {
    id: 11,
    cat_id: 8,
    cat_name_bn: "ঘর-বাড়ি",
    cat_name_en: "Home",
    no_of_subcat: 2,
    no_of_dua: 6,
    cat_icon: "bari",
  },
  {
    id: 12,
    cat_id: 9,
    cat_name_bn: "টয়লেট",
    cat_name_en: "Toilet",
    no_of_subcat: 1,
    no_of_dua: 2,
    cat_icon: "toilet",
  },
  {
    id: 13,
    cat_id: 10,
    cat_name_bn: "আযান ও ইকামত",
    cat_name_en: "Adhaan & Iqamah",
    no_of_subcat: 4,
    no_of_dua: 7,
    cat_icon: "azan_ikamot",
  },
];
const sub_catData = [
  {
    id: 1,
    cat_id: 1,
    subcat_id: 1,
    subcat_name_bn: "বান্দা তার রবের মুখাপেক্ষী",
    subcat_name_en: "The servant is dependent on his Lord",
    no_of_dua: 3,
  },
  {
    id: 2,
    cat_id: 1,
    subcat_id: 2,
    subcat_name_bn:
      "আল্লাহ্‌র কাছে যে জিনিসটি চাওয়া সবচাইতে বেশি গুরুত্বপূর্ণ",
    subcat_name_en: "The most important thing to ask Allah for",
    no_of_dua: 9,
  },
  {
    id: 3,
    cat_id: 1,
    subcat_id: 3,
    subcat_name_bn: "জান্নাত লাভ ও জাহান্নাম থেকে রেহাই",
    subcat_name_en: "Ask for paradise & protection from fire",
    no_of_dua: 2,
  },
  {
    id: 4,
    cat_id: 1,
    subcat_id: 4,
    subcat_name_bn: "দ্বীনের উপর অটল থাকার দোয়া",
    subcat_name_en: "Dua to remain steadfast on the religion",
    no_of_dua: 3,
  },
  {
    id: 5,
    cat_id: 1,
    subcat_id: 5,
    subcat_name_bn: "সকল কাজে উত্তম পরিণতির দোয়া",
    subcat_name_en: "Dua of good outcome in all deeds",
    no_of_dua: 1,
  },
  {
    id: 6,
    cat_id: 1,
    subcat_id: 6,
    subcat_name_bn: "নিয়ামাত বা অনুগ্রহের প্রার্থনা",
    subcat_name_en: "Seeking whatever good Allah can bestow",
    no_of_dua: 2,
  },
  {
    id: 7,
    cat_id: 1,
    subcat_id: 7,
    subcat_name_bn:
      "বিভীষিকা, দুর্দশা, মন্দ পরিণতি ও শত্রুর উল্লাস থেকে আশ্রয়",
    subcat_name_en:
      "Shelter from horror, misery, evil consequences and rejoicing of the enemy",
    no_of_dua: 1,
  },
  {
    id: 8,
    cat_id: 2,
    subcat_id: 8,
    subcat_name_bn: "তাসবীহ, তাহমীদ, তাহলীল ও তাকবীর-এর ফযীলত",
    subcat_name_en: "Excellence of doing Tasbeeh, Tahmid, Tahlil, Takbeer",
    no_of_dua: 15,
  },
  {
    id: 9,
    cat_id: 3,
    subcat_id: 9,
    subcat_name_bn: "দোয়া কবুলের সময় ও স্থান সমূহ",
    subcat_name_en: "Times and places when dua will be accepted",
    no_of_dua: 30,
  },
  {
    id: 10,
    cat_id: 4,
    subcat_id: 10,
    subcat_name_bn: "যাদের দোয়া কবুল হয়",
    subcat_name_en: "Those whose duas are accepted",
    no_of_dua: 14,
  },
  {
    id: 11,
    cat_id: 5,
    subcat_id: 11,
    subcat_name_bn: "সকাল-সন্ধ্যার যিক্‌রের ফযীলত",
    subcat_name_en: "Excellence of dua in the morning & evening",
    no_of_dua: 1,
  },
  {
    id: 12,
    cat_id: 5,
    subcat_id: 12,
    subcat_name_bn: "সকাল-সন্ধ্যার যিক্‌র",
    subcat_name_en: "Morning & Evening Adhkar",
    no_of_dua: 45,
  },
  {
    id: 13,
    cat_id: 5,
    subcat_id: 13,
    subcat_name_bn: "কর্মব্যস্ত অবস্থার যিক্‌র",
    subcat_name_en: "Dhikr in busy state",
    no_of_dua: 7,
  },
  {
    id: 14,
    cat_id: 6,
    subcat_id: 14,
    subcat_name_bn: "ঘুমানোর আগে",
    subcat_name_en: "Before sleep",
    no_of_dua: 27,
  },
  {
    id: 15,
    cat_id: 6,
    subcat_id: 15,
    subcat_name_bn: "ঘুম ভাঙার পরে",
    subcat_name_en: "After waking up",
    no_of_dua: 8,
  },
  {
    id: 16,
    cat_id: 7,
    subcat_id: 16,
    subcat_name_bn: "কাপড় পরিধান সম্পর্কিত দোয়া সমূহ",
    subcat_name_en: "Duas related to wearing clothes",
    no_of_dua: 8,
  },
  {
    id: 17,
    cat_id: 8,
    subcat_id: 17,
    subcat_name_bn: "বাড়ি থেকে বের হওয়া",
    subcat_name_en: "When leaving the home",
    no_of_dua: 3,
  },
  {
    id: 18,
    cat_id: 8,
    subcat_id: 18,
    subcat_name_bn: "বাড়িতে প্রবেশ",
    subcat_name_en: "Upon entering the home",
    no_of_dua: 3,
  },
  {
    id: 19,
    cat_id: 9,
    subcat_id: 19,
    subcat_name_bn: "টয়লেট সম্পর্কিত দোয়া সমূহ",
    subcat_name_en: "Duas related to toilets",
    no_of_dua: 2,
  },
  {
    id: 20,
    cat_id: 10,
    subcat_id: 20,
    subcat_name_bn: "আযানের সময় যা বলতে হবে",
    subcat_name_en: "Dua while hearing the adhaan",
    no_of_dua: 2,
  },
  {
    id: 21,
    cat_id: 10,
    subcat_id: 21,
    subcat_name_bn: "আযানের পরে যা বলতে হবে",
    subcat_name_en: "Dua after the adhaan",
    no_of_dua: 2,
  },
  {
    id: 22,
    cat_id: 10,
    subcat_id: 22,
    subcat_name_bn: "আযান ও ইক্বামতের মধ্যবর্তী সময় দোয়া",
    subcat_name_en: "Dua between Adhaan and Iqamah",
    no_of_dua: 2,
  },
  {
    id: 23,
    cat_id: 10,
    subcat_id: 23,
    subcat_name_bn: "ইমাম ও মুআযযিনের জন্য দোয়া",
    subcat_name_en: "Dua for Imam and Mu'adhdhin",
    no_of_dua: 1,
  },
];

const Categories = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [categoryData, setCategoryData] = useState(catData);
  const [subCategoryData, setSubCategoryData] = useState(sub_catData);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="bg-[#1FA45B] rounded-t-md p-2">
        <h2 className="text-center text-xl font-semibold text-white">
          Categories
        </h2>
      </div>
      <div className="relative m-2">
        <input
          type="text"
          className="px-10 py-2 pr-8 min-w-full bg-white text-black rounded border outline-offset-2 outline-1 focus:outline-[#1FA45B]"
          placeholder="Search by Categories"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-18 p-2 rounded-md text-gray-400 absolute left-0 top-1/2 transform -translate-y-1/2"
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
      <div
        className="overflow-y-auto h-[1000px]"
        style={{ scrollbarWidth: "thin" }}
      >
        {categoryData &&
          categoryData.map((item, index) => (
            <div className="p-2 relative" key={index}>
              {/* button start */}
              <button
                className="hover:bg-[#E8F0F5] p-2 w-full rounded-md flex items-center justify-between"
                onClick={() => handleDropdownToggle(index)}
              >
                {/* Your existing button content */}
                <div className="flex items-center">
                  <img
                    src={`/images/${item.cat_icon}.svg`} // Assuming you have image files named after category icons
                    alt="Category Icon"
                    className="w-16 h-16 rounded-md p-2 cursor-pointer bg-[#CFE0E5]"
                  />
                  <div className="ml-2">
                    <h3 className="text-lg font-semibold text-[#1FA45B]">
                      {item.cat_name_en}
                    </h3>
                    <h6 className="text-sm text-gray-600 text-start">
                      Subcategory: {item.no_of_subcat}
                    </h6>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-xl font-bold text-gray-800">
                    {item.no_of_dua}
                  </h5>
                  <p className="text-xl text-gray-600">Duas</p>
                </div>
              </button>

              {/* Check if the dropdown is open before rendering */}
              {openDropdownIndex === index && (
                <ol className="relative mt-2 ml-5 border-l border-dotted border-[#1FA45B]">
                  {/* Filter subCategoryData based on the current category's cat_id */}
                  {subCategoryData &&
                    subCategoryData
                      .filter((subItem) => subItem.cat_id === item.cat_id)
                      .map((filteredSubItem, subIndex) => (
                        <li key={subIndex} className="mb-8 ml-4">
                          <div className="absolute w-2 h-2 mt-2 bg-[#1FA45B] rounded-full -left-1 border border-[#1FA45B]"></div>
                          <button
                            className="text-sm text-start text-black hover:text-emerald-700"
                            id={`${filteredSubItem.subcat_name_en}`}
                          >
                            {filteredSubItem.subcat_name_en}
                          </button>
                        </li>
                      ))}
                </ol>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Categories;
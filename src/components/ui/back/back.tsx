import { IoChevronBackOutline } from "react-icons/io5";
import Share from "@src/assets/image/share (1).svg";
import bookmark from "@src/assets/image/bookmark.svg";
import { FiBookmark, FiShare2 } from "react-icons/fi";
type Backdata = {
  navigate: () => void;
  title: string;
};

export default function Back({ navigate }: Backdata) {
  return (
    <>
      <div className="      w-full h-16  ">
        <div className="flex flex-row py-4 justify-center items-center ">
          <button
            className="rounded-full "
            style={{ backgroundColor: "" }}
            onClick={navigate}
          >
            <IoChevronBackOutline className="  rotate-180 size-5 " />
          </button>

          <div className="flex   justify-center items-center  w-[85%] mr-10  bg- ">
            <h1 className="font-bold ">Book Details</h1>
          </div>
          <div className="flex flex-row  justify-around w-[40%] ">
            <button className="rounded-full border  border-[#dfdfdf] bg-white  p-2 flex justify-center items-center  ">
              <FiShare2 className="size-5" />
            </button>
            <button className=" rounded-full border border-gray-500 p-2 flex justify-center items-center  ">
              <FiBookmark className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

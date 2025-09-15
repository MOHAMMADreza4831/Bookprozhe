import { IoChevronBackOutline } from "react-icons/io5";

type Backdata = {
  navigate: () => void;
  title: string;
};

export default function Back({ navigate, title }: Backdata) {
  return (
    <>
      <div
        className="sticky to flex-row z-10  w-full h-16  "
        style={{ backgroundColor: "#95bccc" }}
      >
        <div className="flex      py-4 ">
          <button onClick={navigate}>
            <IoChevronBackOutline
              style={{ color: "white" }}
              className="  rotate-180 size-5 "
            />
          </button>
          <button
            style={{ color: "white" }}
            onClick={navigate}
            className="font-bold"
          >
            بازگشت
          </button>
          <div className="flex  items-end  pr-[120px]">
            <h1 className="font-bold " style={{color:"white"}}>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

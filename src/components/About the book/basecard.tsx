import Back from "../ui/back/back";
import AboutHistoricalBook from "./Product";

export default function Basecard() {
  return (
    <div className=" w-[444px] bg-[#f2f2f2]  ">
      <div className="relative  w-full h-96">
        <Back navigate={() => -1} title="Book detail" />
      </div>
      <div className="relative bg-white h-screen rounded-t-3xl  ">
        <AboutHistoricalBook />
      </div>
    </div>
  );
}

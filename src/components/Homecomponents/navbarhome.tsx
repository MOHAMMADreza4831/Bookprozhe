import MenuHome from "./menu";

export default function NavbarHome() {
  
  return (
    <div className="flex items-center justify-between p-4   ">
      <div
        className="w-10 h-10 flex justify-center rounded-full"
        style={{ backgroundColor: "rgba(149, 188, 204, 1)" }}
      >
        <MenuHome />
      </div>

      <h1
        style={{ color: "#95BCCC" }}
        className="text-right justify-center text-slate-500 text-2xl font-normal font-['Aclonica'] leading-loose"
      >
        ABAN BOOK
      </h1>
    </div>
  );
}

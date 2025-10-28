import { Button } from "flowbite-react";

interface typebuttne {
  text: string;
  onClick?: () => void;
}

export default function Buttoneauth({ text, onClick }: typebuttne) {
  return (
    <>
      <Button
        onClick={onClick}
        className=" bg-[#2DAA9E] w-[90%] rounded-[90px] flex justify-center items-center text-white"
      >
        {text}
      </Button>
    </>
  );
}

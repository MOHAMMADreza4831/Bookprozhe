import { useNavigate } from "react-router-dom";
import Back from "../ui/back/back";
import Formregister from "../ui/FORM/Form";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className=" ">
      <Back navigate={() => navigate(-1)} title="ثبت نام " />

      <Formregister />
    </div>
  );
}

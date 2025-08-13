import { useQuery } from "@tanstack/react-query";
import { Book } from "../Data/interfaceDATA";
import axioshandel from "../login/header";
import { useState } from "react";




export default function Mathprice () {
    const [summaryAdded, setSummaryAdded] = useState(false);
    const [translationAdded, setTranslationAdded] = useState(false);
    const [extraPrice, setExtraPrice] = useState(0);
    
      const {
    data: basket,
  } = useQuery<Book[]>({
    queryKey: ["basket"],
    queryFn: () => axioshandel.get("/basket").then((res) => res.data),
  });
  
  console.log(basket,"math");

  const handeltotal = ()=>{
if
  }




    return (
        <>

              <div className="flex flex-col w-full items-center">
                <div className="flex justify-between   w-full">
                  <div>خلاصه</div>
                  <button className="flex ">
                    <div>قیمت</div>
                    <div className="flex items-center">
                      <IoIosAdd style={{ color: "#DD7475" }} />
                    </div>
                  </button>
                </div>
                {/* ================================================================= */}
                <div className="flex justify-between   w-full">
                  <div>ترجمه</div>
                  <div className="flex ">
                    <div>قیمت{summary}</div>
                    <button onClick={handelMAth} className="flex items-center">
                      <IoIosAdd style={{ color: "#DD7475" }} />
                    </button>
                  </div>
                </div>
                  {/* ================================================================= */}

                <div style={{backgroundColor:"#FCDCDC"}} className="flex justify-between pl-2  w-[18em]">
                  <div> قیمت کل</div>
                  <div> قیمت:{total}</div>
                </div>
              </div>


        </>
    ) 
}



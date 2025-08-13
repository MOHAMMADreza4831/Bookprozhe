import { useState } from "react";
import { Book } from "../Data/interfaceDATA";
import { IoIosAdd } from "react-icons/io";

export default function MathPrice({ book }: { book: Book }) {
  const [summaryAdded, setSummaryAdded] = useState(false);
  const [translationAdded, setTranslationAdded] = useState(false);
  const [extraPrice, setExtraPrice] = useState(0);

  const handleAddTranslation = () => {

  };

  const handleAddSummary = () => {
    if (!summaryAdded) {
      const price = book.book_files.find(f => f.status === 0)?.price ?? 0;
      setExtraPrice(prev => prev + price);
      setSummaryAdded(true);
    }
  };

  const totalCardPrice = book.price + extraPrice;

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-between w-full">
        <div>خلاصه</div>
        <button className="flex items-center" onClick={handleAddSummary}>
          <IoIosAdd style={{ color: "#DD7475" }} />
          <div>قیمت</div>
        </button>
      </div>

      <div className="flex justify-between w-full mt-2">
        <div>ترجمه</div>
        <button className="flex items-center" onClick={handleAddTranslation}>
          <IoIosAdd style={{ color: "#DD7475" }} />
          <div>قیمت</div>
        </button>
      </div>

      <div style={{ backgroundColor: "#FCDCDC" }} className="flex justify-between pl-2 w-[18em] mt-2">
        <div>قیمت کل کارت</div>
        <div>{totalCardPrice}</div>
      </div>
    </div>
  );
}

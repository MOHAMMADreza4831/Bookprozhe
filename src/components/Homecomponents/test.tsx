import { useState } from "react";
// import "./BottomNav.css";
import { FiHome, FiSearch, FiHeart, FiUser } from "react-icons/fi";

const BottomNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { icon: <FiHome />, label: "خانه" },
    { icon: <FiSearch />, label: "جستجو" },
    { icon: <FiHeart />, label: "علاقه‌مندی" },
    { icon: <FiUser />, label: "پروفایل" },
  ];

  return (
    <div className="bottom-nav ">
      <div
        className="active-bg "
        style={{ transform: `translateX(${activeIndex * -200}%)` }}
      />

      {items.map((item, index) => (
        <button
          key={index}
          className={` nav-btn ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          <span className="icon flex justify-center items-center bg-white">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;

import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";

export default function MenuItems({ items }) {
  const [dropDown, setDropDown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropDown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropDown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropDown(true);
  };

  const onMouseLeave = (e) => {
    window.innerWidth > 960 && setDropDown(false);
  };
  console.log(ref.current);
  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex flex-col px-2 cursor-pointer"
    >
      {items.subMenu ? (
        <div className="relative group">
          <div
            className=" group-hover:text-blue-700"
            onClick={() => setDropDown((prev) => !prev)}
          >
            <h1>{items.mainTitle}</h1>
          </div>
          <DropDown subMenus={items.subMenu} dropDown={dropDown} />
        </div>
      ) : (
        <h1>{items.mainTitle}</h1>
      )}
    </div>
  );
}

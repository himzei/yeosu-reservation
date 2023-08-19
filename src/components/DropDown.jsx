import { Link } from "react-router-dom";

export default function DropDown({ subMenus, dropDown }) {
  console.log(subMenus);
  return (
    <div
      className={`${
        dropDown ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
      }
      } absolute top-6 w-36 py-[30px] -translate-x-4 transition-all duration-300 origin-top`}
    >
      <div className="flex flex-col rounded-b shadow-md bg-white space-y-2 px-2 py-4 w-full">
        {subMenus.map(({ subTitle, url }, index) => (
          <Link to={url} key={index}>
            <div className="hover:bg-blue-700 hover:text-white  px-1 py-1 rounded-sm">
              {subTitle}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

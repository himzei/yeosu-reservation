import Logo from "../asset/Logo";
import { menuItems } from "../lib/menuItems";
import MenuItems from "./MenuItems";

export default function Layout({ children }) {
  return (
    <div>
      {/* 헤더 */}
      <header className="w-full h-[80px] flex justify-center items-center shadow-sm">
        <div className="relative max-w-7xl w-full h-full flex justify-center items-center text-sm">
          {/* 메뉴리스트 */}
          <ul className="flex space-x-16 text-lg z-10">
            {menuItems.map((menu, index) => (
              <MenuItems items={menu} key={index} />
            ))}
          </ul>
          {/* 로고 */}
          <div className="absolute left-0">
            <Logo />
          </div>
          {/* login */}
          <div className="absolute right-0 h-full flex items-center ">
            <div className="relative flex space-x-2 ">
              <p>로그인</p>
              <p>|</p>
              <p>회원가입</p>
              <div className="absolute -top-5 right-0 text-xs text-gray-600">
                관리자페이지
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* 컨텐츠 */}
      <div className="w-full flex justify-center min-h-[calc(100vh-80px-240px)]">
        <div className="w-full">{children}</div>
      </div>
      {/* 푸터 */}
      <footer className="w-full h-[240px] bg-[#2B3244] flex justify-center text-gray-300">
        <div className="max-w-5xl w-full py-8 flex justify-between">
          {/* 왼쪽 */}
          <div className="flex flex-col space-y-8">
            {/* footer logo */}
            <div>
              <Logo color="white" />
            </div>
            {/* 회사정보 */}
            <div className="flex flex-col">
              <div className="flex space-x-6">
                <div className="flex space-x-4">
                  <div className="font-semibold">주소</div>
                  <div>59723 전라남도 여수시 박람회길 1 (덕충동)</div>
                </div>
                <div className="flex space-x-4">
                  <div className="font-semibold">사업자번호</div>
                  <div>857-86-02897</div>
                </div>
              </div>
              <div className="flex space-x-6">
                <div className="flex space-x-4">
                  <div className="font-semibold">TEL</div>
                  <div>1577-2012</div>
                </div>
                <div className="flex space-x-4">
                  <div className="font-semibold">FAX</div>
                  <div>061-659-2029</div>
                </div>
              </div>
            </div>
            {/* 카피라이트 */}
            <div className="text-xs">
              <span>
                Copyright{" "}
                <span className="font-semibold">
                  © Yeosu Expo Management Corporation
                </span>{" "}
                All rights reserved.
              </span>
            </div>
          </div>
          {/* 오른쪽 */}
          <div>
            <select className="w-[200px] pl-2 py-2 rounded bg-transparent border border-neutral-300">
              <option>Family Site</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}

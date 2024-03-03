import { SuperWalk } from "../../../public/svgs/superwalk";

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-30 bg-opacity-95 backdrop-blur-[1px]">
      <div className="navbar relative flex justify-between py-2 md:py-4 md:gap-1 lg:gap-2">
        <div className="flex">
          <a className="btn btn-ghost text-lg sm:text-2xl px-0" href="/">
            <SuperWalk />
          </a>
        </div>
        <div>
          <a className="btn btn-sm btn-ghost text-xs md:text-sm" href="search">
            신발검색
          </a>
          <a
            className="btn btn-sm btn-ghost text-xs md:text-sm"
            href="https://open.kakao.com/o/g8ODydif"
          >
            구구봇
          </a>
        </div>
      </div>
    </header>
  );
}

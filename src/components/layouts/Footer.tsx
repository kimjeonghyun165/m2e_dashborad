import { Twitter, Instargram, Github } from "../../../public/svgs";

export function Footer() {
  return (
    <footer className="footer p-10 flex justify-center">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <aside className="flex items-center">
          <p className="text-xs text-center md:text-sm md:text-start">
            99-Planet Ltd.
            <br />© 2024. 어영부엉하림 all rights reserved.
            <br />
            googooplanet@gmail.com
          </p>
        </aside>
        <nav>
          <header className="footer-title md:text-start text-center ">
            About us
          </header>
          <div className="grid grid-flow-col gap-4">
            <a href="https://open.kakao.com/o/swxC9Tuc">카카오톡</a>
            <a href="https://open.kakao.com/o/g8ODydif">구구봇</a>
            <a href="https://planet-99.com/">광고문의</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

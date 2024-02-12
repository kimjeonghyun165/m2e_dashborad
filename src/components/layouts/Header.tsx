import { useWindowSize } from "@/hooks/useSize";

export function Header() {
  // const isMobile = useWindowSize(768);

  return (
    <header className="sticky top-0 left-0 right-0 z-30 bg-opacity-95 backdrop-blur-[1px]">
      <div className="navbar relative flex justify-between py-2 md:py-4 md:gap-1 lg:gap-2">
        <div className="flex-1">
          <a className="btn btn-ghost text-lg sm:text-2xl" href="#">
            SuperWalk Shoe Info
          </a>
        </div>
      </div>
    </header>
  );
}

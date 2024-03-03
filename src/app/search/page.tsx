import { Footer, Header } from "@/components/layouts";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";

export default function SearchPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto ">
        <Header />
        <div className="p-2 mb:px-10">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
        <Footer />
      </div>
    </main>
  );
}

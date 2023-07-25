import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="dicover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Motorcycle Catalogue</h1>
          <p>Explore the motorcycles you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}

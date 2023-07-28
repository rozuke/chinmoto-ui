import { CustomFilter, Hero, SearchBar } from "@/components";
import CardMoto from "@/components/CardMoto";
import { fetchMotorcycles } from "@/utils";
import Image from "next/image";
import { types } from "@/constants";

export default async function Home() {
  const allMotorcycles = await fetchMotorcycles();

  const isDataEmpty =
    !Array.isArray(allMotorcycles) ||
    allMotorcycles.length < 1 ||
    !allMotorcycles;
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
            <CustomFilter title="Type" options={types} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allMotorcycles?.map((moto) => (
                <CardMoto moto={moto} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}

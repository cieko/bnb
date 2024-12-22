import Categories from "./components/categories";
import Properties from "./components/properties";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
        <Categories />

        <Properties />
    </main>
  );
}

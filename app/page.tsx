import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import DrugList from "./components/drugList/DrugList";
import ShopsList from "./components/shopsList/ShopsList";

export default function IndexPage() {
  return (
    <>
      <div className="flex">
        <ShopsList />
        <DrugList />
      </div>
      <Counter />
    </>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};

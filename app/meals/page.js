import MealsGrid from "@/components/meals/meals-grid";
import cssClasses from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse all meals shared by our community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={cssClasses.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={cssClasses.highlight}>by you</span>
        </h1>
        <p>Choose your favorite meal and cook it yourself!</p>
        <p className={cssClasses.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={cssClasses.main}>
        <Suspense
          fallback={<p className={cssClasses.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

import MealsGrid from "@/components/meals/meals-grid";
import cssClasses from "./page.module.css";
import Link from "next/link";

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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}

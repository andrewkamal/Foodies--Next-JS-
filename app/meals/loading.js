import cssClasses from "./loading.module.css";
export default function Loading() {
  return <p className={cssClasses.loading}>Fetching meals...</p>;
}

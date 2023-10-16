import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
  return (
    // <main className={styles.main}>
    //   <div className={styles.description}></div>
    // </main>
    <div>
      <HomePage />
    </div>
  );
}

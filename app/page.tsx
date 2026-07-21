import Layout from "@/components/Layout";
import styles from "./page.module.css";
import "./background.css";

export default function Home() {

  const bubbles = Array.from({ length: 20 });

  return (
    <main className={styles.page}>

      <div className="ocean-bg" />

      <div className="bubbles">
        {bubbles.map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <Layout />
      </div>

    </main>
  );
}
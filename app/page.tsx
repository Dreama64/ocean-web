import Layout from "@/components/Layout";
import styles from "./page.module.css";
import "./background.css";

const bubbles = [
  { left: "5%", duration: "8s", delay: "0s" },
  { left: "12%", duration: "11s", delay: "2s" },
  { left: "20%", duration: "7s", delay: "1s" },
  { left: "28%", duration: "10s", delay: "3s" },
  { left: "35%", duration: "9s", delay: "0.5s" },
  { left: "43%", duration: "12s", delay: "2.5s" },
  { left: "50%", duration: "8s", delay: "4s" },
  { left: "58%", duration: "11s", delay: "1.5s" },
  { left: "66%", duration: "9s", delay: "3.5s" },
  { left: "74%", duration: "10s", delay: "2s" },
  { left: "82%", duration: "7s", delay: "0s" },
  { left: "90%", duration: "12s", delay: "4s" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className="ocean-bg" />

      <div className="bubbles">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: bubble.left,
              animationDuration: bubble.duration,
              animationDelay: bubble.delay,
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
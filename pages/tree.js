import { useEffect, useState } from "react";
import styles from "../styles/Tree.module.css";

export default function Tree() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const fullText = "Merry Christmas";
  const fullText2 =
    "May the Christmas season bring you closer to those you love and fill your heart with warmth.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTitleComplete(true);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTitleComplete) return;

    let index = 0;
    const interval2 = setInterval(() => {
      if (index < fullText2.length) {
        setText2(fullText2.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval2);
      }
    }, 150);

    return () => clearInterval(interval2);
  }, [isTitleComplete]);

  return (
    <div className={styles.container}>
      <div className={styles.snow}>
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className={styles.snowflake}
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          ></div>
        ))}
      </div>
      <img src="/tree.svg" alt="Christmas Tree" className={styles.tree} />
      <h1 className={styles.typing}>{text}</h1>
      {isTitleComplete && <h2 className={styles.typing2}>{text2}</h2>}
    </div>
  );
}

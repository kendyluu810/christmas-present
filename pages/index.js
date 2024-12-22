import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/tree");
  };

  return (
    <div className={styles.container}>
      <div onClick={handleClick} className={styles.card}>
        <Image
          src="/envelope.png"
          alt="Christmas Envelope"
          width={400}
          height={400}
        />
      </div>
      <p>Click the card to open!</p>
    </div>
  );
}

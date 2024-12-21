import { useEffect, useState } from "react";
import styles from "../styles/Tree.module.css";

export default function Tree() {
  const [text, setText] = useState(""); // Khởi tạo state cho chuỗi hiện tại
  const [text2, setText2] = useState(""); // State mới cho lời chúc thứ hai
  const [isTitleComplete, setIsTitleComplete] = useState(false); // Trạng thái khi title hoàn thành
  const fullText = "Merry Christmas"; // Chuỗi đầy đủ cần hiển thị
  const fullText2 =
    "May the Christmas season bring you closer to those you love and fill your heart with warmth."; // Lời chúc thứ hai

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Lấy chuỗi con từ fullText
        index++;
      } else {
        clearInterval(interval); // Dừng hiệu ứng khi hoàn tất
        setIsTitleComplete(true); // Đánh dấu khi title đã hoàn thành
      }
    }, 150); // Tốc độ đánh máy (150ms mỗi ký tự)

    // Dọn dẹp interval khi component bị hủy
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTitleComplete) return; // Nếu title chưa hoàn thành, không bắt đầu hiệu ứng của lời chúc

    let index = 0;
    const interval2 = setInterval(() => {
      if (index < fullText2.length) {
        setText2(fullText2.slice(0, index + 1)); // Lấy chuỗi con từ fullText2
        index++;
      } else {
        clearInterval(interval2); // Dừng hiệu ứng khi hoàn tất
      }
    }, 150); // Tốc độ đánh máy (150ms mỗi ký tự)

    // Dọn dẹp interval khi component bị hủy
    return () => clearInterval(interval2);
  }, [isTitleComplete]); // Chạy effect này khi isTitleComplete thay đổi

  return (
    <div className={styles.container}>
      <canvas id="snow" className={styles.snow}></canvas>
      <img src="/tree.svg" alt="Christmas Tree" className={styles.tree} />
      <h1 className={styles.typing}>{text}</h1> {/* Hiển thị chuỗi hiện tại */}
      {isTitleComplete && <h2 className={styles.typing2}>{text2}</h2>}{" "}
      {/* Hiển thị lời chúc khi title hoàn thành */}
    </div>
  );
}

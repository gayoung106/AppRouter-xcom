import Link from "next/link";
import style from "./trend.module.css";

export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className={style.container}>
      <div className={style.count}>실시간 트렌드</div>
      <div className={style.title}>가영쓰</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  );
}

import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";
import sLogo from "../../../public/favicon.svg";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image className={styles.logo} src={sLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 계정이 있나요?</h3>
        <Link href="/i/flow/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}

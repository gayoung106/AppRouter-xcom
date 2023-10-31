import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/favicon.svg";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={Logo} alt="로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <form className={style.search}>
              <input type="search" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

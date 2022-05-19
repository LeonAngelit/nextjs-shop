import React from "react";
import styles from "@styles/DesktopMenu.module.scss";
import Link from "next/link";
const DesktopMenu = ({ handle }) => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <div onClick={handle} onKeyDown={handle} role="button" tabIndex={0}>
            <Link href={"/my-orders"}>My orders</Link>
          </div>
        </li>
        <li>
          <div onClick={handle} onKeyDown={handle} role="button" tabIndex={0}>
            <Link href={"/my-account"}>My account</Link>
          </div>
        </li>
        <li>
          <div onClick={handle} onKeyDown={handle} role="button" tabIndex={0}>
            <Link href={"/"} className={styles["sign-out"]}>
              Sign out
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;

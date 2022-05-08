import React from 'react';
import styles from '@styles/DesktopMenu.module.scss';
import Link from 'next/link';
const DesktopMenu = () => {
    return ( <nav className={styles.menu}>
  <ul>
    <li><Link href={"/my-orders"}>My orders</Link></li>
    <li><Link href={"/my-account"}>My account</Link></li>
    <li><Link href={"/"} className={styles["sign-out"]}>Sign out</Link></li>
  </ul>
</nav>
 );
};
 
export default DesktopMenu;
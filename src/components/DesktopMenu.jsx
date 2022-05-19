import React from 'react';
import styles from '@styles/DesktopMenu.module.scss';
import Link from 'next/link';
const DesktopMenu = ({handle}) => {
    return ( <nav className={styles.menu}>
  <ul>
    <li onClick={handle}><Link href={"/my-orders"}>My orders</Link></li>
    <li onClick={handle}><Link href={"/my-account"}>My account</Link></li>
    <li onClick={handle}><Link href={"/"} className={styles["sign-out"]}>Sign out</Link></li>
  </ul>
</nav>
 );
};
 
export default DesktopMenu;
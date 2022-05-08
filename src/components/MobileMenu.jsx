import React from 'react';
import styles from '@styles/MobileMenu.module.scss';
import Link from 'next/link';

const MobileMenu = () => {
    return ( 
<nav className={styles['mobile-menu']}>
  <h2>CATEGORIES</h2>
  <ul className={styles.section1}>
    <li><Link href="">All</Link></li>
    <li><Link href="">Clothes</Link></li>
    <li><Link href="">Electronics</Link></li>
    <li><Link href="">Furniture</Link></li>
    <li><Link href="">Toys</Link></li>
    <li><Link href="">Others</Link></li>
  </ul>
  <ul className={styles.section2}>
    <li><Link href="/my-orders">My orders</Link></li>
    <li><Link href="/my-account">My account</Link></li>
  </ul>
  <div className={styles['session-info']}>
    <p>camilayakoo@gmail.com</p>
    <Link href="">Sign out</Link>
  </div>
</nav>

     );
};
 
export default MobileMenu;
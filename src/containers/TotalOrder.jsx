import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import styles from '@styles/TotalOrder.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const TotalOrder = ({params, image, index}) => {
  const {setOrder} = useContext(AppContext);
    return(
      <div className={styles["total-order"]}>
      <div className={styles["order-info"]}>
        <p className={styles.date}>{params ? params.date: null}</p>
        <p>{params ? params.articles.length : null} articles</p>
      </div>
      <div className={styles["total-amount"]}>
        <p> ${params ? params.amount: null}</p>
          {image ? <Link href="/my-order"><Image src={image} alt="" width={7} height={12} onClick={() => setOrder(index)}/></Link> : null}
      </div>
      </div>
    );
 
}
 
export default TotalOrder;
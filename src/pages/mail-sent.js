import React from "react";
import styles from "@styles/EmailSent.module.scss";
import Logo from "@assets/logos/logo_yard_sale.svg";
import Email from "@assets/icons/email.svg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const EmailSent = () => {
  return (
    <>
      <Head>
        <title>Email Sent</title>
      </Head>
      <div className={styles[`email-sent`]}>
        <span className={styles[`email__main-title`]}>
          <div className={styles.logoContainer}><Image src={Logo} alt="logo yard sale" /></div>
          <h1>Email has been sent!</h1>
          <p>Please check your inbox for instructions on how to reset the password</p>
        </span>
        <div className={styles[`email-sent-container`]}>
          <Image className={styles[`email-sent-img`]} src={Email} alt="email" />
        </div>
        <button type="submit" className={styles[(`primary-button`, `login-button`)]}>
          Login
        </button>
        <p className={styles.resend}>
          <span>Didn`&apos;`t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </>
  );
};

export default EmailSent;

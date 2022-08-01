import React from "react";
import Head from "next/head";
import EditAccount from "@containers/EditAccount";

export default function MyAccount(){
  return (
    <>
      <Head>
        <title>My account</title>
      </Head>
   <EditAccount />
    </>
  );
};



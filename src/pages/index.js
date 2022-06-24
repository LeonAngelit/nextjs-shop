import Header from "@components/Header";
import ProductList from "@containers/ProductList";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>React Shop AGLeon</title>
      </Head>
      <Header />
      <ProductList />
    </>
  );
}

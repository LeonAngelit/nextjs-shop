import ProductList from "@containers/ProductList";
import Head from "next/head";


export default function Home() {

  return (
    <>
      <Head>
        <title>React Shop AGLeon</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ProductList />
    </>
  );
}

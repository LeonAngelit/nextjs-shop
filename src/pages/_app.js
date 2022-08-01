import "@styles/global.scss";
import "@styles/vars.css";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitilalState";
import Layout from "@containers/Layout";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;

import "@styles/globals.css";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitilalState";
import Layout from "@containers/Layout";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;

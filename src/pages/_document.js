import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8"/>
            <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0W07JF57BG"></Script>
          <script
            dangerouslySetInnerHTML={
              {__html: `window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-0W07JF57BG');`,
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

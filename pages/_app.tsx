import { AppProps } from "next/dist/next-server/lib/router/router";
import "./globals.css";
import Layout from "@components/shared/Layout";
import { ScrollToProvider } from "@utils/useScroll";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <UIProvider>
    <ScrollToProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScrollToProvider>
    // </UIProvider>
  );
}

export default MyApp;

import "intersection-observer";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "./globals.css";
import Layout from "@components/shared/Layout";
import { ScrollToProvider } from "@utils/useScroll";
import { UIProvider } from "../components/ui/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ScrollToProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollToProvider>
    </UIProvider>
  );
}

export default MyApp;

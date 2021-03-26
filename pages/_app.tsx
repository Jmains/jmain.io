import { AppProps } from "next/dist/next-server/lib/router/router";
import "./globals.css";
import Layout from "@components/shared/Layout";
import { UIProvider } from "../components/ui/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;

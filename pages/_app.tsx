import { AppProps } from "next/dist/next-server/lib/router/router";
import "./globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@components/shared/Layout";
import { UIProvider } from "../components/ui/context";
import * as gtag from "@utils/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;

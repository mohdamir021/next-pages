import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Added for layout implementation
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

/**
 * Use this instead for MyApp component to create define and use layouts
 * in all pages file.
 */
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

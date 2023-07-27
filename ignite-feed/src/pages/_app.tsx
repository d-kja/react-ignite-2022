import "@/styles/globals.css"
import "../services/dayjs"
import type { AppProps } from "next/app"

import { Roboto } from "@next/font/google"
import { Header } from "../components/Header"

import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../services/react-query"

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

import "@/styles/globals.css";
import ReactLenis from "@studio-freight/react-lenis";
import { ThemeProvider } from "../../context/ThemeContext";

export default function App({ Component, pageProps }) {
  return <ReactLenis options={{ duration: 2, }} root >
    <ThemeProvider>
      <Component {...pageProps} />

    </ThemeProvider>
  </ReactLenis>

}

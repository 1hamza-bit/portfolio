import "@/styles/globals.css";
import ReactLenis from "@studio-freight/react-lenis";

export default function App({ Component, pageProps }) {
  return <ReactLenis   options={{    duration : 2,  }} root >
   <Component {...pageProps} />
    </ReactLenis>
    
}

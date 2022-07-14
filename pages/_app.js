import Navbar from "../features/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

export default MyApp;

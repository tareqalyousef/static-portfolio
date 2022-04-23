import "../styles/globals.scss";
import "../styles/highlight.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
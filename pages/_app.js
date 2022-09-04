import "../styles/globals.css";
import "../styles/seenon.css";
import "../styles/home.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/about.css";
import "../styles/ecosystem.css";
import "../styles/tokenomics.css";
import "../styles/roadmap.css";
import "../styles/faq.css";
import "../styles/buy.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

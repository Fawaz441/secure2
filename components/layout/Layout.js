import EnterPresale from "./EnterPresale";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      {/* <EnterPresale /> */}
      <Footer />
    </div>
  );
};

export default Layout;

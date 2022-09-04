import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "classnames";
import LogoMobile from "../../assets/svgs/logo-mobile.svg";
import Logo from "../../assets/svgs/logo.svg";
import FiMenu from "../../assets/svgs/fi_menu.svg";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);

  const checkScreen = useCallback(() => {
    if (window.innerWidth <= 768) {
      setShowNav(false);
      return;
    }
    setShowNav(true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkScreen);
    return () => {
      window.addEventListener("resize", checkScreen);
    };
  }, [checkScreen]);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <header>
      <nav className="navigation px-3 lg:px-5">
        <div className="mobile-nav justify-between flex md:hidden my-4">
          <Link href="/">
            <div className="logo">
              <Image src={LogoMobile} alt="logo" />
            </div>
          </Link>
          <button onClick={toggleNav} className="togglebtn">
            <Image src={FiMenu} alt="menu" />
          </button>
        </div>

        <div
          className={clsx(
            "nav-links mx-auto items-center justify-center space-x-6 py-6 !hidden",
            { "!block md:!flex": showNav }
          )}
        >
          <ul>
            <li>
              <Link href="/about"> About</Link>
            </li>
            <li>
              <Link href="/tokenomics"> Tokenomics</Link>
            </li>
            <li>
              <Link href="/roadmap"> Roadmap</Link>
            </li>
            <li>
              <Link href="/buy"> How to buy</Link>
            </li>
          </ul>
          <Link href="/">
            <div className="logo">
              <Image src={Logo} alt="logo" className="!h-5" />
            </div>
          </Link>
          <ul>
            <li>
              <Link href="/ecosystem"> Our Ecosystem</Link>
            </li>
            <li>
              <a href="/privesecure.pdf"> WhitePaper</a>
            </li>
            <li>
              <Link href="/faq"> FAQ</Link>
            </li>
            <li>
              <Link href="/buy">
                <div className="btn-nav">
                  <span className="ico mb-[-4px] mr-1"></span>
                  <span>Claim</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/buy">
                <button className="btn-nav">Buy</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

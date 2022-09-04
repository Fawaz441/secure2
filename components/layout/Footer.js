import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/svgs/logo.svg";
import Telegram from "../../assets/svgs/social/telegram.svg";
import Twitter from "../../assets/svgs/social/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer py-10 px-10 md:px-16 text-base md:text-sm">
      <div className="footer-content pb-16 py-8 md:py-16">
        <div className="logo md:mb-0 mb-8">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="links">
          <h4>Links</h4>
          <nav>
            <ul className="md:mr-10">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/tokenomics">Tokenomics</Link>
              </li>
              <li>
                <Link href="/roadmap">Roadmap</Link>
              </li>
            </ul>
            <ul className="md:mr-6">
              <li>
                <a href="/privesecure.pdf">WhitePaper</a>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <a
                  href="https://presale.privesecure.io/register"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnterPresale
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright © 2022 Privesecure protocol. All rights reserved</p>
        <div className="socials">
          <div className="social-text pr-4">Connect With Us</div>
          <div className="social-icons">
            <a
              href="https://t.me/PriveSecureOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Telegram} alt="telegram" />
            </a>
            <a
              href="https://twitter.com/PriveSecure"
              target="_blank"
              className="pl-3"
              rel="noreferrer"
            >
              <Image src={Twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

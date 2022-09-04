import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import SeenOn from "../components/general/SeenOn";
import Folder1 from "../assets/svgs/folder1.svg";
import Monitor1 from "../assets/svgs/monitor1.svg";
import Envelope1 from "../assets/svgs/envelope1.svg";
import Pc1 from "../assets/svgs/pc1.svg";
import SecureImage1 from "../assets/svgs/secureimg1.svg";
import Lock1 from "../assets/svgs/lock1.svg";
import Phone2 from "../assets/svgs/phone2.svg";
import Bubble2 from "../assets/svgs/bubble2.svg";
import Bubble5 from "../assets/svgs/bubble5.svg";
import Bubble6 from "../assets/svgs/bubble6.svg";
import HeroImage from "../assets/svgs/heroimage.svg";
import coinMarket from "../assets/svgs/coinmarket.svg";
import coinBase from "../assets/svgs/coinbase.svg";
import coinGeckogrey from "../assets/svgs/coingeckogrey.svg";
import coinTelegraph from "../assets/svgs/cointelegraph.svg";
import Forbes from "../assets/svgs/forbes.svg";
import TriangleAlert from "../assets/svgs/triangle-alert.svg";
import ShieldKeyhole from "../assets/svgs/shield-keyhole.svg";
import UIPreferences from "../assets/svgs/ui-preferences.svg";
import ArrowCycle from "../assets/svgs/arrow-cycle.svg";
import BxLock from "../assets/svgs/bx_lock.svg";
import CloudSecurity from "../assets/svgs/cloud-security.svg";
import Frame159 from "../assets/svgs/frame-159.svg";
import secureCloudMobile from "../assets/images/securecloudmobile.png";

const Home = () => {
  return (
    <main>
      <div className="hero-banner pb-48">
        <section className="hero">
          <div className="container mx-auto items-center pt-2 space-y-0">
            <div className="hero-text">
              <h1 className="text-gradient text-3xl lg:text-5xl mb-4 lg:mr-10 lg:mt-10 font-extrabold">
                Securely save your files and information with Privesecure.
              </h1>
              <p className="mt-3 md:mb-10 mb-4 text-xl md:pr-10">
                Aspiring to be the most comprehensive and secure cloud service
                package available.
              </p>
              <div className="btn-container">
                <Link href="/">
                  <div className="btn md:my-6 md:ml-4 rounded-md presale-btn flex items-center space-x-1 cursor-pointer">
                    <span className="ico mb-[-4px]"></span>
                    <span>Claim</span>
                  </div>
                </Link>
                <Link href="/buy">
                  <div className="btn md:my-6 md:ml-4 rounded-md presale-btn cursor-pointer">
                    Buy Presale
                  </div>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <Image src={HeroImage} alt="" className="block xl:hidden" />
              <div className="image-frame xl:block hidden">
                <Image src={Folder1} alt="folder" className="folder" />
                <Image src={Monitor1} alt="folder" className="monitor" />
                <Image src={Envelope1} alt="folder" className="envelope" />
                <Image src={Pc1} alt="folder" className="pc" />
                <Image src={SecureImage1} alt="folder" className="secure-img" />
                <Image src={Lock1} alt="folder" className="lock" />
                <Image src={Phone2} alt="folder" className="phone-2" />
                <Image src={Bubble2} alt="folder" className="bubble-2" />
                <Image src={Bubble5} alt="folder" className="bubble-6" />
                <Image src={Bubble6} alt="folder" className="bubble-5" />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto mt-10 featured-on pb-10">
          <p className="md:text-xl text-2xl">We are Featured on</p>
          <div className="brands">
            <Image src={coinMarket} alt="Coin Market Cap" />
            <Image src={coinBase} alt="CoinBase" />
            <Image src={coinGeckogrey} alt="CoinGecko" />
            <Image src={Forbes} alt="Forbes" />
            <Image src={coinTelegraph} alt="Coin Telegarph" />
          </div>
        </div>
      </div>

      <section className="features md:pt-24 pt-16" id="features">
        <div className="container mx-auto">
          <h2 className="mx-auto text-gradient mb-10 text-3xl center">
            Our Features
          </h2>
          <div className="features-container mt-10 md:mb-10 mb-5">
            <div className="feature-box">
              <Image
                src={TriangleAlert}
                alt="triangle alert"
                className="mb-8"
              />

              <p>Intelligent threat detection and data leak prevention</p>
            </div>
            <div className="feature-box">
              <Image
                src={ShieldKeyhole}
                alt="triangle alert"
                className="mb-8"
              />

              <p>Security and compliance tailored to your requirements</p>
            </div>
            <div className="feature-box">
              <Image
                src={UIPreferences}
                alt="triangle alert"
                className="mb-8"
              />

              <p>Zero-trust security controls</p>
            </div>
            <div className="feature-box">
              <Image src={ArrowCycle} alt="arrow cycle" className="mb-8" />

              <p>99.9% uptime guarantee</p>
            </div>
            <div className="feature-box">
              <Image src={BxLock} alt="lock" className="mb-8" />

              <p>End-to-end data encryption</p>
            </div>
            <div className="feature-box">
              <Image
                src={CloudSecurity}
                alt="cloud-security"
                className="mb-8"
              />

              <p>Capabilities for advanced cybersecurity</p>
            </div>
          </div>
          <Link href="/ecosystem">
            <div className="btn my-4 mx-auto cursor-pointer">
              Learn more about Privesecure
            </div>
          </Link>
        </div>
      </section>

      <section className="secure md:pt-24">
        <div className="container mx-auto">
          <div className="text-container mt-16">
            <div className="cloud-img md:hidden mobile">
              <Image src={secureCloudMobile} alt="cloud" />
            </div>
            <h3 className="text-2xl mb-6">Secure Cloud Adaptability</h3>
            <p className="mb-10">
              Our platform enables you to access your data from any location, on
              any device, and at any time. Monitor and manage your backups
              conveniently from anywhere: check the status of your backups or
              initiate a new one at any time. Take Privesecure Cloud with you
              everywhere you go. Your data is always available to you. Your data
              is always secure. Your information is always accessible.
            </p>
            <Link href="/ecosystem">
              <div className="btn py-3 px-6 my-2 rounded-md cursor-pointer">
                Read more
              </div>
            </Link>
          </div>
          <div className="cloud-img hidden md:block">
            <Image src={Frame159} alt="cloud" />
            <Image src={Bubble2} alt="bubble" className="bubble1" />
            <Image src={Bubble2} alt="bubble" className="bubble2" />
          </div>
        </div>
      </section>
      <SeenOn />
    </main>
  );
};

export default Home;

import Image from "next/image";
import alphr from "../../assets/svgs/alphr.svg";
import coincheckup from "../../assets/svgs/coincheckup.svg";
import businessStandard from "../../assets/svgs/businessstandard.svg";
import businessTimes from "../../assets/svgs/businesstimes.svg";
import beInCrypto from "../../assets/svgs/beincrypto.svg";
import coinMarketBag from "../../assets/svgs/coinmarketbag.svg";
import techTimes from "../../assets/svgs/techtimes.svg";
import benziga from "../../assets/svgs/benziga.svg";
import coincodex from "../../assets/svgs/coincodex.svg";
import economicTimes from "../../assets/svgs/economictimes.svg";
import cryptoNews from "../../assets/svgs/cryptonews.svg";
import insiderMonkey from "../../assets/svgs/insidermonkey.svg";
import newsBTC from "../../assets/svgs/newsbtc.svg";
import bitCoinNews from "../../assets/svgs/bitcoinnews.svg";
import jerusalemPost from "../../assets/svgs/jerusalempost.svg";
import dailyCoin from "../../assets/svgs/dailycoin.svg";
import coinTelegraph from "../../assets/svgs/cointelegraph.svg";
import theGuardian from "../../assets/svgs/theguardian.svg";
import analyticInsight from "../../assets/svgs/analyticinsight.svg";

const SeenOn = () => {
  return (
    <section className="seen-on md:mb-20 mt-16">
      <div className="container mx-auto">
        <h3 className="text-xl">As seen on</h3>
        <div className="brands md:mt-16">
          <div>
            <Image src={alphr} alt="alphr" />
            <Image src={coincheckup} alt="Coin checkup" />
            <Image
              src={businessStandard}
              alt="business Standard"
              className="hidden md:block"
            />
            <Image
              src={businessTimes}
              alt="business Times"
              className="hidden md:block"
            />
          </div>
          <div>
            <Image src={beInCrypto} alt="be in Crypto" />
            <Image src={coinMarketBag} alt="Coin Market Bag" />
            <Image
              src={techTimes}
              alt="tech times"
              className="hidden md:block"
            />
            <Image src={benziga} alt="Benziga" />
          </div>
          <div>
            <Image src={coincodex} alt="coin codex" />
            <Image src={economicTimes} alt="economic times" />
            <Image src={cryptoNews} alt="crypto News" />
            <Image
              src={insiderMonkey}
              alt="insider Monkey"
              className="hidden md:block"
            />
          </div>
          <div>
            <Image src={newsBTC} alt="newsBTC" />
            <Image src={bitCoinNews} alt="bitCoinNews" />
            <Image src={jerusalemPost} alt="jerusalemPost" />
            <Image
              src={dailyCoin}
              alt="dailyCoin"
              className="hidden md:block"
            />
          </div>

          <div>
            <Image src={coinTelegraph} alt="coinTelegraph" />
            <Image src={theGuardian} alt="theGuardian" />
            <Image src={analyticInsight} alt="Analytic Insight" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeenOn;

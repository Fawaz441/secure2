import WalletModal from "../components/modals/WalletModal";

const Buy = () => {
  return (
    <main id="buy">
      <section className="mission">
        <div className="container mx-auto md:my-32 my-10">
          <h2 className="text-gradient-2 md:text-4xl text-xl mb-6">
            Get in Early
          </h2>
          <p className="md:max-w-md">
            Join the Privesecure presale right away! Purchasing your first $PRSC
            tokens is now simpler than ever thanks to our step-by-step
            instructions. Simply click the connect wallet button when you are
            ready to go.
          </p>
          <WalletModal />

          <div className="mt-5">
            <p>
              1 USDT = <br />
              USDT RAISED : $1,145,382.95 OF $2,000,000
            </p>
          </div>
          <div className="progress mt-10">
            <div className="progress-done"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-gradient mb-10 text-3xl">Step 1</h2>
            <p className="md:max-w-md text-center">
              To obtain your $PRSC tokens, you will need to establish a digital
              wallet. Although we suggest using Metamask as your wallet, if you
              already have another wallet, you may be able to utilise wallet
              connect
            </p>
          </div>
          <br />
          <br />
          <div className="flex flex-col items-center">
            <h2 className="text-gradient mb-10 text-3xl">Step 2</h2>
            <p className="md:max-w-md text-center">
              After completing this, it&apos;s time to purchase BNB. On
              exchanges like Binance, this is achievable. Once you&apos;ve made
              the purchase, send the BNB to your wallet.
            </p>
          </div>
          <br />
          <br />
          <div className="flex flex-col items-center">
            <h2 className="text-gradient mb-10 text-3xl">Step 3</h2>
            <p className="md:max-w-md text-center">
              A pop-up will show once you click Connect Wallet. You will be sent
              to a new page after selecting your chosen wallet. Once you are
              there, click the &quot;Buy With BNB&quot; button to bring up
              another pop-up. The transaction will be completed after you click
              purchase.
            </p>
          </div>
          <br />
          <br />
          <div className="flex flex-col items-center">
            <h2 className="text-gradient mb-10 text-3xl">Step 4</h2>
            <p className="md:max-w-md text-center">
              After the presale is over, you may access your PRSC tokens through
              the primary website (privesecure.io). Your tokens will appear in
              your wallet once the presale has ended.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Buy;

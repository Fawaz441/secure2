import Image from "next/image";
import Bubble2 from "../assets/svgs/bubble2.svg";
import Stages from "../components/roadmap/Stages";

const Roadmap = () => {
  return (
    <main className="roadmap-wrapper">
      <section className="roadmap">
        <Image src={Bubble2} alt="bubble" className="bubble1" />
        <Image src={Bubble2} alt="bubble" className="bubble2" />
        <div className="container mx-auto">
          <h2 className="text-gradient mb-3 md:text-4xl text-xl">Roadmap</h2>
          <p className="md:max-w-xs-2">
            Scaling up our services is a priority for us. This has led to a plan
            to keep us on our toes.
          </p>
          <div>
            <Stages />
          </div>
        </div>
      </section>
      <section className="form-wrapper md:mt-32 pt-24 md:mb-16">
        <div className="container mx-auto"></div>
      </section>
    </main>
  );
};

export default Roadmap;

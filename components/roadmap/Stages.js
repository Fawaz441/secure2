import React, { useEffect } from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const responsive = {
  0: {
    items: 1,
    nav: false,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
  },
  600: {
    items: 2,
    nav: false,
    center: false,
    loop: true,
    dots: false,
    touchDrag: true,
    mouseDrag: true,
  },
  1000: {
    items: 3,
    nav: false,
    center: false,
    loop: true,
    dots: false,
    touchDrag: true,
    mouseDrag: true,
  },
  mobile: null,
  windowWidth: null,
};

const stages = [
  {
    index: "I",
    title: (
      <h3 className="mb-5">
        Stage I: <br /> Creation of Website
      </h3>
    ),
    description:
      "The first stage will focus on designing and establishing the official website for Privesecure.",
  },
  {
    index: "II",
    title: (
      <h3>
        Stage II: <br /> Whitepaper release.
      </h3>
    ),
    description:
      "Stage 2’s primary goal will be to release and publish project documentation. On this page, you'll find a complete breakdown of the project.",
  },
  {
    index: "III",
    title: (
      <h3 className="mb-5">
        Stage III: <br /> Private Sale
      </h3>
    ),
    description:
      "Only a small number of investors and other interested parties are allowed to participate in the initiative at this stage.",
  },
  {
    index: "IV",
    title: (
      <h3 className="mb-5">
        Stage IV: <br /> Public Sale
      </h3>
    ),
    description: "Access to the purchase of the Privesecure token.",
  },
  {
    index: "V",
    title: (
      <h3 className="mb-5">
        Stage V: <br /> Exchange Listing
      </h3>
    ),
    description:
      "The native tokens will be listed on major centralized and decentralized exchanges. ",
  },
  {
    index: "9",
    title: (
      <h3 className="mb-5">
        Stage 9: <br /> Public Relations and Marketing
      </h3>
    ),
    description:
      "The procedure will be advertised extensively in order to promote awareness. We plan to use a range of marketing methods, including the help of renowned cryptocurrency influencers.",
  },
  {
    index: "10",
    title: (
      <h3 className="mb-5">
        Stage 10: <br /> Launch of the Privesecure
      </h3>
    ),
    description: "",
  },
];

const Stages = () => {
  return (
    <div className="stages-wrapper">
      <OwlCarousel responsive={responsive} className="mt-10 stages-carousel">
        {stages.map((stage, index) => (
          <div key={index} className="stage">
            {stage.title}
            <p>{stage.description}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Stages;

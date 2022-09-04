import FaqBox from "../components/faqs/FaqBox";

const faqs = [
  {
    id: 1,
    question: "What is Privesecure?",
    answer:
      "Privesecure is an open-source cloud storage platform for cryptocurrency users. ",
  },
  {
    id: 2,
    question:
      "What's the difference between open-source software and other types of software?",
    answer:
      'Certain software contains source code that can only be modified by the individual, team, or organization who generated it — and retains exclusive control over it. This type of software is referred to as "proprietary" or "closed source." Open-source software is distinct from proprietary software. Its creators make the source code open to anybody who wishes to examine, copy, learn from, modify, or distribute it.',
  },
  {
    id: 3,
    question: "Is Privesecure just valuable to programmers?",
    answer:
      "No, both programmers and non-programmers gain from open source technology and thinking. ",
  },
  {
    id: 4,
    question: "Who is Privesecure for?",
    answer:
      "It was designed for cryptocurrency users to securely store and access data on the internet.  ",
  },
];

const Faq = () => {
  return (
    <section className="faq mt-20 md:mb-24">
      <div className="container mx-auto">
        <h2 className="text-gradient-2 md:text-3xl mb-10 md:mb-20">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq) => (
          <div className="faq-container" key={faq.id}>
            <FaqBox faq={faq} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;

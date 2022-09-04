import Image from "next/image";
import saleChart from "../assets/svgs/salechart.svg";
import ProceedChart from "../assets/svgs/proceedchart.svg";
import Bubble2 from "../assets/svgs/bubble2.svg";

const stages = [
  {
    stageNo: 1,
    numberOfTokens: "7.2 Million Tokens",
    date: "4th August to 22nd September",
    allocations: "18%",
  },
  {
    stageNo: 2,
    numberOfTokens: "3.0 Million Tokens",
    date: "22nd September to 27th October",
    allocations: "7.5%",
  },
  {
    stageNo: 1,
    numberOfTokens: "1.8 Million Tokens",
    date: "27th October to 8th December",
    allocations: "4.5%",
  },
];

const Tokenomics = () => {
  return (
    <main>
      <section className="tokenomics px-10 md:px-16">
        <div className="container mx-auto py-16">
          <h2 className="text-gradient md:text-4xl text-xl">Tokenomics</h2>
          <p className="md:max-w-xs-2 md:my-6 mb-6 mt-3">
            The total supply of the Privesecure Tokens is 40M as it is
            distributed as follows:
          </p>

          <div className="charts my-10">
            <div>
              <Image src={saleChart} alt="" />
            </div>
            <div>
              <Image src={ProceedChart} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="tables pb-16">
        <section className="md:block hidden">
          <div className="container mx-auto my-10">
            <h3 className="text-center">Token Details</h3>
            <div className="table-border">
              <table className="rwd-table">
                <tr>
                  <th>Total Supply</th>
                  <th>Ticker</th>
                  <th>Presale</th>
                  <th>Launch Date</th>
                  <th>Start Price</th>
                </tr>
                <tr>
                  <td data-th="Total Supply">40 Million</td>
                  <td data-th="Ticker">PRSC</td>
                  <td data-th="Presale">4th August - 8th December 2022</td>
                  <td data-th="Launch Date">8th December 2022</td>
                  <td data-th="Start Price">$0.000034</td>
                </tr>
              </table>
            </div>
          </div>
        </section>

        <Image src={Bubble2} alt="bubble" className="bubble1 hidden md:block" />
        <Image src={Bubble2} alt="bubble" className="bubble2 hidden md:block" />

        <section className="mt-32 md:block hidden">
          <div className="container mx-auto my-10">
            <h3 className="text-center">Presale Stage</h3>
            <div className="table-border">
              <table className="rwd-table">
                <tr>
                  <th>Stages</th>
                  <th>Date</th>
                  <th>Number of Tokens</th>
                  <th>Allocations</th>
                </tr>
                <tr>
                  <td data-th="Stages">Stage 1</td>
                  <td data-th="Date">{stages[0].date}</td>
                  <td data-th="Number of Tokens">{stages[0].numberOfTokens}</td>
                  <td data-th="Allocations">{stages[0].allocations}</td>
                </tr>
                <tr>
                  <td data-th="Stages">Stage 2</td>
                  <td data-th="Date">{stages[1].date}</td>
                  <td data-th="Number of Tokens">{stages[1].numberOfTokens}</td>
                  <td data-th="Allocations">{stages[1].allocations}</td>
                </tr>
                <tr>
                  <td data-th="Stages">Stage 3</td>
                  <td data-th="Date">{stages[2].date}</td>
                  <td data-th="Number of Tokens">{stages[2].numberOfTokens}</td>
                  <td data-th="Allocations">{stages[2].allocations}</td>
                </tr>
              </table>
            </div>
          </div>
        </section>

        <section className="md:hidden block">
          <div className="container mx-auto mb-32">
            <h3 className="text-center mb-3">Token Details</h3>
            <div className="table-border">
              <div className="table-m">
                <div className="row">
                  <div>Total Supply</div>
                  <div>70M Tokens</div>
                </div>

                <div className="row">
                  <div>Ticker</div>
                  <div>PRSC</div>
                </div>

                <div className="row">
                  <div>Presale</div>
                  <div>4th August - 8th December 2022</div>
                </div>

                <div className="row">
                  <div>Launch Date</div>
                  <div>8th December 2022</div>
                </div>

                <div className="row">
                  <div>Start Price</div>
                  <div>$0.000034</div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto">
            <h3 className="text-center mb-3">Presale Stage</h3>
            <div className="table-border">
              <div className="table-m">
                <div className="head">Stage 1</div>
                <div className="row">
                  <div>Date</div>
                  <div>{stages[0].date}</div>
                </div>

                <div className="row">
                  <div>Number of Tokens</div>
                  <div>{stages[0].numberOfTokens}</div>
                </div>

                <div className="row">
                  <div>Allocations</div>
                  <div>7.5%</div>
                </div>

                <div className="row">
                  <div>Bonus</div>
                  <div>3%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="table-border">
              <div className="table-m">
                <div className="head">Stage 2</div>
                <div className="row">
                  <div>Date</div>
                  <div>{stages[1].date}</div>
                </div>

                <div className="row">
                  <div>Number of Tokens</div>
                  <div>{stages[1].numberOfTokens}</div>
                </div>

                <div className="row">
                  <div>Allocations</div>
                  <div>{stages[1].allocations}</div>
                </div>

                <div className="row">
                  <div>Bonus</div>
                  <div>3%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="table-border">
              <div className="table-m">
                <div className="head">Stage 3</div>
                <div className="row">
                  <div>Date</div>
                  <div>{stages[2].date}</div>
                </div>

                <div className="row">
                  <div>Number of Tokens</div>
                  <div>{stages[2].numberOfTokens}</div>
                </div>

                <div className="row">
                  <div>Allocations</div>
                  <div>{stages[2].allocations}</div>
                </div>

                <div className="row">
                  <div>Bonus</div>
                  <div>3%</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Tokenomics;

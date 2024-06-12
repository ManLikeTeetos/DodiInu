import Hero from "../../styles/assets/images/Image31.png";
import { useContract } from "../../hooks/useContract.jsx";

export default function HeroSection() {
  const { totalSupply } = useContract();

  const percentageStaked = (totalSupply / 7280000000.0) * 100;
  const circulatingDodi = 7280000000.0 - totalSupply;
  const formatcirculating = Number(circulatingDodi)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");

  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="hero-wrapper">
          <div className="hero-2">
            <div className="hero-3">
              <div className="column-hero">
                <img
                  loading="lazy"
                  src={Hero}
                  className="img-hero"
                  alt="hero"
                />
              </div>
              <div className="column-hero-2">
                <div className="hero-4">
                  <div className="hero-5">We all gonna make it</div>
                  <div className="hero-6">
                    Decentralized Platform For All DOGS In Crypto World To Make
                    Stable Daily Money And Grow Richer. Buy{" "}
                    <span className="green-color"> $DODI </span>Stake And Earn
                    Passive Income{" "}
                  </div>
                  <div className="hero-7">
                    <div className="hero-8">
                      <div className="column-hero-3">
                        <a
                          href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
                          target="_blank"
                        >
                          <div className="hero-9">BUY $DODI</div>
                        </a>
                      </div>
                      <div className="column-hero-4">
                        <a
                          href="https://pancakeswap.finance/swap?inputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182&outputCurrency=0x55d398326f99059fF775485246999027B3197955"
                          target="_blank"
                        >
                          <div className="hero-10">SELL $DODI</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hero-11">
                    CA: 0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-12">
            <div className="hero-13">
              <div className="hero-14">$DODI Price </div>
              <div className="hero-15">$0.0000556</div>
            </div>
            <div className="hero-16">
              <div className="hero-17">CIRCULATING DODI</div>
              <div className="hero-18">
                {formatcirculating}
                <span className="green-color"> DODI</span>
              </div>
            </div>
            <div className="hero-19">
              <div className="hero-20">$DODI Staked</div>
              <div className="hero-21">
                {Number(percentageStaked).toFixed(6)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Hero from "../../styles/assets/images/Image31.png";
import { useContract } from "../../hooks/useContract.jsx";

const colorStyleHero = {
	r: 0,
	g: 205,
	b: 106,
	a: 1
};

export default function HeroSection(){

	const {
		balance,
		stake,
		latestStakes,
		claim,
		records,
		totalSupply,
		totalEarned,
		error,
	} = useContract();

	const percentageStaked = (totalSupply / 7280000000.00) * 100;
	const circulatingDodi = (7280000000.00 - totalSupply);

	return(
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
										Lorem ipsum dolor sit amet consectetur. Nullam in diam cursus
										purus vitae lectus a. Egestas arcu convallis morbi leo quis
										velit. Dis faucibus{" "}
									</div>
									<div className="hero-7">
										<div className="hero-8">
											<div className="column-hero-3">
												<div className="hero-9">BUY $DODI</div>
											</div>
											<div className="column-hero-4">
												<div className="hero-10">SELL $DODI</div>
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
							<div className="hero-15">$0.0000137</div>
						</div>
						<div className="hero-16">
							<div className="hero-17">CIRCULATING DODI</div>
							<div className="hero-18">
								{Number(circulatingDodi).toLocaleString('en-US', { maximumFractionDigits: 2 })}
								<span style={{ color: `rgba(${colorStyleHero.r}, ${colorStyleHero.g}, ${colorStyleHero.b}, ${colorStyleHero.a})` }}>DODI</span>
							</div>
						</div>
						<div className="hero-19">
							<div className="hero-20">$DODI Staked</div>
							<div className="hero-21">{Number(percentageStaked).toFixed(6)}%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
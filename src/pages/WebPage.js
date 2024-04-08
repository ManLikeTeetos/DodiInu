import "../styles/WebPage.css";
import "../styles/Hero.css";
import "../styles/About.css";
import DodiLogo from '../styles/assets/images/Dodilogo.svg';
import { Columns, Column, Image } from "@components";

const colorStyle = {
	color: {
		r: 230,
		g: 230,
		b: 230,
		a: 1
	}
};

const colorStyleHero = {
	r: 0,
	g: 205,
	b: 106,
	a: 1
};

function WebPage(){
  return(
	<>
	  <div className="div">
		  <div className="div-2">
			  <div className="column">
				  <div className="div-3">
					  <img
						  loading="lazy"
						  src={DodiLogo}
						  className="img"
						  alt="Dodi Logo"
					  />
					  <div className="div-4">
						  <span style={{ color: `rgba(${colorStyle.color.r}, ${colorStyle.color.g}, ${colorStyle.color.b}, ${colorStyle.color.a})` }}>DODI </span>INU
					  </div>
				  </div>
			  </div>
			  <div className="column-2">
				  <div className="div-5">
					  <div className="div-6">Home</div>
					  <div className="div-7">Staking</div>
					  <div className="div-8">White paper</div>
				  </div>
			  </div>
			  <div className="column-3">
				  <div className="div-9">
					  <div className="div-10">Buy DODI</div>
					  <div className="div-11">Connect Wallet</div>
				  </div>
			  </div>
		  </div>
	  </div>
	  <div className="hero">
		<div className="hero-bg">
			<div className="hero-2">
				<div className="hero-3">
					<div className="column-hero">
						<img
							loading="lazy"
							srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb00a4511cf83fa6cf152d47e994ad38d361bae3c743814d4a8bec0ae1d971d?apiKey=659ef7699bbb4e3e91dbdeecd0d69f59&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb00a4511cf83fa6cf152d47e994ad38d361bae3c743814d4a8bec0ae1d971d?apiKey=659ef7699bbb4e3e91dbdeecd0d69f59&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb00a4511cf83fa6cf152d47e994ad38d361bae3c743814d4a8bec0ae1d971d?apiKey=659ef7699bbb4e3e91dbdeecd0d69f59&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb00a4511cf83fa6cf152d47e994ad38d361bae3c743814d4a8bec0ae1d971d?apiKey=659ef7699bbb4e3e91dbdeecd0d69f59&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb00a4511cf83fa6cf152d47e994ad38d361bae3c743814d4a8bec0ae1d971d?apiKey=659ef7699bbb4e3e91dbdeecd0d69f59&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb00a4511cf83fa6cf152d47e994ad38d361bae3c743814d4a8bec0ae1d971d?apiKey=659ef7699bbb4e3e91dbdeecd0d69f59&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb00a4511cf83fa6cf152d47e994ad38d361bae3c743814d4a8bec0ae1d971d?apiKey=659ef7699bbb4e3e91dbdeecd0d69f59&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb00a4511cf83fa6cf152d47e994ad38d361bae3c743814d4a8bec0ae1d971d?apiKey=659ef7699bbb4e3e91dbdeecd0d69f59&"
							className="img-hero"
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
										<div className="hero-9">BUY NOW</div>
									</div>
									<div className="column-hero-4">
										<div className="hero-10">STAKE NOW</div>
									</div>
								</div>
							</div>
							<div className="hero-11">
								CA: D6NewxS3SPkeEEbvGQax2E4MiCjuvjAhTUkboXZLwKM1
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hero-12">
				<div className="hero-13">
					<div className="hero-14">$DODI Price </div>
					<div className="hero-15">$0.00000412</div>
				</div>
				<div className="hero-16">
					<div className="hero-17">TOTAL DODI</div>
					<div className="hero-18">
						2,565,990,000.00{" "}
						<span style={{ color: `rgba(${colorStyleHero.r}, ${colorStyleHero.g}, ${colorStyleHero.b}, ${colorStyleHero.a})` }}>DODI</span>
					</div>
				</div>
				<div className="hero-19">
					<div className="hero-20">DODI INU Staked</div>
					<div className="hero-21">62%</div>
				</div>
			</div>
		</div>
	  </div>
	  <div className="about">
			<div className="about-title">
				About 
				<span className="dodi-span">DODI</span>
			</div>
			<div className="about-segment">
				<div className="about-segment-header">MISSION</div>
				<div className="about-segment-header">PROBLEM</div>
				<div className="about-segment-header">SOLUTION</div>
				<div className="about-segment-header">GOAL</div>
			</div>
			<div className="about-buy-button">
				BUY DODI
			</div>
      </div>
	</>
  )
}

export default WebPage;

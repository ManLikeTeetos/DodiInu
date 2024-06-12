import '../styles/DodiWeb.css'
import { ReactComponent as Logo } from '../../src/styles/assets/vectors/LogoDiodiInu317_x2.svg';
import { useContract } from "../../hooks/useContract.jsx";

function LandingPage() {

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


  return (
	  <div className="diodi-web-page">
		  <div className="scroll">
			  <div className="hero-section">
				  <div className="frame-19">
				  </div>
				  <div className="frame-104">
					  <div className="image-31">
					  </div>
					  <div className="div-column">
						  <div className="ptitle">
							  <span className="we-all-gonna-make-it">
								  We all gonna make it
							  </span>
						  </div>
						  <div className="psubtitle">
							  <span className="lorem-ipsum-dolor-sit-amet-consectetur-nullam-in-diam-cursus-purus-vitae-lectus-aegestas-arcu-convallis-morbi-leo-quis-velit-dis-faucibus">
								  Lorem ipsum dolor sit amet consectetur. Nullam in diam cursus purus vitae lectus a. Egestas arcu convallis morbi leo quis velit. Dis  faucibus
							  </span>
						  </div>
						  <div className="div-buttons">
							  <div className="linkmargin">
								  <div className="link">
									 <a
                          href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
                          target="_blank"
                        >
									  <span className="buy-now">
										  BUY $DODI
									  </span>
									  </a>
								  </div>
							  </div>
							  <div className="linkmargin-1">
								  <div className="button">
									  <span className="stake-now">
										  STAKE $DODI
									  </span>
								  </div>
							  </div>
						  </div>
						  <span className="ca-d-6-newx-s-3-spke-eebv-gqax-2-e-4-mi-cjuvj-ah-tukbo-xzlw-km-1">
							  CA: D6NewxS3SPkeEEbvGQax2E4MiCjuvjAhTUkboXZLwKM1
						  </span>
					  </div>
				  </div>
				  <div className="div-columns">
					  <div className="div-column-1">
						  <div className="dodi-price">
							  $DODI Price
						  </div>
						  <div className="ptitle-1">
							  <span className="container">
								 $0.0000556
							  </span>
						  </div>
					  </div>
					  <div className="div-column-2">
						  <div className="total-dodi">
							  TOTAL DODI
						  </div>
						  <div className="ptitle-2">
							  <p className="dodi">
								  <span className="dodi-sub-0"></span><span></span>
							  </p>
						  </div>
					  </div>
					  <div className="div-column-3">
						  <div className="dodi-inu-staked">
							  DODI INU Staked
						  </div>
						  <div className="ptitle-3">
							  <span className="container-1">
								  {percentageStaked}%
							  </span>
						  </div>
					  </div>
				  </div>
			  </div>
			  <div className="about-us">
				  <div className="ptitle-4">
					  <p className="about-dodi">
						  <span className="about-dodi-sub-0"></span><span></span>
					  </p>
				  </div>
				  <div className="nav">
					  <div className="tab">
						  <div className="link-1">
							  <span className="mission">
								  MISSION
							  </span>
						  </div>
					  </div>
					  <div className="tab-1">
						  <div className="link-2">
							  <span className="problem">
								  PROBLEM
							  </span>
						  </div>
					  </div>
					  <div className="tab-2">
						  <div className="link-3">
							  <span className="solution">
								  SOLUTION
							  </span>
						  </div>
					  </div>
					  <div className="tab-3">
						  <div className="link-4">
							  <span className="goal">
								  GOAL
							  </span>
						  </div>
					  </div>
				  </div>
				  <div className="div-btabs">
					  <div className="frame-93">
						  <div className="whats-app-image-20240402-at-10511">
						  </div>
						  <div className="frame-931">
							  <div className="div-column-4">
								  <div className="div-column-5">
									  <div className="ellipse-7">
									  </div>
									  <div className="dog-22">
									  </div>
								  </div>
								  <div className="div-columnmargin">
									  <div className="ptitle-5">
										  <span className="about-us-1">
											  About Us
										  </span>
									  </div>
									  <div className="psubtitle-1">
										  <span className="lorem-ipsum-dolor-sit-amet-consectetur-egestas-tempus-vitae-lorem-urna-luctus-amet-leo-at-commodo-mattis-nisl">
											  Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae lorem urna luctus amet leo at. Commodo mattis nisl. <br />
											  <br />

										  </span>
									  </div>
								  </div>
							  </div>
							  <div className="div-column-6">
								  <div className="div-column-7">
									  <div className="ellipse-71">
									  </div>
									  <div className="dog-221">
									  </div>
								  </div>
								  <div className="div-columnmargin-1">
									  <div className="ptitle-6">
										  <span className="about-us-2">
											  About Us
										  </span>
									  </div>
									  <div className="psubtitle-2">
										  <span className="lorem-ipsum-dolor-sit-amet-consectetur-egestas-tempus-vitae-lorem-urna-luctus-amet-leo-at-commodo-mattis-nisl-1">
											  Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae lorem urna luctus amet leo at. Commodo mattis nisl. <br />
											  <br />

										  </span>
									  </div>
								  </div>
							  </div>
							  <div className="div-column-8">
								  <div className="div-column-9">
									  <div className="ellipse-72">
									  </div>
									  <div className="dog-222">
									  </div>
								  </div>
								  <div className="div-columnmargin-2">
									  <div className="ptitle-7">
										  <span className="about-us-3">
											  About Us
										  </span>
									  </div>
									  <div className="psubtitle-3">
										  <span className="lorem-ipsum-dolor-sit-amet-consectetur-egestas-tempus-vitae-lorem-urna-luctus-amet-leo-at-commodo-mattis-nisl-2">
											  Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae lorem urna luctus amet leo at. Commodo mattis nisl. <br />
											  <br />

										  </span>
									  </div>
								  </div>
							  </div>
						  </div>
					  </div>
					  <div className="div-buttons-1">
						  <div className="link-5">
							 <a
                          href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
                          target="_blank"
                        >
							  <span className="buy-dodi">
								  BUY $DODI
							  </span>
							  </a>
						  </div>
					  </div>
				  </div>
			  </div>
			  <div className="about-us-4">
				  <div className="ptitle-8">
					  <p className="staking-dodi">
						  <span className="staking-dodi-sub-0"></span><span></span>
					  </p>
				  </div>
				  <div className="nav-1">
					  <div className="tab-4">
						  <div className="link-6">
							  <span className="how-it-works">
								  HOW IT WORKS
							  </span>
						  </div>
					  </div>
					  <div className="tab-5">
						  <div className="link-7">
							  <span className="rewards">
								  REWARDS
							  </span>
						  </div>
					  </div>
				  </div>
				  <div className="div-btabs-1">
					  <div className="frame-932">
						  <div className="frame-92">
							  <div className="div-column-10">
								  <div className="div-column-11">
									  <div className="ellipse-73">
									  </div>
									  <div className="dog-223">
									  </div>
								  </div>
								  <div className="div-columnmargin-3">
									  <div className="ptitle-9">
										  <span className="about-us-5">
											  About Us
										  </span>
									  </div>
									  <div className="psubtitle-4">
										  <span className="lorem-ipsum-dolor-sit-amet-consectetur-egestas-tempus-vitae-lorem-urna-luctus-amet-leo-at-commodo-mattis-nisl-3">
											  Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae lorem urna luctus amet leo at. Commodo mattis nisl. <br />
											  <br />

										  </span>
									  </div>
								  </div>
							  </div>
							  <div className="div-column-12">
								  <div className="div-columns-1">
									  <div className="div-column-13">
										  <div className="ellipse-74">
										  </div>
										  <div className="dog-224">
										  </div>
									  </div>
									  <div className="div-columnmargin-4">
										  <div className="ptitle-10">
											  <span className="about-us-6">
												  About Us
											  </span>
										  </div>
										  <div className="psubtitle-5">
											  <span className="lorem-ipsum-dolor-sit-amet-consectetur-egestas-tempus-vitae-lorem-urna-luctus-amet-leo-at-commodo-mattis-nisl-4">
												  Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae lorem urna luctus amet leo at. Commodo mattis nisl. <br />
												  <br />

											  </span>
										  </div>
									  </div>
								  </div>
								  <div className="div-column-14">
									  <div className="div-column-15">
										  <div className="ellipse-75">
										  </div>
										  <div className="dog-225">
										  </div>
									  </div>
									  <div className="div-columnmargin-5">
										  <div className="ptitle-11">
											  <span className="about-us-7">
												  About Us
											  </span>
										  </div>
										  <div className="psubtitle-6">
											  <span className="lorem-ipsum-dolor-sit-amet-consectetur-egestas-tempus-vitae-lorem-urna-luctus-amet-leo-at-commodo-mattis-nisl-5">
												  Lorem ipsum dolor sit amet consectetur. Egestas tempus vitae lorem urna luctus amet leo at. Commodo mattis nisl. <br />
												  <br />

											  </span>
										  </div>
									  </div>
								  </div>
							  </div>
						  </div>
						  <div className="whats-app-image-20240402-at-10512">
						  </div>
					  </div>
					  <div className="div-buttons-2">
						  <div className="link-8">
							 <a
                          href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
                          target="_blank"
                        >
							  <span className="buy-dodi-1">
								  BUY $DODI
							  </span>
							  </a>
						  </div>
					  </div>
				  </div>
			  </div>
			  <div className="tokenomics">
				  <div className="ptitle-12">
					  <span className="tokenomics-1">
						  Tokenomics
					  </span>
				  </div>
				  <div className="psubtitle-7">
					  <span className="lorem-ipsum-dolor-sit-amet-consectetur-nullam-in-diam-cursus-purus-vitae-lectus-aegestas-arcu-convallis-morbi-leo-quis-velit-dis-ut-faucibus-senectus-enim-quam-ac-bibendum-porttitor-mattis-eget">
						  Lorem ipsum dolor sit amet consectetur. Nullam in diam cursus purus vitae lectus a. Egestas arcu convallis morbi leo quis velit. Dis ut faucibus senectus enim quam ac bibendum porttitor. Mattis eget.
					  </span>
				  </div>
				  <div className="ptitle-13">
					  <span className="total-supply">
						  Total Supply
					  </span>
					  <span className="container-2">
						  7,280,000,000.00
					  </span>
				  </div>
				  <div className="div-btabs-2">
					  <div className="container">
						  <img className="container-1" src="assets/vectors/Container_x2.svg" />
					  </div>
					  <div className="frame-921">
						  <div className="frame-106">
							  <div className="check-circle">
								  <img className="container-11" src="assets/vectors/Container12_x2.svg" />
							  </div>
							  <p className="tax-on-all-transactions">
								  <span className="tax-on-all-transactions-sub-1"></span><span></span>
							  </p>
						  </div>
						  <div className="frame-108">
							  <div className="check-circle-1">
								  <img className="container-13" src="assets/vectors/Container13_x2.svg" />
							  </div>
							  <span className="tax-rewarded-to-stakers">
								  Tax Rewarded to Stakers
							  </span>
						  </div>
						  <div className="frame-109">
							  <div className="check-circle-2">
								  <img className="container-9" src="assets/vectors/Container31_x2.svg" />
							  </div>
							  <span className="liquidity-burnt">
								  Liquidity Burnt
							  </span>
						  </div>
						  <div className="frame-110">
							  <div className="check-circle-3">
								  <img className="container-6" src="assets/vectors/Container39_x2.svg" />
							  </div>
							  <span className="contract-renounced">
								  Contract Renounced
							  </span>
						  </div>
					  </div>
				  </div>
			  </div>
			  <div className="most-popular">
				  <div className="div-content">
					  <p className="dodi-wordwide">
						  <span className="dodi-wordwide-sub-0"></span><span></span>
					  </p>
				  </div>
				  <div className="frame-135">
					  <div className="chevrons-left">
						  <img className="vector-8" src="assets/vectors/Vector106_x2.svg" />
						  <img className="vector-9" src="assets/vectors/Vector28_x2.svg" />
					  </div>
					  <div className="frame-136">
						  <div className="whats-app-image-20240403-at-1108">
						  </div>
						  <div className="whats-app-image-20240403-at-1105">
						  </div>
						  <div className="whats-app-image-20240403-at-1106">
						  </div>
					  </div>
					  <div className="chevrons-left-1">
						  <img className="vector-11" src="assets/vectors/Vector103_x2.svg" />
						  <img className="vector-10" src="assets/vectors/Vector89_x2.svg" />
					  </div>
				  </div>
				  <div className="slider">
					  <div className="rectangle-951">
					  </div>
					  <div className="rectangle-949">
					  </div>
					  <div className="rectangle-952">
					  </div>
				  </div>
				  <div className="frame-134">
					  <p className="we-all-gonna-make-it-1">
						  <span className="we-all-gonna-make-it-1-sub-1"></span><span></span>
					  </p>
				  </div>
			  </div>
			  <div className="roadmap">
				  <div className="frame-131">
					  <div className="ptitle-14">
						  <span className="road-map">
							  Road Map
						  </span>
					  </div>
					  <div className="psubtitle-8">
						  <span className="lorem-ipsum-dolor-sit-amet-consectetur-nullam-in-diam-cursus-purus-vitae-lectus-aegestas-arcu-convallis-morbi-leo-quis-velit-dis-ut-faucibus-senectus-enim-quam-ac-bibendum-porttitor-mattis-eget-1">
							  Lorem ipsum dolor sit amet consectetur. Nullam in diam cursus purus vitae lectus a. Egestas arcu convallis morbi leo quis velit. Dis ut faucibus senectus enim quam ac bibendum porttitor. Mattis eget.
						  </span>
					  </div>
				  </div>
				  <div className="frame-130">
					  <div className="frame-118">
						  <div className="frame-129">
							  <img className="vector-4" src="assets/vectors/Vector42_x2.svg" />
						  </div>
						  <div className="frame-1291">
							  <div className="jan-20-th-20242">
								  Jan 20th 2024
							  </div>
							  <span className="lorem-ipsum-dolor-sit-amet-consectetur-2">
								  Lorem ipsum dolor sit amet consectetur.
							  </span>
						  </div>
						  <div className="frame-116">
						  </div>
						  <div className="container-8">
							  <div className="frame-126">
								  <img className="vector-1" src="assets/vectors/Vector12_x2.svg" />
							  </div>
							  <div className="frame-127">
								  <img className="vector-3" src="assets/vectors/Vector31_x2.svg" />
							  </div>
						  </div>
						  <div className="ellipse-9">
						  </div>
						  <div className="ellipse-17">
						  </div>
						  <div className="ellipse-12">
						  </div>
						  <div className="ellipse-14">
						  </div>
						  <div className="ellipse-15">
						  </div>
						  <div className="ellipse-16">
						  </div>
						  <div className="frame-128">
							  <div className="frame-122">
								  <div className="jan-20-th-20243">
									  Jan 20th 2024
								  </div>
								  <span className="lorem-ipsum-dolor-sit-amet-consectetur-3">
									  Lorem ipsum dolor sit amet consectetur.
								  </span>
							  </div>
							  <img className="vector-2" src="assets/vectors/Vector21_x2.svg" />
						  </div>
					  </div>
					  <div className="frame-1261">
						  <div className="jan-20-th-2024">
							  Jan 20th 2024
						  </div>
						  <span className="lorem-ipsum-dolor-sit-amet-consectetur">
							  Lorem ipsum dolor sit amet consectetur.
						  </span>
					  </div>
					  <div className="frame-1271">
						  <div className="jan-20-th-20241">
							  Jan 20th 2024
						  </div>
						  <span className="lorem-ipsum-dolor-sit-amet-consectetur-1">
							  Lorem ipsum dolor sit amet consectetur.
						  </span>
					  </div>
				  </div>
			  </div>
			  <div className="community">
				  <div className="ptitle-15">
					  <p className="dodi-community">
						  <span className="dodi-community-sub-1"></span><span></span>
					  </p>
				  </div>
				  <div className="div-columns-2">
					  <div className="div-column-16">
						  <div className="div-card">
							  <div className="div-column-17">
								  <div className="twitter-png">
								  </div>
							  </div>
							  <div className="div-columnmargin-6">
								  <div className="ptitle-16">
									  <span className="twitter">
										  twitter
									  </span>
								  </div>
								  <div className="psubtitle-9">
									  <span className="followers">
										  25,000+ followers
									  </span>
								  </div>
							  </div>
						  </div>
					  </div>
					  <div className="div-column-18">
						  <div className="div-card-1">
							  <div className="div-column-19">
								  <div className="telegram-png">
								  </div>
							  </div>
							  <div className="div-columnmargin-7">
								  <div className="ptitle-17">
									  <span className="telegram">
										  telegram
									  </span>
								  </div>
								  <div className="psubtitle-10">
									  <span className="members">
										  3,000+ members
									  </span>
								  </div>
							  </div>
						  </div>
					  </div>
					  <div className="div-column-20">
						  <div className="div-card-2">
							  <div className="div-column-21">
								  <div className="skill-iconsinstagram">
									  <img className="group" src="assets/vectors/Group2_x2.svg" />
								  </div>
							  </div>
							  <div className="div-columnmargin-8">
								  <div className="ptitle-18">
									  <span className="instagram">
										  INSTAGRAM
									  </span>
								  </div>
								  <div className="psubtitle-11">
									  <span className="coming-soon">
										  COMING SOON
									  </span>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
				  <div className="section">
					  <div className="ptitle-19">
						  <p className="dodi-universe">
							  <span className="dodi-universe-sub-1"></span><span></span>
						  </p>
					  </div>
					  <div className="div-columns-3">
						  <div className="container-10">
							  <div className="div-column-22">
								  <div className="jupiter-logo-1">
									  <img className="clip-path-group" src="assets/vectors/ClipPathGroup3_x2.svg" />
								  </div>
								  <div className="jupiter">
									  Jupiter
								  </div>
							  </div>
							  <div className="div-column-23">
								  <div className="frame-100">
									  <img className="group-3" src="assets/vectors/Group_x2.svg" />
								  </div>
								  <p className="raydium">
									  <span className="raydium-sub-0"></span><span></span>
								  </p>
							  </div>
							  <div className="div-column-24">
								  <div className="frame-101">
									  <img className="vector-26" src="assets/vectors/Vector88_x2.svg" />
								  </div>
								  <p className="dex-tools">
									  <span className="dex-tools-sub-0"></span><span></span>
								  </p>
							  </div>
							  <div className="div-column-25">
								  <div className="cmc-png">
								  </div>
							  </div>
						  </div>
						  <div className="container-7">
							  <div className="div-column-26">
								  <img className="frame-102" src="assets/vectors/Frame1025_x2.svg" />
								  <p className="coin-geko">
									  <span className="coin-geko-sub-0"></span><span></span>
								  </p>
							  </div>
							  <div className="div-column-27">
								  <div className="idt-jyootra-1">
									  <img className="fill-1" src="assets/vectors/Fill11_x2.svg" />
								  </div>
								  <div className="birdeye">
									  Birdeye
								  </div>
							  </div>
							  <div className="div-column-28">
								  <div className="solana-sol-logo-1">
								  </div>
								  <div className="solana">
									  Solana
								  </div>
							  </div>
							  <div className="div-column-29">
								  <img className="dex-screener-seeklogo-1" src="assets/vectors/DexScreenerSeeklogo1_x2.svg" />
								  <p className="dex-screener">
									  <span className="dex-screener-sub-0"></span><span></span>
								  </p>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
			  <div className="footer">
				  <div className="div-columnmargin-9">
					  <div className="frame-95">
						  <img className="logo-diodi-inu-3" src="assets/vectors/LogoDiodiInu3_x2.svg" />
						  <p className="dodi-inu">
							  <span className="dodi-inu-sub-1"></span><span></span>
						  </p>
					  </div>
					  <div className="div-buttons-3">
						  <div className="linkmargin-2">
							  <img className="vector-39" src="assets/vectors/Vector40_x2.svg" />
						  </div>
						  <div className="linkmargin-3">
							  <img className="vector-40" src="assets/vectors/Vector32_x2.svg" />
						  </div>
						  <div className="linkmargin-4">
							  <img className="vector-41" src="assets/vectors/Vector36_x2.svg" />
						  </div>
					  </div>
					  <div className="p">
						  <span className="lorem-ipsum-dolor-sit-amet-consectetur-sed-ac-quis-euismod-vivamus-et-vitae-acras-velit-pharetra-bibendum-magnis-mauris-in-luctus-viverra-blandit-mollis">
							  Lorem ipsum dolor sit amet consectetur. Sed ac quis euismod vivamus et vitae a cras. Velit pharetra bibendum magnis mauris in luctus viverra blandit mollis.
						  </span>
					  </div>
				  </div>
				  <div className="div-columnmargin-10">
					  <div className="div-columnmargin-11">
						  <div className="psubtitle-12">
							  <span className="community-1">
								  Community
							  </span>
						  </div>
						  <div className="list">
							  <div className="item">
								  <span className="link-xtwitter">
									  X (Twitter)
								  </span>
							  </div>
							  <div className="item-1">
								  <span className="link-telegram">
									  Telegram
								  </span>
							  </div>
							  <div className="item-2">
								  <span className="link-telegram-1">
									  Instagram
								  </span>
							  </div>
						  </div>
					  </div>
					  <div className="container-5">
						  <div className="div-columnmargin-12">
							  <div className="psubtitle-13">
								  <span className="external">
									  External
								  </span>
							  </div>
							  <div className="list-1">
								  <div className="item-3">
									  <span className="link-coin-gecko">
										  CoinGecko
									  </span>
								  </div>
								  <div className="item-4">
									  <span className="link-coin-market-cap">
										  Coin Market Cap
									  </span>
								  </div>
								  <div className="item-5">
									  <span className="link-defi-llama">
										  Defi Llama
									  </span>
								  </div>
								  <div className="item-6">
									  <span className="link-yield-yak-analytics">
										  DODI Analytics
									  </span>
								  </div>
							  </div>
						  </div>
						  <div className="div-columnmargin-13">
							  <div className="psubtitle-14">
								  <span className="developers">
									  Developers
								  </span>
							  </div>
							  <div className="list-2">
								  <div className="item-7">
									  <span className="link-docs">
										  Docs
									  </span>
								  </div>
								  <div className="item-8">
									  <span className="link-brand-assets">
										  Brand Assets
									  </span>
								  </div>
							  </div>
						  </div>
						  <div className="div-column-30">
							  <div className="psubtitle-15">
								  <span className="beginners">
									  Beginners
								  </span>
							  </div>
							  <div className="list-3">
								  <div className="item-9">
									  <span className="link-intro-to-yy-you-tube">
										  What is DODI(YouTube)
									  </span>
								  </div>
								  <div className="item-10">
									  <span className="link-what-is-yield-farming">
										  What is Staking?
									  </span>
								  </div>
								  <div className="item-11">
									  <span className="link-docs-1">
										  Docs
									  </span>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  <div className="nav-bar">
			  <div className="frame-94">
				  <Logo className="logo-diodi-inu-31" />
				  <p className="dodi-inu-1">
					  <span className="dodi-inu-1-sub-1"></span><span></span>
				  </p>
			  </div>
			  <div className="frame-1">
				  <span className="home">
					  Home
				  </span>
				  <div className="staking">
					  <span className="staking-1">
						  Staking
					  </span>
				  </div>
				  <span className="white-paper">
					  White paper
				  </span>
			  </div>
			  <div className="container-12">
				  <div className="frame-951">
					 <a
                          href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x5211674146FCaD8F4C34dE6bcb60f8C5940D2182"
                          target="_blank"
                        >
					  <span className="buy-dodi-2">
						  BUY $DODI
					  </span>
					  </a>
				  </div>
				  <div className="frame-2">
					  <span className="connect-wallet">
						  Connect Wallet
					  </span>
				  </div>
			  </div>
		  </div>
	  </div>
  )
}

export default LandingPage;
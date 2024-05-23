import "../../styles/Token.css";
import Tokenbg from "../../styles/assets/images/TokenBg.png";
import TokenGraph from "../../styles/assets/images/TokenGraph.svg";
import TokenMark from "../../styles/assets/images/TokenMark.svg";

export default function TokenSection() {
	return (
		<div className="token-div">
			<img
				loading="lazy"
				src={Tokenbg}
				className="token-img"
				alt="background"
			/>
			<div className="token-div-2">
				<div className="token-div-3">Tokenomics</div>
				<div className="token-div-4">
					Fair Launch, No Presale, Token Distribution through DEX's 
					and 2% Of Tokens Airdropped to Early Supporters. 
					Liquidity and Project financed by Creator.
				</div>
				<div className="token-div-5">
					<div className="token-div-6">Total Supply</div>
					<div className="token-div-7">7,280,000,000.00 </div>
				</div>
				<div className="token-div-8">
					<div className="token-div-9">
						<div className="token-div-10">
							<div className="token-column">
								<img
									loading="lazy"
									src={TokenGraph}
									className="token-img-2"
									alt="graph"
								/>
							</div>
							<div className="token-column-2">
								<div className="token-div-11">
									<div className="token-div-12">
										<img
											loading="lazy"
											src={TokenMark}
											className="token-img-3"
											alt="check mark"
										/>
										<div className="token-div-13">
											<span className="tokencolor">3% Tax</span> on
											All Transactions
										</div>
									</div>
									<div className="token-div-14">
										<img
											loading="lazy"
											src={TokenMark}
											className="token-img-4"
											alt="check mark"
										/>
										<div className="token-div-15">
											<span className="tokencolor">100% </span>
											Tax Rewarded to Stakers
											</div>
									</div>
									<div className="token-div-16">
										<img
											loading="lazy"
											src={TokenMark}
											className="token-img-5"
											alt="check mark"
										/>
										<div className="token-div-17">
											<span className="tokencolor">100% </span>
											Liquidity Burnt
											</div>
									</div>
									<div className="token-div-18">
										<img
											loading="lazy"
											src={TokenMark}
											className="token-img-6"
											alt="check mark"
										/>
										<div className="token-div-19">Contract Renounced</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


import DodiLogo from '../../styles/assets/images/Dodilogo.svg';
const colorStyle = {
	color: {
		r: 230,
		g: 230,
		b: 230,
		a: 1
	}
};

export default function Navbar(){
	return(
		<div className="header">
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
	)
}
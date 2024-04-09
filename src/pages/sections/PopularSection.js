import "../../styles/Popular.css";
import Left from "../../styles/assets/images/chevrons-left.png";
import Right from "../../styles/assets/images/chevrons-right.png";
import Slider1 from "../../styles/assets/images/WhatsAppImage20240403At1108.jpeg";
import Slider2 from "../../styles/assets/images/WhatsAppImage20240403At1105.jpeg";
import Slider3 from "../../styles/assets/images/WhatsAppImage20240403At1106.jpeg";


export default function PopularSection(){
	return(
		<div className="popular">
			<div className="popular-title">
				<span className="green-color">DODI </span>Wordwide
			</div>
			<div className="popular-slider">
				<img
					loading="lazy"
					src={Left}
					className="popular-chevron"
					alt="Left"
				/>
				<div className="pop-slider-container">
					<img
						loading="lazy"
						src={Slider1}
						//className="img"
						alt="Left"
						className="pop-slider-image"
					/>
					<img
						loading="lazy"
						src={Slider2}
						//className="img"
						alt="Left"
						className="pop-slider-image"
					/>
					<img
						loading="lazy"
						src={Slider3}
						//className="img"
						alt="Left"
						className="pop-slider-image"
					/>
				</div>
				<img
					loading="lazy"
					src={Right}
					className="popular-chevron"
					alt="Right"
				/>

			</div>
			<div className="pop-slider-indicator">
				<div className="pop-indicator-on">

				</div>
				<div className="pop-indicator-off">

				</div>
				<div className="pop-indicator-off">

				</div>

			</div>
			<div className="pop-headline">
				WE ALL GONNA <span className="green-color">MAKE IT </span>
			</div>

		</div>
	)
}
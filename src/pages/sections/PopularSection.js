import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Popular.css";
import Left from "../../styles/assets/images/chevrons-left.png";
import Right from "../../styles/assets/images/chevrons-right.png";
import Slider1 from "../../styles/assets/images/WhatsAppImage20240403At1108.jpeg";
import Slider2 from "../../styles/assets/images/WhatsAppImage20240403At1105.jpeg";
import Slider3 from "../../styles/assets/images/WhatsAppImage20240403At1106.jpeg";
import Slider4 from "../../styles/assets/images/WhatsAppImage20240403At1108.jpeg";
import Slider5 from "../../styles/assets/images/WhatsAppImage20240403At1105.jpeg";
import Slider6 from "../../styles/assets/images/WhatsAppImage20240403At1106.jpeg";

import SliderNew1 from "../../styles/assets/images/slidernew1.jpg";
import SliderNew2 from "../../styles/assets/images/slidernew2.jpg";
import SliderNew3 from "../../styles/assets/images/slidernew3.jpg";
import SliderNew4 from "../../styles/assets/images/slidernew4.jpg";
import SliderNew5 from "../../styles/assets/images/slidernew5.jpg";
import SliderNew6 from "../../styles/assets/images/slidernew6.jpg";

import SliderNew7 from "../../styles/assets/images/dodimusic.png";
import SliderNew8 from "../../styles/assets/images/dodicard.png";
import SliderNew9 from "../../styles/assets/images/slider9.png";
import SliderNew10 from "../../styles/assets/images/slider10.png";

import SliderNew11 from "../../styles/assets/images/slider11.png";
import SliderNew12 from "../../styles/assets/images/slider12.png";
import SliderNew13 from "../../styles/assets/images/slider13.png";
import SliderNew14 from "../../styles/assets/images/slider14.png";



export default function PopularSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = 18;

	const goToNextSlide = () => {
		setCurrentSlide((currentSlide + 1) % totalSlides);
	};

	const goToPrevSlide = () => {
		setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
	};

	// useEffect(() => {
	// 	const interval = setInterval(goToNextSlide, 2000);

	// 	return () => clearInterval(interval);
	// }, [currentSlide]);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: currentSlide,
		nextArrow: <CustomNextArrow onClick={goToNextSlide} />,
		prevArrow: <CustomPrevArrow onClick={goToPrevSlide} />,
		beforeChange: (current, next) => setCurrentSlide(next),
		autoplay: true, // Enable auto-sliding
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const images = [
		SliderNew11,
		SliderNew12,
		SliderNew13,
		SliderNew14,
		SliderNew9,
		SliderNew10,
		SliderNew7,
		SliderNew8,
		Slider1,
		SliderNew1,
		Slider2,
		SliderNew2,
		Slider3,
		SliderNew3,
		Slider4,
		SliderNew4,
		Slider5,
		SliderNew5,
		Slider6,
		SliderNew6,
	];

	return (
		<div className="popular">
			<div className="popular-title">
				<span className="green-color">DODI</span> Worldwide
			</div>
			<div className="popular-slider">
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index} className="pop-slider-image">
							<img src={image} alt={`Slider ${index + 1}`} className="pop-slider-image" />
						</div>
					))}
				</Slider>
			</div>
			<div className="pop-slider-indicator">
				{[...Array(totalSlides)].map((_, index) => (
					<div
						key={index}
						className={`pop-indicator ${currentSlide === index ? 'active' : ''}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>
			<div className="pop-headline">
				WE ALL GONNA <span className="green-color">MAKE IT</span>
			</div>
		</div>
	);
}

const CustomNextArrow = ({ onClick }) => (
	<img src={Right} className="popular-chevron" alt="Next" onClick={onClick} />
);

const CustomPrevArrow = ({ onClick }) => (
	<img src={Left} className="popular-chevron" alt="Previous" onClick={onClick} />
);

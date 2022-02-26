import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";
import { textAnimation, cardAnimation } from "../utils/Animations";
import Schedule from "../components/Schedule/Schedule";

function About() {
	const [element, controls] = useScroll();

	return (
		<div className="about-container" id="about" ref={element}>
			<div className="container">
				<motion.div
					className="title-container"
					variants={textAnimation}
					animate={controls}
					transition={{
						duration: 1,
					}}
				>
					<Title title="Schedule" color="blue" lineCenter={true} />
					{/* <p>Our Sponsors</p> */}
				</motion.div>
				<Schedule />
				{/* <p>
						We Believe that everyone deserves to have a website or online store. Innovation and simplicity
						make us happy. Our mission is to help people achieve what they have passionate about it.
					</p>
					<p>We are excited to simplify SEO for everyone through software, education, or cimmunity.</p> */}
				{/* <Button content="Why web3?" /> */}

				{/* <div className="cards" ref={element}>
					<Card title="Innovative Ideas" logo={<HiLightBulb />} animateCustom={controls} />
					<Card title="Planning" logo={<BsFillCalendarFill />} animateCustom={controls} />
					<Card title="Communication" logo={<BiSupport />} animateCustom={controls} />
					<Card title="24 * 7 Support" logo={<SiGooglemessages />} animateCustom={controls} />
				</div> */}
			</div>
		</div>
	);
}

export default About;

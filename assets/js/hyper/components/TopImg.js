import { h, app } from 'hyperapp';
import { globalState } from '../state/globalState';

export default function TopImg({ state, actions }) {
	console.log(state);
	return (
		<section id="TopImg">
			<div className="container">
				<div className="title">
					<h5>Welcome</h5>
					<h1>{state.companyInfo.title}</h1>
				</div>
				<div className="contact-info">
					<div className="container">
						<div className="booking">Book A Table</div>
						<h2>(281) 330-8004</h2>
						<div className="hours">
							<strong>Hours of Operation:</strong>
							<br />
							<strong>Monday - Friday 8:00am - 9:00pm</strong>
							<br />
							<strong>Saturday 8:00am -10:00pm</strong>
							<br />
							<strong>Sunday 10:00am - 7:00pm</strong>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

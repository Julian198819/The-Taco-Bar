import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs">
			<div className="container">
				<h5 className="comp-title">Contact Us</h5>
				<h2>blah blah blah</h2>

				<div className="box">
					<div className="row">
						<div className="col-md-6">
							<div className="title">{state.companyInfo.location}</div>
							<h6 className="Address">
								223 Main Street
								<br />
								Houston, TX 77002
							</h6>

							<p>
								<strong>Email: </strong>
								<a href="mailto:Info@TheTacoBar.com">Info@TheTacoBar.com</a>
							</p>
						</div>

						<div className="col-md-6">
							<h6>Phone:</h6>
							<div className="title">(281) 330 - 8004</div>
							<h6>Lunch Service:</h6>
							<p>
								Bookings: Monday - Friday
								<br />
								From 12pm - 1:30pm
							</p>

							<h6>Dinner Service:</h6>
							<p>
								Bookings: Daily
								<br />
								From 4pm - 5:30pm
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

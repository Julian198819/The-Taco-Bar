import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h5 className="comp-title">Our Story</h5>
						<h2>Tacos are food for the soul</h2>
						<p>
							Carne asada tacos are delicious, flank steak tacos with a few
							simple ingredients and tons of flavor. Just add some avocado,
							onion, cotija cheese and cilantro to the grilled steak for
							authentic carne asada tacos, similar to the street tacos you’d
							find in Mexico.
						</p>
						<div className="quote">
							"The best Carne Asada tacos ever" - <strong>Mike Jones</strong>{' '}
						</div>
						<a href="#" className="reserve-btn">
							Reserve
						</a>
					</div>
					<div className="col-md-6">
						<div className="prep-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

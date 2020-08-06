import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
	return (
		<section id="SpecialMenu">
			<div className="container">
				<h5 className="comp-title">Special Menu</h5>
				<h2>Delicious Array of Tacos</h2>
				<div className="row boxes">
					<div className="col-md-4">
						<div className="box">
							<div className="box-img">
								<div className="price-circle">$25</div>{' '}
							</div>
							<span className="title">Shrimp Tacos</span>
							<p className="details">Grilled shrimp, cliantro, onions</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="box">
							<div className="box-img">
								<div className="price-circle">$25</div>{' '}
							</div>
							<span className="title">Chicken Tacos</span>
							<p className="details">
								Grilled chicken, tomatos, cheese, cliantro, and onions
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="box">
							<div className="box-img">
								<div className="price-circle">$25</div>{' '}
							</div>
							<span className="title">Fish Tacos</span>
							<p className="details">
								Deep fried fish, avacado, and pico de gallo
							</p>
						</div>
					</div>
				</div>
				<a href="#" className="link">
					View Full Menu
				</a>
			</div>
		</section>
	);
}

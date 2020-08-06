import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	return (
		<section id="Reviews">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="side-img">
							<img src="https://nbclatino.files.wordpress.com/2012/03/a.jpg?w=640" />
						</div>
					</div>
					<div className="col-md-4">
						<h5 className="comp-title">Reviews</h5>
						<h2>The Food Network</h2>
						<h4>"The Best Tacos In Houston"</h4>
						<p>
							Tacos are filled with protein, wrapped in carbs, and topped with
							fresh veggies. You get all the nutrients and calories you need in
							one perfect package. Plus, they’re quick to make, simple, and
							deliciously effective at eliminating hunger.
						</p>
						<div className="author">
							<strong>Maria Ramirez</strong> -{' '}
							<em>winner of the chef master</em>
						</div>
						<div className="arrows">
							<i class="fas fa-arrow-left"></i>
							<i class="fas fa-arrow-right ready"></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

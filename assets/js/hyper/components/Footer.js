import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div className="container">
				<nav className="menu">
					<a href="#">Our Story</a>
					<a href="#">Reviews</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
					<a href="#">Contact Us</a>
				</nav>
			</div>
			<div className="copyright">&copy; 2019 Copyright</div>
		</footer>
	);
}

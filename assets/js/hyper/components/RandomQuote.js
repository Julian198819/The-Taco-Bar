import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section
			id="RandomQuote"
			style={{
				backgroundImage:
					'linear-gradient(135deg, rgba(0,0,0,.2)0,#000 100%),url("https://assets.rbl.ms/10664115/origin.png")'
			}}
		>
			<div className="container">
				<h1>
					"i love the taco bar, their wide array of tacos gives me a chance to
					switch up ingredients when i want a change from the tacos i normally
					eat"
				</h1>
				<span className="author">Miguel Ruiz-Gonzalez</span>
			</div>
		</section>
	);
}

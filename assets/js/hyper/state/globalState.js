var companyInfo = {
	title: 'THE TACO BAR',
	phone: '(281) 330-8004',
	location: 'Houston, Texas'
};

var specialMenu = [
	{
		title: 'Shrimp Tacos',
		description: 'Grilled shrimp, cliantro, onions',
		price: 25
	},
	{
		title: 'Chicken Tacos',
		description: 'Grilled chicken, tomatos, cheese, cliantro, and onions',
		price: 25
	},
	{
		title: 'Fish Tacos',
		description: 'Deep fried fish, avacado, and pico de gallo',
		price: 25
	}
];

export const globalState = {
	count: 0,
	companyInfo,
	specialMenu
};

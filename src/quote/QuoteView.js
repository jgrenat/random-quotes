import Backbone from 'backbone';

import 'quote/quote.css!';
import renderTemplate from 'quote/quoteTemplate.hbs!';
import QuoteCollection from 'quote/QuoteCollection';


export default Backbone.View.extend({

	el: '.view-main',

	events: {
		'click .js-newQuote': 'render'
	},

	initialize() {
		this.quotes = new QuoteCollection();
	},

	render() {
		let quote;
		while((quote = this.quotes.sample()) && quote === this.quote);
		this.quote = quote;

		this.$el.html(renderTemplate({ quote: quote.toJSON() }));
	}

});

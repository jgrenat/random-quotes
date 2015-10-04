import Backbone from 'backbone';

let AppRouter = Backbone.Router.extend({

	routes: {
		'': 'quote'
	},

	quote() {
		let promise;
		if(this.quoteView) {
			promise = Promise.resolve(this.quoteView);
		} else {
			promise = System.import('quote/QuoteView').then(QuoteView => {
				this.quoteView = new QuoteView['default']();
				return this.quoteView;
			});
		}

		return promise.then(quoteView => quoteView.render());
	}

});

export default new AppRouter();

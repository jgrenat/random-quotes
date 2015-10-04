import Backbone from 'backbone';

import config from 'config.json!';
import Quote from 'quote/QuoteModel';


export default Backbone.Collection.extend({

	model: Quote,

	initialize() {
		this.set(config.quotes);
	}

});

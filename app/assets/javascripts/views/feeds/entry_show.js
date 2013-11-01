NewReader.Views.EntryShow = Backbone.View.extend({
  initialize: function(options) {
  	this.feed = options.feed
  },

	render: function() {
		console.log(this.feed);
		console.log(this.model);
	}
})
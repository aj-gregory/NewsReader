NewReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feeds/show"],

	events: {
		"click .refresh": "refreshEntries"
	},

	render: function() {
		var renderedContent = this.template({
			feed: this.model,
			entries: this.model.entries
		});

		this.$el.html(renderedContent);
		return this;
	},

	refreshEntries: function() {
		var that = this;

		NewReader.feeds.fetch({
			success: function(){
				that.render();
			}
		});

		$('.refresh').html('Refreshing...')
	}
});
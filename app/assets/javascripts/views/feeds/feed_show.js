NewReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feeds/show"],

	render: function() {
		var renderedContent = this.template({
			feed: this.model,
			entries: this.model.entries
		});

		this.$el.html(renderedContent);
		return this;
	}
});
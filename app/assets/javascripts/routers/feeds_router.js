NewReader.Routers.Feeds = Backbone.Router.extend({
	routes: {
		"": "feedsIndex",
		"feeds/:id": "feedShow",
		"feeds/:feedId/:entryId": "entryShow"
	},

	feedsIndex: function() {
    view = new NewReader.Views.FeedsIndex({
    	collection: NewReader.feeds
    });
		this._swapView(view);
	},

	feedShow: function(id)  {
    view = new NewReader.Views.FeedShow({
    	model: NewReader.feeds.get(id)
    });
		this._swapView(view);
	},

	entryShow: function(id) {
		view =  new NewReader.Views.EntryShow({
			feed: NewReader.feeds.get(:feedId),
      model: this.feed.entries.get(:entryId)
		});
		this._swapView(view);
	},

	_swapView: function(newView) {
		if (this.lastView){
			this.lastView.remove();
		}

		this.lastView = newView;
		$('#content').html(newView.render().$el);
	}

});

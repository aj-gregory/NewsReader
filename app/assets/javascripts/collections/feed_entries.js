NewReader.Collections.FeedEntries = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.feed = options.feed;
  },

  model: NewReader.Models.FeedEntry,

	url: function() {
		return "feeds/" + this.feed.id + "/entries"
	}

});

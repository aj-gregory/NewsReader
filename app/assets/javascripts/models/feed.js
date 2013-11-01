NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

	parse: function(attrs, options) {
		if (!this.entries) {
      this.entries = new NewReader.Collections.FeedEntries([], { feed: this })
		}
		this.entries.reset(attrs.entries)
    delete attrs.entries;
    return attrs;
	}
});

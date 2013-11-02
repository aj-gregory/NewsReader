class FeedsController < ApplicationController
  def index
    @feeds = Feed.includes(:entries).all
    @feeds.each do |feed|
      feed.reload
    end
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @feeds }
    end
  end

  def create
    feed = Feed.includes(:entries).find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end

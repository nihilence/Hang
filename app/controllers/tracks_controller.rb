class TracksController < ApplicationController
  def create
    @track = Track.new(
      name: params[:track][:name],
      sequence: params[:track][:sequence].to_json
    )
    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages
    end
  end

  def index
    @tracks = Track.all
    render json: @tracks
  end

end

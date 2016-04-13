class AirportsController < ApplicationController

  def index
    @airports = Airport.all
  end


end

class PagesController < ApplicationController
  before_action :authorise, only: [:home] 

  def home
  end

  def faq
  end


  private
    def authorise
      redirect_to login_path unless (@current_user.present?)
    end
end

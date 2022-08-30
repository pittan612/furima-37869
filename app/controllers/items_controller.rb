class ItemsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    
  end

  def new
    @item = Item.new
  end


end

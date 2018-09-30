class Api::ImagesController < ApplicationController
  before_action :set_image, only: [:show]
  before_action :set_project


  def index
    render json: @project.images.all
  end

  def show
  end

  private 

  def set_image
    @image = Image.find(params[:id])
  end 

  def set_project
    @project = Project.find(params[:project_id])
  end 

  def image_params
    params.require(:image).permit(:public)
  end 
end

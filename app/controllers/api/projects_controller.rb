class Api::ProjectsController < ApplicationController
  before_action :set_project, only: [ :show ]

  def index
    render json: Project.first(3)
  end

  def show
    render json: @project
  end

  def set_project
    @project = Project.find(params[:id])
  end 

  def project_params
    params.require(:project).permit( :title, :description, :public )
  end 

end

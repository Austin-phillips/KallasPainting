class Api::EmailsController < ApplicationController

  def create
    @email = Emails.create(email_params)
    if @emails.save 
      NewEmailsEmailMailer.new_emails_email(@email).deliver
      render json: @email 
    else
      render json: @email.errors, status: :unprocessable_entity
  end

  private
  def email_params
    params.require(:email).permit(:first, :last, :email, :message)
  end
end

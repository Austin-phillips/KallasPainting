class Api::EmailsController < ApplicationController

  def send_email
    @email = { 
      first: params[:first],
      last: params[:last],
      email: params[:email],
      message: params[:message]
    }
    ContactUsMailer.contact_us_mailer(@email).deliver
  end

  private
  def email_params
    params.require(:email).permit(:first, :last, :email, :message)
  end
end

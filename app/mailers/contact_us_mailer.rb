class ContactUsMailer < ApplicationMailer

  def contact_us_mailer(email)
    @email = email
    mail(to: 'phillips.austin51@gmail.com', subject: "Contact Us" )
  end 
end

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def hello
    pdf_filename = File.join(Rails.root, "tmp/ChinmayaLadResume.pdf")
  	send_file(pdf_filename, :filename => "ChinmayaLadResume.pdf", :disposition => 'inline', :type => "application/pdf")
  end
end

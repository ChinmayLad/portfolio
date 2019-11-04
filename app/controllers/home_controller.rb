class HomeController < ApplicationController
	def index
	end

	def resume
		pdf_filename = File.join(Rails.root, "public/ChinmayaLadResume.pdf")
		send_file(pdf_filename, :filename => "ChinmayaLadResume.pdf", :disposition => 'inline', :type => "application/pdf")
	end
end
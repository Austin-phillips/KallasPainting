class Project < ApplicationRecord
  has_many :images, dependent: :delete_all
end

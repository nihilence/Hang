class Track < ActiveRecord::Base
  validates :name, :sequence, presence: true
end

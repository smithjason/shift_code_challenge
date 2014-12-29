class Customer < ActiveRecord::Base
  has_many :requests, dependent: :destroy
end

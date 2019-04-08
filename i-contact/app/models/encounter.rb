class Encounter < ApplicationRecord
  belongs_to :human
  belongs_to :rate
end

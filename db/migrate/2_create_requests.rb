class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.belongs_to    :customer, index: true
      t.string        :status, default: "waiting"

      t.timestamps
    end
  end
end

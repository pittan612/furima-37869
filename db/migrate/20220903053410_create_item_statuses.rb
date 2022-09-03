class CreateItemStatuses < ActiveRecord::Migration[6.0]
  def change
    create_table :item_statuses do |t|

      t.timestamps
    end
  end
end

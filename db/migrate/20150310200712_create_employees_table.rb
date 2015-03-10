class CreateEmployeesTable < ActiveRecord::Migration
  def change
    create_table :employees_tables do |t|
      t.string :name
    end
  end
end

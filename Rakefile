require 'rake'
require File.expand_path('../config/environment', __FILE__)
require 'active_support/core_ext'

namespace :db do
  task reset: [:drop, :create, :migrate]

  task :create do
    puts "Creating #{DB_PATH} database"
    touch DB_PATH
  end

  task :drop do
    puts "Dropping #{DB_PATH} database"
    rm_f DB_PATH
  end

  task :migrate do
    ActiveRecord::Migrator.migrations_paths << File.dirname(__FILE__) + 'db/migrate'
    ActiveRecord::Migration.verbose = ENV["VERBOSE"] ? ENV["VERBOSE"] == "true" : true
    ActiveRecord::Migrator.migrate(ActiveRecord::Migrator.migrations_paths, ENV["VERSION"] ? ENV["VERSION"].to_i : nil) do |migration|
      ENV["SCOPE"].blank? || (ENV["SCOPE"] == migration.scope)
    end
  end

  task :seed do
    require APP_ROOT.join('db','seeds.rb')
  end
end

task :console do
  exec("irb -r ./config/environment")
end

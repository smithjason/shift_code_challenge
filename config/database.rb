# log queries to STDOUT when in development
if Sinatra::Application.development?
  ActiveRecord::Base.logger = Logger.new(STDOUT)
end

# autolaod all models
Dir[APP_ROOT.join('app','models','*.rb')].each do |model_file|
  filename = File.basename(model_file).gsub('.rb','')
  autoload(ActiveSupport::Inflector.camelize(filename), model_file)
end

db_options = {
  :adapter    => 'sqlite3',
  :database   => DB_PATH
}

ActiveRecord::Base.establish_connection(db_options)

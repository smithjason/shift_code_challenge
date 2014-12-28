require File.expand_path('../config/environment', __FILE__)

# auto-compile SASS to CSS
Sass::Plugin.options[:style] = :expanded
use Sass::Plugin::Rack

set :app_file, __FILE__

run Sinatra::Application

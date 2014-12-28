# set up gems listed in Gemfile
ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../../Gemfile', __FILE__)

# Require gems we care about
require 'bundler/setup' if File.exists?(ENV['BUNDLE_GEMFILE'])
require 'rubygems'
require 'uri'
require 'pathname'
require 'sqlite3'
require 'active_record'
require 'faker'
require 'logger'
require 'sinatra'
require 'sinatra/reloader' if development?
require 'haml'
require 'sass'
require 'sass/plugin/rack'

# app-centric path constants
APP_ROOT = Pathname.new(File.expand_path('../../', __FILE__))
APP_NAME = APP_ROOT.basename.to_s
DB_PATH = APP_ROOT.join('db', APP_NAME + ".db").to_s

# set up database and models
require APP_ROOT.join('config','database')

# require our controllers
Dir[APP_ROOT.join('app', 'controllers', '*.rb')].each { |file| require file }

# set root manually so configure can be called from this file
configure do
  set :root, APP_ROOT.to_path
  set :views, File.join(Sinatra::Application.root, "app", "views")
end

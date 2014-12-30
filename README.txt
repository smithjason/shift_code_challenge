USAGE
=========================================================

Follow the below steps to install dependencies, set up the database, and run the service.

In terminal:
  bundle install
  rake db:reset
  shotgun
  open http://localhost:9393
  
Optionally, you can 'rake db:seed' if you would like to seed the database with Customers and Requests.  Their created at time will, however, all be the same.

REST ROUTES
=========================================================

GET /requests

  Optional Parameter: status (waiting, picked up, or closed)

  Returns a rendered partial with name of customer, minutes spent waiting, and time the request was created.

  If you supply a status parameter, the partial will only include requests of that status.

DELETE /requests/:id

  Deletes the supplied request.  Returns a JSON object with the deleted request's id.

POST /customers

  Required Parameter: name

  Creates a new customer with the name supplied.  Returns a JSON object with the newly created customer's id and their name.

DELETE /customers/:id

  Deletes the supplied customer.  Returns a JSON object with the deleted customer's id and their name.

POST /customers/:id/requests

  Creates a new request attached to a customer given their id.  Returns a JSON object with the newly created request's id, the customer's id, and the requst's status.


WHY RUBY & SINATRA?
=========================================================

I chose Sinatra because it is specifically designed for use cases like this where only a thin web client is required.  It is also well suited for expansion or refactoring should the project grow larger than the initial assignment's scope.

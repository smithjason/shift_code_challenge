num_fake_customers = 100

# Seed fake Customers
num_fake_customers.times do
  name = Faker::Name.name
  Customer.create!(name: name)
end

num_fake_requests = 30

# Seed fake Requests of status 'waiting'
num_fake_requests.times do
  customer_id = rand(num_fake_customers)
  statuses = ['waiting','picked up','closed']
  status = statuses.sample
  Customer.find(customer_id).requests.create!(status: status)
end

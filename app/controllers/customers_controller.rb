post '/customers' do
  if params[:name]
    customer = Customer.new(name: params[:name])

    if customer.save
      status 200
      content_type :json
      {
        customer_id: customer.id,
        customer_name: customer.name
      }.to_json
    end
  else
    status 422
  end
end

post '/customers/:id/requests' do
  customer = Customer.find_by_id(params[:id])

  if customer
    customer_request = customer.requests.new

    if customer_request.save
      status 200
      content_type :json
      {
        request_id: customer_request.id,
        customer_id: customer.id,
        request_status: customer_request.status
      }.to_json
    else
      status 422
    end
  else
    status 422
  end
end

delete '/customers/:id' do
  customer = Customer.find(params[:id])
  customer_id = customer.id

  if customer
    customer.destroy

    status 200
    content_type :json
    {
      customer_id: customer_id
    }.to_json
  else
    status 404
  end
end

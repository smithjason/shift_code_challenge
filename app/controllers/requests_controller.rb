get '/requests' do
  if params[:status]
    requests = Request.includes(:customer).where(status: params[:status])
    customer_request_data = create_customer_objects_with_request_data(requests)
  else
    requests = Request.all
    customer_request_data = create_customer_objects_with_request_data(requests)
  end

  content_type :json
  { customer_requests: customer_request_data }.to_json
end

delete '/requests/:id' do
  @request = Request.find_by_id(params[:id])

  if @request
    @request.destroy

    status 200
    content_type :json
    { request_id: @request.id }.to_json
  else
    status 404
  end
end

def create_customer_objects_with_request_data(requests)
  requests.map do |request|
    minutes_spent_waiting = ((Time.now - request.created_at) / 60).to_i

    {
      name: request.customer.name,
      status: request.status,
      minutes_spent_waiting: minutes_spent_waiting,
      time_started_waiting: request.created_at
    }
  end
end

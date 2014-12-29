get '/requests' do
  if params[:status]
    requests = Request.includes(:customer).where(status: params[:status])
    customer_requests = create_customer_objects_with_request_data(requests)
  else
    requests = Request.all
    customer_requests = create_customer_objects_with_request_data(requests)
  end

  haml  :_requests,
        layout: false,
        locals: { customer_requests: customer_requests }
end

delete '/requests/:id' do
  request = Request.find(params[:id])
  request_id = request.id

  if request
    request.destroy

    status 200
    content_type :json
    { request_id: request_id }.to_json
  else
    status 404
  end
end

def create_customer_objects_with_request_data(requests)
  requests.map do |request|
    minutes_spent_waiting = ((Time.now - request.created_at) / 60).to_i
    request_time = request.created_at.getlocal("-08:00").strftime("%l:%M %p")

    {
      name: request.customer.name,
      status: request.status,
      minutes_spent_waiting: minutes_spent_waiting,
      time_requested: request_time
    }
  end
end

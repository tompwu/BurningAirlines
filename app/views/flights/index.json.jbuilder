json.array!(@flights) do |flight|
  json.extract! flight, :id, :plane_id, :origin, :destination, :date_time
  json.url flight_url(flight, format: :json)
end

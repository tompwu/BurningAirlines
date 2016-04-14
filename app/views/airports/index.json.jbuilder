json.array!(@airports) do |airport|
  json.extract! airport, :id, :name
  json.url airports_url(airport, format: :json)
end

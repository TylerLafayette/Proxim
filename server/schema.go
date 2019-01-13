package main

// Location is a latitude and longitude on a map.
type Location struct {
	Latitude  float64 `json:"lat"`
	Longitude float64 `json:"long"`
}

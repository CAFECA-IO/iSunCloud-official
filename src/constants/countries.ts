export interface ICountryDefinition {
  name: string;
  lat: number;
  lng: number;
}

export const COUNTRIES: ICountryDefinition[] = [
  // North America
  { name: "New York", lat: 40.7128, lng: -74.0060 },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Chicago", lat: 41.8781, lng: -87.6298 },
  { name: "Toronto", lat: 43.6532, lng: -79.3832 },
  { name: "Vancouver", lat: 49.2827, lng: -123.1207 },
  { name: "Mexico City", lat: 19.4326, lng: -99.1332 },

  // South America
  { name: "Sao Paulo", lat: -23.5505, lng: -46.6333 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
  { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 },
  { name: "Santiago", lat: -33.4489, lng: -70.6693 },
  { name: "Bogota", lat: 4.7110, lng: -74.0721 },

  // Europe
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Berlin", lat: 52.5200, lng: 13.4050 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
  { name: "Madrid", lat: 40.4168, lng: -3.7038 },
  { name: "Moscow", lat: 55.7558, lng: 37.6173 },
  { name: "Stockholm", lat: 59.3293, lng: 18.0686 },
  { name: "Zurich", lat: 47.3769, lng: 8.5417 },

  // Asia
  { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Taiwan", lat: 25.0330, lng: 121.5654 },
  { name: "Seoul", lat: 37.5665, lng: 126.9780 },
  { name: "Beijing", lat: 39.9042, lng: 116.4074 },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737 },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
  { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Bangkok", lat: 13.7563, lng: 100.5018 },
  { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Tel Aviv", lat: 32.0853, lng: 34.7818 },

  // Oceania
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
  { name: "Melbourne", lat: -37.8136, lng: 144.9631 },
  { name: "Auckland", lat: -36.8485, lng: 174.7633 },

  // Africa
  { name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { name: "Lagos", lat: 6.5244, lng: 3.3792 },
  { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
  { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
];

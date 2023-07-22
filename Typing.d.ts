interface CurrentWeather {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
}

interface Daily {
  precipitation_hours: [number]
  precipitation_sum: [number]
  rain_sum: [number]
  showers_sum: [number]
  snowfall_sum: [number]
  sunrise: [string]
  sunset: [string]
  temperature_2m_max: [number]
  temperature_2m_min: [number]
  time: [string]
  uv_index_clear_sky_max: [number]
  uv_index_max: [number]
  weathercode: [number]
  windspeed_10m_max: [number]
}

interface DailyUnits {
  precipitation_hours: string;
  precipitation_sum: string;
  rain_sum: string;
  showers_sum: string;
  snowfall_sum: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: string;
  weathercode: string;
  windspeed_10m_max: string;
}

interface Hourly {
  apparent_temperature: [number];
  dewpoint_2m: [number];
  direct_radiation: [number];
  freezinglevel_height: [number];
  is_day: [number];
  precipitation: [number];
  relativehumidity_2m: [number];
  temperature_2m: [number];
  terrestrial_radiation: [number];
  time: [string];
}

interface  HourlyUnits {
  apparent_temperature: string;
  dewpoint_2m: string;
  direct_radiation: string;
  freezinglevel_height: string;
  is_day: string;
  precipitation: string;
  relativehumidity_2m: string;
  temperature_2m: string;
  terrestrial_radiation: string;
  time: string;
}
interface Root {
  current_weather: CurrentWeather
  daily: Daily
  daily_units: DailyUnits
  elevation: number
  generationtime_ms: number
  hourly: Hourly
  hourly_units: HourlyUnits
  latitude: number
  longitude: number
  timezone: string
  timezone_abbreviation: stringtring
  utc_offset_seconds: number
}

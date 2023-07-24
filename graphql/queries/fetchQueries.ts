import { gql, useQuery } from '@apollo/client';

const fetchQueries = gql`
  query MyQuery(
    $current_weather: String
    $daily: String 
    $hourly: String
    $latitude: String!
    $longitude: String!
    $timezone: String!
    $models: String
  ) {
    myQuery(
      timezone: $timezone
      models: $models
      longitude: $longitude
      latitude: $latitude
      hourly: $hourly
      daily: $daily
      current_weather: $current_weather
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        precipitation_hours
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        windspeed_10m_max
      }
      daily_units {
        precipitation_hours
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_min
        temperature_2m_max
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        windspeed_10m_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dewpoint_2m
        direct_radiation
        freezinglevel_height
        is_day
        precipitation
        relativehumidity_2m
        temperature_2m
        terrestrial_radiation
        time
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        direct_radiation
        freezinglevel_height
        is_day
        precipitation
        relativehumidity_2m
        temperature_2m
        terrestrial_radiation
        time
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchQueries;

'use client' // converting the page into a client compobent

import { Country, City } from "country-state-city"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select"
import { GlobeAltIcon } from "@heroicons/react/24/solid";

type countryOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  }, 
  label: country.name,
}));



function CityPicker() {
  const [selectedCountry, setselectedCountry] = useState<countryOption>(null);
  const [selectedCity, setselectedCity] = useState<cityOption>(null);

  const router = useRouter();
  
  const handleSelectedCountry = (option: countryOption) => {
    setselectedCountry(option);
    setselectedCity(null);
  }

  const handleSelectedCity = (option: cityOption) => {
    setselectedCity(option);
    router.push(
      `/location/${option?.value.latitude}/${option?.value.longitude}`
    );


  }
  return (
    <div className=" space-y-4">
      <div className=" space-y-2">
        <div className="flex items-center space-x-2 text-white/80" >
          <GlobeAltIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">
            Country
          </label>
        </div>
        <Select
        options={options}
        value={selectedCountry}
        onChange={handleSelectedCountry}
        className=" text-black" /> 
      </div>

      {selectedCountry && (
        <div className=" space-y-2">
          <div className="flex items-center space-x-2 text-white/80" >
            <GlobeAltIcon className="h-5 w-5 text-white" />
            <label htmlFor="city">
              City
            </label>
          </div>
          <Select 
          options={
            City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(city => ({
              value: {
              latitude: city.latitude,
              longitude: city.longitude,
              isoCode: city.stateCode,
              }, 
              label: city.name,
            }))
          }
          value={selectedCity}
          onChange={handleSelectedCity}
          className=" text-black" /> 
        </div>
      )}
    </div>
  )
}

export default CityPicker
import "./SearchInput.css";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import getweather from "../../services/getweather";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DetailsItem from "../DetailsItem/DetailsItem";

function SearchInput() {
  const [city, setCity] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: weatherdata } = useQuery({
    queryKey: ["repoData", city],
    queryFn: () => getweather(city),
    enabled: !!city,
  });
  console.log(weatherdata);

  const onSubmit = (data) => {
    const formattedCity = data.cityname.replace(/\s+/g, "").toLowerCase();
    setCity(formattedCity);
    reset();
  };
  return (
    <div className="inputsearchwrapper">
      <div className="searchinput">
        <form onSubmit={handleSubmit(onSubmit)} className="iconwrapper">
          <input
            {...register("cityname", {
              required: " just type a city name",
            })}
            placeholder="Enter city name"
          />
          <FaSearch className="searchinputicon" />
        </form>
      </div>
      <div className="errorwraper">
        {errors?.cityname && <p>{errors?.cityname?.message}</p>}
      </div>
      {weatherdata && <DetailsItem weatherdata={weatherdata} />}
    </div>
  );
}

export default SearchInput;

import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchinput } from "../../Reducer/Reducer";
import "./Input.css";

function Input() {
  const [city, setCity] = useState(null);
  const dispatch = useDispatch();
  dispatch(searchinput(city));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedCity = data.cityname.replace(/\s+/g, "").toLowerCase();
    setCity(formattedCity);
    if (formattedCity) {
      dispatch(searchinput(formattedCity));
    }
    reset();
  };

  return (
    <>
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
    </>
  );
}

export default Input;

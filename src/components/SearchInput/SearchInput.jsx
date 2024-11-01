import "./SearchInput.css";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useState } from "react";
import getweather from "../../services/getweather";
import DetailsItem from "../DetailsItem/DetailsItem";
import Input from "../Input/Input";
import getforecast from "../../services/getforecast";
import ForeCast from "../ForeCast/ForeCast";

function SearchInput() {
  const [show, setShow] = useState(false);
  const city = useSelector((state) => state?.usersearch?.city);

  const { data: weatherdata } = useQuery({
    queryKey: ["repoData", city],
    queryFn: () => getweather(city),
    enabled: !!city,
  });

  const { data: forecastdata } = useQuery({
    queryKey: ["forecastData", city],
    queryFn: () => getforecast(city),
    enabled: !!city,
  });

  return (
    <div className="inputsearchwrapper">
      <Input />
      {/* {city == null && <p>search</p>} */}
      {weatherdata && <DetailsItem weatherdata={weatherdata} />}

      {show && city && (
        <div className="forecast">
          <ul className="forecastwrapper">
            {forecastdata?.list.map((forecast, index) => (
              <ForeCast forecast={forecast} key={index} />
            ))}
          </ul>
        </div>
      )}

      <button className="button" onClick={() => setShow((show) => !show)}>
        {show ? "show less" : "forecast weather"}
      </button>
    </div>
  );
}

export default SearchInput;

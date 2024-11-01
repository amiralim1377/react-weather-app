import "./SearchInput.css";
import getweather from "../../services/getweather";
import { useQuery } from "@tanstack/react-query";
import DetailsItem from "../DetailsItem/DetailsItem";
import Input from "../Input/Input";
import { useSelector } from "react-redux";
import { useState } from "react";

function SearchInput() {
  const [show, setShow] = useState(false);
  const city = useSelector((state) => state?.usersearch?.city);

  const { data: weatherdata } = useQuery({
    queryKey: ["repoData", city],
    queryFn: () => getweather(city),
    enabled: !!city,
  });

  return (
    <div className="inputsearchwrapper">
      <Input />
      {/* {city == null && <p>search</p>} */}
      {weatherdata && <DetailsItem weatherdata={weatherdata} />}
      <button className="button" onClick={() => setShow((show) => !show)}>
        {show ? "show less" : "forecast weather"}
      </button>
      {show && <p>salam</p>}
    </div>
  );
}

export default SearchInput;

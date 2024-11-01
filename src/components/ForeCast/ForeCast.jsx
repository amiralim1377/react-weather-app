import formatDate from "../../helper/helper";
import "./ForeCast.css";

function ForeCast({ forecast }) {
  return (
    <>
      <li className="liforecast">
        <p>Time: {formatDate(forecast.dt_txt)}</p>
        <p>Temp:{forecast.main.temp}°C</p>
        <p>Weather: {forecast.weather[0].description}</p>
      </li>
    </>
  );
}

export default ForeCast;

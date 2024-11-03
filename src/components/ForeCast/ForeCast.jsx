import formatDate from "../../helper/helper";
import "./ForeCast.css";

function ForeCast({ forecast }) {
  const { dt_txt, main, weather } = forecast;
  return (
    <>
      <li className="liforecast">
        <p>Time: {formatDate(dt_txt)}</p>
        <p>Temp:{main.temp}°C</p>
        <p>Weather: {weather[0].description}</p>
      </li>
    </>
  );
}

export default ForeCast;

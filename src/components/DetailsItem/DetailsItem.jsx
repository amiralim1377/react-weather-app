import "./DetailsItem.css";

function DetailsItem({ weatherdata }) {
  return (
    <div className="detailswrapper">
      <div className="Summarysituation">
        <p>
          <span>{weatherdata?.name}</span>-
          <span>{weatherdata?.sys?.country}</span>
        </p>
        <div className="imageicon-container">
          <img
            src={`https://openweathermap.org/img/wn/${weatherdata?.weather[0]?.icon}@2x.png`}
            alt={weatherdata?.weather[0]?.description ?? null}
          />
          <span className="tooltip">{weatherdata?.weather[0]?.main}</span>
        </div>

        <p>{weatherdata?.main?.temp} °C</p>
        <p>{weatherdata?.weather[0]?.description}</p>
      </div>
      <div className="detailsitem">
        <p>Real Feel: {weatherdata?.main?.feels_like}</p>
        <p>Humidity: {weatherdata?.main?.humidity}</p>
        <p>Visibility:{weatherdata?.visibility}</p>
        <p>Lowest Temperature:{weatherdata?.main?.temp_min}</p>
        <p>Wind Speed 4.12 km/h </p>
        <p>Highest Temperature:{weatherdata?.main?.temp_max} </p>
      </div>
    </div>
  );
}

export default DetailsItem;

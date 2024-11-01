const APIkey = "3c41ca9014fe1f37245317f7811bc0bf";

export default async function getweather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
  );

  const data = await res.json();
  console.log(data);

  return data;
}

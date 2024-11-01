const apiKey = "3c41ca9014fe1f37245317f7811bc0bf";
const city = "Tehran";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

export default async function getforecast() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
  console.log(data);
}

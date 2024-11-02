const APIkey = "3c41ca9014fe1f37245317f7811bc0bf";

export default async function getweather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
    );
    if (!res.ok) {
      throw new Error("network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

import { useState, useEffect, ChangeEvent } from "react";
import { optionType, forecastType } from "../types";

function useForecast() {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${
        import.meta.env.VITE_OPEN_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${
        city.lon
      }&units=metric&appid=${import.meta.env.VITE_OPEN_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          // this can be changed, how far in the future is the forecast
          // @todo: magic numbbers
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      });
  };

  const onSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);

    if (!value) return;
    getSearchOptions(value);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
}
export default useForecast;

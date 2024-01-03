const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const countriesData = JSON.parse(xhr.response);
  const countries_USD = countriesData.filter((country) => {
    const currencies = country.currencies;
    return currencies && currencies.hasOwnProperty("USD");
  });
    console.log(countries_USD);
};

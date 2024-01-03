const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const countriesData = JSON.parse(xhr.response);
  const countriesPopulation = countriesData.filter(
    (country) => country.population < 200000
  );
  console.log(countriesPopulation);
};

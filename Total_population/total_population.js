const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
    const countriesData = JSON.parse(xhr.response);
    const totalPopulation = countriesData.reduce((total, country) => {
        return total + country.population;
    },0);
console.log(totalPopulation);
};
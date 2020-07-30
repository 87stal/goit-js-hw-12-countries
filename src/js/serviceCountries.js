import updateContriesMarkup from './update-markup-countries';

function fetchCountries(countrieName) {
  const url = `https://restcountries.eu/rest/v2/name/${countrieName}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => updateContriesMarkup(data));
}
export default fetchCountries;

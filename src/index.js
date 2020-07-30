import './styles.css';
import { debounce } from 'lodash';
import fetchCountries from './js/serviceCountries';
import refs from './js/refs';
import clearCountriesContainer from './js/clearCountries';


let inputValue = '';
refs.inputCountrie.addEventListener(
  'input',
  _.debounce(onInputNamesCountrie, 500),
);

function onInputNamesCountrie(event) {
  clearCountriesContainer();
  const form = event.target;
  inputValue = form.value;
  fetchCountries(inputValue);
}


